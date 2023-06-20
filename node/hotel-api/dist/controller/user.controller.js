var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as services from '../services/userService';
export const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield services.Create(req.body);
        res.status(201).json({ message: 'User Registered Sucessfully', success: true, data: newUser });
    }
    catch (error) {
        next(error);
    }
});
export const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const user = yield services.fetchOne({ email });
        if (!user) {
            res.status(401).json({ success: false, message: "User not Found" });
        }
        // const token = generateToken({ _id, role: 'student' }, { expiresIn: '5d' });
        res.status(201).json({ success: true, message: "Login Successful", data: user });
    }
    catch (error) {
        next(error);
    }
});
