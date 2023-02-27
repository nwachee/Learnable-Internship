import { create as _create, findByIdAndUpdate, findByIdAndDelete, findOne, find } from '../models/room'

class RoomService {
    //Create a Room
    async create(roomData){
        return await _create(roomData)
    }

    //Edit a Room
    async update(id, bookUpdate){
        return await findByIdAndUpdate(id, bookUpdate, {new : true})
    }

    //Delete a Room
    async delete(id){
        return await findByIdAndDelete(id)
    }


    //Get a single Room
    async fetchOne(filter){
        return await findOne(filter)
    }

    //Get All Rooms
    async fetch(filter){
        return await find(filter)
    }
}


export default new RoomService()