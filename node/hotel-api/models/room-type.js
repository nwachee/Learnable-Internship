const mongoose = require("mongoose")

// instantiate a mongoose schema
const RoomTypeSchema = new mongoose.Schema({
    roomName : {
        type : String,
        required: [true, 'Must have a name'],
        trim : true
    },
    
    date: {
        type: String,
        default: Date.now
    }
})

// create a model from schema and export it
module.exports = mongoose.model('roomType', RoomTypeSchema)