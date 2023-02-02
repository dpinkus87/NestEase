const { AuthenticationError } = require('apollo-server-express');
const { Profile, Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            return Profile.find();
          },
      
          profile: async (parent, { profileId }) => {
            return Profile.findOne({ _id: profileId });
          },
    },

Mutation: {
    addProfile: async (parent, { username, email, password, city }) => {
        const profile = await Profile.create({ username, email, password, city });
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
      addItem: async (parent, {itemName, description, itemPrice }) => {
        const newItem = await Item.create({ itemName, description, itemPrice});
        return {newItem};
        },
      rentItem: async (parent, {itemName, itemPrice}) => {
        const rented = await Item.findOne(itemName);

        if (!this.rentItem)
        throw new AuthenticationError('Item is not available');
      },
      removeProfile: async (parent, { profileId }) => {
        return Profile.findOneAndDelete({ _id: profileId });
      },
    },


// rentItem:

// removeItem:

};

module.exports = resolvers;