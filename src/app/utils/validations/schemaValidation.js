import Joi from "joi";

const createUserSchema = Joi.object.keys({
	email: Joi.string().email(),
	name: Joi.string().min(4),
	role: Joi.string().required(),
	password: Joi.string().min(5),
});

export { createUserSchema };
