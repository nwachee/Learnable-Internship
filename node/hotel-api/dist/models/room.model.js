import { Schema, model } from "mongoose";
// instantiate a mongoose schema
const RoomSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
});
// create a model from schema and export it
const roomModel = model('Room', RoomSchema);
export default roomModel;
