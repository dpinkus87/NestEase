const { AuthenticationError } = require("apollo-server-express");
const { Profile, Item } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        profiles: async () => {
            // return await Profile.find();
            const allProfiles = await Profile.find()
            console.log(allProfiles);
            return allProfiles;
          },
      
          profile: async (parent, { profileId }) => {
            return await Profile.findOne({ _id: profileId });
          },
        items: async  () => {
          return await Item.find();
        },
        item: async (parent, { itemId }) => {
          return await Item.findOne({ _id:itemId})
        }
    },

Mutation: {
    addProfile: async (parent, { email, password, city }) => {
        const profile = await Profile.create({  email, password, city });
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

        if (!this.rented)
        throw new AuthenticationError('Item is not available');

        // if there is rented, add to shopping cart
      },
      removeProfile: async (parent, { profileId }) => {
        return Profile.findOneAndDelete({ _id: profileId });
      },
    },

      const correctPw = await profile.isCorrectPassword(password);

rentItem:

removeItem:

};

module.exports = resolvers;
