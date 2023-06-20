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
    const {email, password} = req.body
    const user = await services.fetchOne({email});
     if(!user) {
        res.status(401).json({ success: false, message: "User not Found"});
      }
      const result = await user.matchPassword(password)
      if(!result) {
        res.status(401).json({ success: false, message: "Incorrect Password!"});
      }
    // const token = generateToken({ _id, role: 'student' }, { expiresIn: '5d' });
    res.json({ success: true, message: "Login Successful"});
  } catch (error) {
    next(error);
  }
};
