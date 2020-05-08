const mongoose = require('mongoose')

const commandSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    commands: [{
        idProduct: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true 
        },
        quantity: {
            type: Number,
            required: true
        },
        rendu: {
            type: Boolean,
            default: false
        },
        wtgb: {
            type: Boolean,
            default: false
        },
        enabled: {
            type: Boolean,
            default: true
        },
        price: {
            type: Number,
            required: true
        },
        garantit: {
            type: String,
            required: true
        }
    }],
    total: {
        type: Number,
        required: true
    },
    received: {
        type: Boolean,
        default: false
    },
    enabled: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        required: true
    }
},
    { timestamps: true })

const Command = mongoose.model('Command', commandSchema)

module.exports = Command