import userModel from '../models/user'

class UserService {
    //Create a User
    async create(userData){
        return await userModel.create(userData)
    }

    //Edit a user
    async update(id, userUpdate){
        return await userModel.findByIdAndUpdate(id, userUpdate, {new : true})
    }

    //Delete a user
    async delete(id){
        return await userModel.findByIdAndDelete(id)
    }


    //Get a single user
    async fetchOne(filter){
        return await userModel.findOne(filter)
    }

    //Get All users
    async fetch(filter){
        return await userModel.find(filter)
    }
}

//export user 
export default new UserService()