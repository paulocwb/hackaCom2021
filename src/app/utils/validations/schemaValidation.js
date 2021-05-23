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

const memberSchema = Joi.object({
	email: Joi.string().email().required(),
	name: Joi.string().min(4).required(),
	password: Joi.string().min(5).required(),
	cargo: Joi.string().required(),
});


const inviteSchema = Joi.object({
	studentEmail: Joi.string().email().required(),
	studentName: Joi.string().required(),
	institute: Joi.string().required(),
})

export { instituteSchema,memberSchema,inviteSchema };