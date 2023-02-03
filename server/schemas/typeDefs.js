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
        address: AddressData
    }

    input AddressData {
        streetName: String!
        city: String!
        state: String!
        zip: String!
    }

    type Query {
        profiles: [Profile] 
        profile(profileId: ID!): Profile
        items: [Items]
        item(itemId: ID!): Items
    }

    type Mutation {
        addItem(itemName: String!, description: String!, itemPrice: Float!, address: AddressData!):
        Items
    }


`;
    
module.exports = typeDefs;