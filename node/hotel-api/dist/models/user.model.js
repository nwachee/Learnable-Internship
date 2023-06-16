"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    fullname: {
        type: String,
        required: [true, 'Must have a name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Must have an email'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Must have a password']
    }
}, {
    timestamps: true
});
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt_1.default.genSalt(10);
    this.password = await bcrypt_1.default.hash(this.password, salt);
});
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt_1.default.compare(password, this.password);
};
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
