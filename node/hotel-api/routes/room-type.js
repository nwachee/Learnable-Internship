import { Router } from "express"
const router = Router()

import { getAllRooms, getRoomById, addRoom, editRoomById, deleteRoomById } from "../controller/room"


//GET
router.get('/', getAllRooms)
router.get('/room-type/:id', getRoomById)

//POST
router.post('/room-type', addRoom)

//PATCH
router.patch('/room-type/:id', editRoomById)

//DELETE
router.delete('/room-type/:id', deleteRoomById)
