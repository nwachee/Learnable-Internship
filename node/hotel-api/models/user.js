const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required: [true, 'Must have a name'],
        trim : true
    },

    email: {
        type : String,
        required: [true, 'Must have an email'],
        trim : true
    },

    password: {
        type : String,
        required : [true, 'Must have a password']
    },

    roles: {
        type : String
    },

    location: {     
        type: String,    
        default: "Nigeria",
    },

    date: {
        type: String,
        default: Date.now
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User

