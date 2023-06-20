var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as services from '../services/roomService';
//create a Room
export const createRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqBody = req.body;
        console.log(reqBody);
        //check for existing room
        const checkRoom = yield services.fetchOne({ name: reqBody.name });
        if (checkRoom)
            res.status(403).json({ success: false, message: 'Room Already Exists' });
        //else create a room
        const newRoom = yield services.Create(reqBody);
        res.status(201).json({ success: true, message: 'Room created Successfully', data: newRoom });
    }
    catch (error) {
    }
});
//update a Room
export const updateRoom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomId = req.params.id;
        const updateData = req.body;
        //check if room exits before updating
        const checkRoom = yield services.fetchOne({ _id: roomId });
        if (!checkRoom)
            res.status(403).json({ success: false, message: 'Room to update not found' });
        //make the unique key consistent
        if (updateData.name) {
            const checkRoomUpdate = yield services.fetchOne({ name: updateData.name });
            if (checkRoomUpdate._id.toString() !== checkRoomUpdate._id.toString()) {
                res.status(403).json({ success: false, message: 'Room name already exists' });
            }
        }
        //update room
        const updatedData = yield services.Update(roomId, updateData);
        res.status(200).json({ success: true, message: 'Room updated successfully', data: updatedData });
    }
    catch (error) {
        next(error);
    }
});
//delete a Room
export const deleteRoom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedRoom = yield services.Delete(req.params.id);
        res.status(200).json({ success: true, message: 'Room deleted successfully', data: deletedRoom });
    }
    catch (error) {
        next(error);
    }
});
//fetch a single Room
export const fetchOneRoom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomId = req.params.id;
        //check if room exits before updating
        const checkRoom = yield services.fetchOne({ _id: roomId });
        if (!checkRoom)
            res.status(403).json({ success: false, message: 'Room to fetch not found' });
        res.status(200).json({ success: true, message: 'Room fetched successfully', data: checkRoom });
    }
    catch (error) {
        next(error);
    }
});
//Fetch all Rooms
export const fetchAllRoom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = req.query.search;
        const fetchedBooks = yield fetch(search);
        res.status(200).json({ success: true, message: 'Rooms fetched successfully', data: fetchedBooks });
    }
    catch (error) {
        next(error);
    }
});
