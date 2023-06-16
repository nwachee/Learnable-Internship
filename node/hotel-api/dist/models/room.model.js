"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// instantiate a mongoose schema
const RoomSchema = new mongoose_1.Schema({
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
const roomModel = (0, mongoose_1.model)('Room', RoomSchema);
exports.default = roomModel;
