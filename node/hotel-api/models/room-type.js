import { Schema, model } from "mongoose"

// instantiate a mongoose schema
const RoomTypeSchema = new Schema({
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
export default model('roomType', RoomTypeSchema)