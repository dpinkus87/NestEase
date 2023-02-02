const { Schema, model } = require('mongoose');

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
    itemCity: {
        type: Schema.Types.city,
        ref: 'Profile'
    },

    itemOwner: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    itemRenter: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
},
{
    toJSON: {
        getters: true,
    },
},
);

const Item = model('item', itemSchema);

module.exports = Item;