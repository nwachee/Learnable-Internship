const router = require("express").Router()

const {
    createRoom,
    fetchOneRoom,
    updateRoom,
    deleteRoom,
    fetchAllRoom
} = require("../controller/room")


//Creating routes for the API

//GET
router.get('/', fetchAllRoom)
// router.get('/', (req, res) => {
// 	res.status(200).send({ message: "LIST OF ROOMS AVAILABLE", success : true})
// })
router.get('/:id', fetchOneRoom)

//POST
router.post('/', createRoom)

//PATCH
router.patch('/:id', updateRoom)

//DELETE
router.delete('/id', deleteRoom)

module.exports = router

