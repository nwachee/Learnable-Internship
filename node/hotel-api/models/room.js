const mongoose = require("mongoose")

// instantiate a mongoose schema
const RoomSchema = new mongoose.Schema({
    roomName : {
        type : String,
        required: [true, 'Must have a name'],
        trim : true
    },

    roomType : {
        type : String,
        required: [true, 'Must have a name'],
        trim : true
    },

    roomPrice : {
        type : String,
        required: [true, 'Must have a price'],
        trim : true
    },

    date: {
        type: String,
        default: Date.now
    }
})

// create a model from schema and export it
module.exports = mongoose.model('Room', RoomSchema)