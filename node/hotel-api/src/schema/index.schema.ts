import Joi from 'joi';

export const registerUser = Joi.object({
    fullname: Joi.string().max(54).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).max(30).required(),
});

export const loginUser = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(30).required(),
  });

  export const newRoom = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.string().max(30).required(),
  });

  export const roomUpdate = Joi.object().keys({
    name: Joi.string(),
    price: Joi.string(),
  });
