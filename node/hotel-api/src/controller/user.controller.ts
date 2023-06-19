import * as services from '../services/userService';

export const register = async (req, res, next) => {
  try {
    const newUser = await services.Create(req.body);

    res.status(201).json({ message: 'User Registered Sucessfully', success: true, data: newUser });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const {email} = req.body
    const user = await services.fetchOne({email});

     if(!user) {
        res.status(401).json({ success: false, message: "User not Found"});
      }

    // const token = generateToken({ _id, role: 'student' }, { expiresIn: '5d' });
    res.status(201).json({ success: true, message: "Login Successful", data: user});
  } catch (error) {
    next(error);
  }
};
