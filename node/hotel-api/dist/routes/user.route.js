"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const router = (0, express_1.Router)();
// Login Router
router.get("/login", user_controller_1.login);
//Register Router
router.get("/register", user_controller_1.register);
//Export the Router
exports.default = router;
