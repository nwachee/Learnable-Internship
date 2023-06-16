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
    await services.Login(req.body);

    // const token = generateToken({ _id, role: 'student' }, { expiresIn: '5d' });

    res.json({ success: true, message: "Login Successful"});
  } catch (error) {
    next(error);
  }
};
