const { Schema, model } = require('mongoose');
const { Profile } = require('./Profile');

const itemSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },

    description: {
        type: String,
    },

    itemPrice: {
        type: Number,
        required: true,
    },
    address: {
        streetName: {
          type: String
        },
        city: {
          type: String
        },
        state: {
          type: String
        },
        zip: {
          type: String
        }
    
      },
    itemOwner: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    itemRenter: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },

    availability: {
        type: Boolean,
        default: true
},
},
{
    toJSON: {
        getters: true,
    },
},
);

const Item = model('Item', itemSchema);

module.exports = Item;