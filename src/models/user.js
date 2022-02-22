const { json } = require('express/lib/response')
const mongoose = require('mongoose')
const user_schema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    account_bank:{
        type: String,
        require: true
    },
    address: {
        city: {
            type: String,
            require: true
        },
        code_zip: {
            type: Number,
            require: true
        },
        lat: {
            type: Number,
            require: true
        },
        length: {
            type: Number,
            require: true
        }
    }
})
module.exports = mongoose.model('user_document', user_schema)