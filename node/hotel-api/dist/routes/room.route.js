"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const room_controller_1 = require("../controller/room.controller");
//Creating routes for the API
//GET
router.get('/', room_controller_1.fetchAllRoom);
router.get('/room/:id', room_controller_1.fetchOneRoom);
//POST
router.post('/', room_controller_1.createRoom);
//PATCH
router.patch('/:id', room_controller_1.updateRoom);
//DELETE
router.delete('/:id', room_controller_1.deleteRoom);
exports.default = router;
