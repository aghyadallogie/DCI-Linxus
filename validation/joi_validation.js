const Joi = require("@hapi/joi");

const registerValidation = data => {
    const joiobject = Joi.object({
        refs: Joi.array().required(),
        name: Joi.string().min(6).required(),
        email: Joi.string().min(8).required().email(),
        password: Joi.string().min(8).required()
    });
    return joiobject.validate(data);
}

const loginValidation = data => {
    const joiobject = Joi.object({
        email: Joi.string().min(8).required().email(),
        password: Joi.string().min(8).required()
    });
    return joiobject.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
