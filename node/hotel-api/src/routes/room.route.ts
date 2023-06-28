import { Router } from 'express'
import validate from '../middleware/validate'
import { newRoom, roomUpdate} from '../schema/index.schema'
import { isAuth } from '../middleware/auth.middleware'
const router = Router()

import { createRoom, fetchOneRoom, updateRoom, deleteRoom, fetchAllRoom } from "../controller/room.controller"

//GET
router.get('/', fetchAllRoom)

//GET
router.get('/:id', fetchOneRoom)

//POST
router.post('/', validate(newRoom), isAuth, createRoom)

//PATCH
router.patch('/:id', validate(roomUpdate), isAuth, updateRoom)

//DELETE
router.delete('/:id', deleteRoom)

export default router

