const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
      email: String
      city: String
      rentable_items: [Items]
    }
    type Items {
        itemName: String
        description: String
        itemPrice: Float 
        itemOwner: Profile
        itemRenter: Profile
        address: Address
        
    }

    type Address {
        streetName: String!
        city: String!
        state: String!
        zip: String!
    }
    
    input AddressData {
        streetName: String!
        city: String!
        state: String!
        zip: String!
    }

    type Auth {
        token: ID
        profile: Profile
    }
    type Query {
        profiles: [Profile] 
        profile(profileId: ID!): Profile
        items: [Items]
        item(itemId: ID!): Items
    }

    type Mutation {
        addProfile( email: String!, password: String!, city: String!): Auth
        removeProfile( profileId: ID): Profile
        login( email: String!, password: String!): Auth
        addItem( itemName:String!, 
                description: String, 
                itemPrice: Int!, 
                address: AddressData):Items
        rentItem(_id: ID!): Profile
        removeItem(_id: ID!): Items
    }


`;
    
module.exports = typeDefs;