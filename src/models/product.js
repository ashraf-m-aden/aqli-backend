const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    pics: [{
        src: {
            type: String,
            required: true
        }
    }],
    attributes: [{
        Couleurs: [{
            color: {
                type: String,
            }
        }],
        Tailles: [{
            size: {
                type: Number,
                validate(value) {
                    if (!validator.isNumeric) {
                        throw new Error('Ecrivez un nombre pour la taille')
                    }
                }
            }
        }],
        Stockages: [{
            stockage: {
                type: Number,
                validate(value) {
                    if (!validator.isNumeric) {
                        throw new Error('Ecrivez un nombre pour le stockage')
                    }
                }
            }
        }]
    },

    ],
    description: {
        type: Array,
        required: true
    },
    idProductTypes: [{
        idProductType: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    }],
    keywords: [{
        keyword: {
            type: String,
            required: true
        }
    }],
    enabled: {
        type: Boolean,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    },
    serialNumber: {
        type: Number,
        required: true
    }
},
{timestamp: true})
// verify credentials, this a function we use on product and not on product

const product = mongoose.model('Product', productSchema)

module.exports = product