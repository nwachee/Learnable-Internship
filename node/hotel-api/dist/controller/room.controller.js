"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllRoom = exports.fetchOneRoom = exports.deleteRoom = exports.updateRoom = exports.createRoom = void 0;
const services = __importStar(require("../services/roomService"));
//create a Room
const createRoom = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        //check for existing room
        const checkRoom = await services.fetchOne({ name: reqBody.name });
        if (checkRoom)
            res.status(403).json({ success: false, message: 'Room Already Exists' });
        //else create a room
        const newRoom = await services.Create(reqBody);
        res.status(201).json({ success: true, message: 'Room created Successfully', data: newRoom });
    }
    catch (error) {
    }
};
exports.createRoom = createRoom;
//update a Room
const updateRoom = async (req, res, next) => {
    try {
        const roomId = req.params.id;
        const updateData = req.body;
        //check if room exits before updating
        const checkRoom = await services.fetchOne({ _id: roomId });
        if (!checkRoom)
            res.status(403).json({ success: false, message: 'Room to update not found' });
        //make the unique key consistent
        if (updateData.name) {
            const checkRoomUpdate = await services.fetchOne({ name: updateData.name });
            if (checkRoomUpdate._id.toString() !== checkRoomUpdate._id.toString()) {
                res.status(403).json({ success: false, message: 'Room name already exists' });
            }
        }
        //update room
        const updatedData = await services.Update(roomId, updateData);
        res.status(200).json({ success: true, message: 'Room updated successfully', data: updatedData });
    }
    catch (error) {
        next(error);
    }
};
exports.updateRoom = updateRoom;
//delete a Room
const deleteRoom = async (req, res, next) => {
    try {
        const deletedRoom = await services.Delete(req.params.id);
        res.status(200).json({ success: true, message: 'Room deleted successfully', data: deletedRoom });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteRoom = deleteRoom;
//fetch a single Room
const fetchOneRoom = async (req, res, next) => {
    try {
        const roomId = req.params.id;
        //check if room exits before updating
        const checkRoom = await services.fetchOne({ _id: roomId });
        if (!checkRoom)
            res.status(403).json({ success: false, message: 'Room to fetch not found' });
        res.status(200).json({ success: true, message: 'Room fetched successfully', data: checkRoom });
    }
    catch (error) {
        next(error);
    }
};
exports.fetchOneRoom = fetchOneRoom;
//Fetch all Rooms
const fetchAllRoom = async (req, res, next) => {
    try {
        const search = req.query.search;
        const fetchedBooks = await fetch(search);
        res.status(200).json({ success: true, message: 'Rooms fetched successfully', data: fetchedBooks });
    }
    catch (error) {
        next(error);
    }
};
exports.fetchAllRoom = fetchAllRoom;
