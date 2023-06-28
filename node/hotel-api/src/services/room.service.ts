import roomModel from "../models/room.model"

    //Create a Room
    export const Create = async (input) => {
        return await roomModel.create(input)
    }
    //Edit a Room
    export const Update = async (id, bookUpdate) => {
        return await roomModel.findByIdAndUpdate(id, bookUpdate, {new : true})
    }
    //Delete a Room
    export const Delete = async (id) => {
        return await roomModel.findByIdAndDelete(id)
    }
    //Get a single Room
    export const fetchOne = async (filter) => {
        return await roomModel.findOne(filter)
    }
    //Get All Rooms
    export const fetchAll = async (filter) =>{
        return await roomModel.find(filter)
    }
