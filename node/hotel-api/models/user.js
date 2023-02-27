import { Schema, model } from "mongoose"

const userSchema = new Schema({
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

    isAdmin: {
        type : Boolean,
        default: false
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

const User = model("User", userSchema)
export default User

