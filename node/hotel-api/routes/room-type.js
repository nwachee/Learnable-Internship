const express = require("express")
const router = express.Router()

const {
    getAllRooms,
    getRoomById,
    addRoom,
    editRoomById,
    deleteRoomById
} = require("../controller/room")


//GET
router.get('/', getAllRooms)
router.get('/room-type/:id', getRoomById)

//POST
router.post('/room-type', addRoom)

//PATCH
router.patch('/room-type/:id', editRoomById)

//DELETE
router.delete('/room-type/:id', deleteRoomById)
