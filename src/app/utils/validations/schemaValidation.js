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
});

const projectSchema = Joi.object({
	shortDescription: Joi.string().required(),
	fullDescription: Joi.string().required(),
	links: Joi.array().items(
		Joi.object({
			url: Joi.string(),
		})
	),
	creator: Joi.string().required(),
	deadline: Joi.date().required(),
	tags: Joi.array().items({
		_id: Joi.string().required(),
	}),
});

export { instituteSchema, memberSchema, inviteSchema,projectSchema };
