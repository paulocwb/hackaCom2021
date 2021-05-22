import Joi from "joi";

const instituteSchema = Joi.object({
	email: Joi.string().email().required(),
	name: Joi.string().min(4).required(),
	role: Joi.string().required(),
	orgname: Joi.string().required(),
	password: Joi.string().min(5).required(),
	website: Joi.string(),
	about: Joi.string(),
});

export { instituteSchema };