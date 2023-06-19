import userModel from '../models/user.model'

    //Create a User
    export const Create = async (userData) => {
        return await userModel.create(userData)
    }
    //Edit a user
    export const Update = async (id, userUpdate) => {
        return await userModel.findByIdAndUpdate(id, userUpdate, {new : true})
    }
    //Delete a user
    export const Delete = async(id) => {
        return await userModel.findByIdAndDelete(id)
    }
    //Get a single user
    export const fetchOne = async(filter) => {
        return await userModel.findOne(filter)
    }
    //Get All users
    export const fetchAll = async (filter) => {
        return await userModel.find(filter)
    }


