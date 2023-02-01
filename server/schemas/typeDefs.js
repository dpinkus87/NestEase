const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        name: String
    }

type Query {
    profiles: [Profile]!
    profile(profileID: ID!): Profile
    }

`;
    
module.exports = typeDefs;