const { AuthenticationError } = require('apollo-server-express');
const { Profile, Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

    },

Mutation: {
    addProfile: async (parent, { username, email, password, address }) => {
        const profile = await Profile.create({ username, email, password });
        const token = signToken(profile);
        return { token, profile };
      },
      login: async (parent, { email, password }) => {
        const profile = await Profile.findOne({ email });
  
        if (!profile) {
          throw new AuthenticationError('No profile found with this email address');
        }
  
        const correctPw = await profile.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(profile);
  
        return { token, profile };
      },
      
addItem:

rentItem:

removeItem:

},
};

module.exports = resolvers;