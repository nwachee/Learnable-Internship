const mongoose = require("mongoose")

// instantiate a mongoose schema
const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: String,
        required: true,
        trim: true
    },

    // date: {
    //     type: String,
    //     default: Date.now
    // }

})

// create a model from schema and export it
const roomModel = mongoose.model('Room', RoomSchema)
module.exports = roomModel