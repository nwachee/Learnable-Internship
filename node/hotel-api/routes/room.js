const express = require("express")
const router = express.Router()

const {
    getAllRooms,
    getRoomById,
    addRoom,
    editRoomById,
    deleteRoomById
} = require("../controller/room")


//Creating routes for the API

//GET
router.route('/').get(getAllRooms)
router.route('/room/:id').get(getRoomById)


//POST
router.route('/room').post(addRoom)

//PATCH
router.route('/room/:id').patch(editRoomById)

//DELETE
router.route('/room/:id').delete(deleteRoomById)

