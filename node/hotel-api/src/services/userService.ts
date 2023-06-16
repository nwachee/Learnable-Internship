import userModel from '../models/user.model'
import { HttpException } from '../exceptions/HttpException.js';

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

    //login Student
export const Login = async (input) => {
    const { email, password } = input;
  
    const user = await userModel.findOne({ email });
    if (!user) throw new HttpException(404, `user with email ${email} not found`);
  
    // if (!user.matchPassword(password)) {
    //   throw new HttpException(409, 'Invalid Password');
    // }
    return user;
  };

