const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HeroSchema = new Schema ({
    name: {
        type: String, 
        require: true,
        maxLength : 100
    }
})
module.exports = mongoose.model('Hero', HeroSchema)