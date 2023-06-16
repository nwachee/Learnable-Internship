"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = async () => {
    const MONGO_URI = process.env.MONGO_URI;
    try {
        mongoose_1.default.set('strictQuery', false);
        mongoose_1.default.connect(MONGO_URI);
        console.log('Database connected');
    }
    catch (error) {
        process.exit(1);
    }
};
// create a model from schema and export it
exports.default = connectDb;
