"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAll = exports.fetchOne = exports.Delete = exports.Update = exports.Create = void 0;
const room_model_1 = __importDefault(require("../models/room.model"));
//Create a Room
const Create = async (roomData) => {
    return await room_model_1.default.create(roomData);
};
exports.Create = Create;
//Edit a Room
const Update = async (id, bookUpdate) => {
    return await room_model_1.default.findByIdAndUpdate(id, bookUpdate, { new: true });
};
exports.Update = Update;
//Delete a Room
const Delete = async (id) => {
    return await room_model_1.default.findByIdAndDelete(id);
};
exports.Delete = Delete;
//Get a single Room
const fetchOne = async (filter) => {
    return await room_model_1.default.findOne(filter);
};
exports.fetchOne = fetchOne;
//Get All Rooms
const fetchAll = async (filter) => {
    return await room_model_1.default.find(filter);
};
exports.fetchAll = fetchAll;
