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
        itemPrice: Int
        itemOwner: Profile
        itemRenter: Profile
        itemCity: Profile
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
        addProfile( email: String!, password: String!, city: String): Auth
        removeProfile( profileId: ID): Profile
        login( email: String!, password: String!): Auth
        addItem( itemName:String!, 
                description: String, 
                itemPrice: Int!):Items
        addItem2( itemName:String!, 
                description: String, 
                itemPrice: Int!):Items
        rentItem(_id: ID!): Profile
        removeItem(_id: ID!): Items
    }


`;
    
module.exports = typeDefs;