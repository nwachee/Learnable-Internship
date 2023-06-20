import { Router } from 'express'
const router = Router()

import { createRoom, fetchOneRoom, updateRoom, deleteRoom, fetchAllRoom } from "../controller/room.controller"

//GET
router.get('/', fetchAllRoom)

//GET
router.get('/:id', fetchOneRoom)

//POST
router.post('/', createRoom)

//PATCH
router.patch('/:id', updateRoom)

//DELETE
router.delete('/:id', deleteRoom)

export default router

