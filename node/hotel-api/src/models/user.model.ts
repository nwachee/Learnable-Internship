import { Schema, model } from "mongoose"
import bcrypt from 'bcrypt';
import { UserDoc } from "../interfaces/user.interface";

const userSchema = new Schema <UserDoc>({
    fullname: {
        type : String,
        required: [true, 'Must have a name'],
        trim : true
    },

    email: {
        type : String,
        required: [true, 'Must have an email'],
        trim : true
    },

    password: {
        type : String,
        required : [true, 'Must have a password']
    }},
    {
    timestamps: true
    }
    )

    userSchema.pre<UserDoc>('save', async function (next) {
        if (!this.isModified('password')) {
          next();
        }
      
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
      });
      
      userSchema.methods.matchPassword = async function (password) {
        return await bcrypt.compare(password, this.password);
      };

const User = model("User", userSchema)
export default User

