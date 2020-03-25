const Joi = require('@hapi/joi');


const registerValidation = (data) => {

    // REGISTER VALIDATION
    const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
    });

    return schema.validate(data);
};

const loginValidation = (data) => {

    // LOGIN VALIDATION
    const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
    });

    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;