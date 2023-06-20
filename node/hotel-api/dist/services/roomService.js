var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import roomModel from "../models/room.model";
//Create a Room
export const Create = (roomData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield roomModel.create(roomData);
});
//Edit a Room
export const Update = (id, bookUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    return yield roomModel.findByIdAndUpdate(id, bookUpdate, { new: true });
});
//Delete a Room
export const Delete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield roomModel.findByIdAndDelete(id);
});
//Get a single Room
export const fetchOne = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    return yield roomModel.findOne(filter);
});
//Get All Rooms
export const fetchAll = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    return yield roomModel.find(filter);
});
