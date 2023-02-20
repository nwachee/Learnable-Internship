const roomModel = require('../models/room')

class RoomService {
    //Create a Room
    async create(roomData){
        return await roomModel.create(roomData)
    }

    //Edit a Room
    async update(id, bookUpdate){
        return await roomModel.findByIdAndUpdate(id, bookUpdate, {new : true})
    }

    //Delete a Room
    async delete(id){
        return await roomModel.findByIdAndDelete(id)
    }


    //Get a single Room
    async fetchOne(filter){
        return await roomModel.findOne(filter)
    }

    //Get All Rooms
    async fetch(filter){
        return await roomModel.find(filter)
    }
}


module.exports = new RoomService()