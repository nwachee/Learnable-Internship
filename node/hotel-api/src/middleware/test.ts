const Joi = require("joi");

    export const validateUser = (req, res, next, isOptional = false) => {
            const schema = Joi.object({
                fullName: isOptional ? Joi.string().min(3).max(100).trim() : Joi.string().required().min(3).max(100).trim(),
                email: isOptional ? Joi.string().email().lowercase().trim() : Joi.string().email().required().lowercase().trim(),
                password: isOptional ? Joi.string().min(8).max(20) : Joi.string().required().min(8).max(20)
            });

            const {error, data} = schema.validate(req.body, {
                abortEarly: false
            });

            if(error) {
                let errorMessage = [];    
                error.details.forEach(detail => {
                    errorMessage.push(detail.message);
                });
                return res.status(403)
                    .send({
                        message: errorMessage,
                        success: false
                    });
            }
            next();
        }
    
   

