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
router.route('/').get(getAllRooms)
router.route('/room-type/:id').get(getRoomById)

//POST
router.route('/room-type').post(addRoom)

//PATCH
router.route('/room-type/:id').patch(editRoomById)

//DELETE
router.route('/room-type/:id').delete(deleteRoomById)
