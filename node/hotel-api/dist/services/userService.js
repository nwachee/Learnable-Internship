"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.fetchAll = exports.fetchOne = exports.Delete = exports.Update = exports.Create = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const HttpException_js_1 = require("../exceptions/HttpException.js");
//Create a User
const Create = async (userData) => {
    return await user_model_1.default.create(userData);
};
exports.Create = Create;
//Edit a user
const Update = async (id, userUpdate) => {
    return await user_model_1.default.findByIdAndUpdate(id, userUpdate, { new: true });
};
exports.Update = Update;
//Delete a user
const Delete = async (id) => {
    return await user_model_1.default.findByIdAndDelete(id);
};
exports.Delete = Delete;
//Get a single user
const fetchOne = async (filter) => {
    return await user_model_1.default.findOne(filter);
};
exports.fetchOne = fetchOne;
//Get All users
const fetchAll = async (filter) => {
    return await user_model_1.default.find(filter);
};
exports.fetchAll = fetchAll;
//login Student
const Login = async (input) => {
    const { email, password } = input;
    const user = await user_model_1.default.findOne({ email });
    if (!user)
        throw new HttpException_js_1.HttpException(404, `user with email ${email} not found`);
    // if (!user.matchPassword(password)) {
    //   throw new HttpException(409, 'Invalid Password');
    // }
    return user;
};
exports.Login = Login;
