import mongoose from "mongoose";

const tagSchema = mongoose.Schema({
	name: String,
});

const projectSchema = mongoose.Schema({
	_id: { type: String },
	shortDescription: { type: String },
	fullDescription: { type: String },
	links: [{ url: string }],
	university: { type: String, ref: "User" },
	institute: { type: String, ref: "User", required: true },
	students: [
		{
			type: String,
			ref: "Student",
		},
	],
	deadline: { type: Date },
	tags: [tagSchema],
	skills: [skillSchema],
});

const tagModel = mongoose.model("Tag", tagSchema);

const projectModel = mongoose.model("Project", projectSchema);

export { projectModel, tagModel };
