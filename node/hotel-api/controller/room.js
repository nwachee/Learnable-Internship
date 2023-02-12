const Room = require('../models/room')

//Create a Class to query the database

    //Fetch All Rooms
    const getAllRooms = async () => {
        const room = await Room.find({}, "-___v");
        if(!room){
            return console.log("No Rooms Found")
        }
    }

    //CREATE query
    const addRoom = async (room) => {
        return await Room.create(room)
    }

    //READ query
    const getRoomById = async (id) => {
        const singleRoom = await Room.findOne({ _id: id})
        if(!singleRoom){
            return console.log(`no task with id : ${id}`)
        }

    }

    //UPDATE query
    const editRoomById = async (id, data) => {
        return await Room.findOneAndUpdate({ _id: id}, data)

    }

    //DELETE query
    const deleteRoomById = async(id) => {
        return await Room.findOneAndDelete({ _id: id})
    }


module.exports = {
    getAllRooms,
    getRoomById,
    addRoom,
    editRoomById,
    deleteRoomById

}