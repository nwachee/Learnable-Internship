const router = require("express").Router()

import { createRoom, fetchOneRoom, updateRoom, deleteRoom, fetchAllRoom } from "../controller/room"


//Creating routes for the API

//GET
router.get('/room', fetchAllRoom)
// router.get('/', (req, res) => {
// 	res.status(200).send({ message: "LIST OF ROOMS AVAILABLE", success : true})
// })
router.get('/room/:id', fetchOneRoom)

//POST
router.post('/', createRoom)

//PATCH
router.patch('/:id', updateRoom)

//DELETE
router.delete('/id', deleteRoom)

export default router

