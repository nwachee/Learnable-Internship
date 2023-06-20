var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import userModel from '../models/user.model';
//Create a User
export const Create = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userModel.create(userData);
});
//Edit a user
export const Update = (id, userUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userModel.findByIdAndUpdate(id, userUpdate, { new: true });
});
//Delete a user
export const Delete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userModel.findByIdAndDelete(id);
});
//Get a single user
export const fetchOne = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userModel.findOne(filter);
});
//Get All users
export const fetchAll = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userModel.find(filter);
});
