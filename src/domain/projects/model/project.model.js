import mongoose from "mongoose";

const tagSchema = mongoose.Schema({
	name: String,
});


const activities = mongoose.Schema({
	name: { type: String },
	url: [{ type: String}],
	
})

const projectSchema = mongoose.Schema({
	_id: { type: String },
	shortDescription: { type: String },
	fullDescription: { type: String },
	links: [{ url: string }],
	status:{
		startDate:{ type: Date, default: Date.now},
		finishDate:{ type: Date},
		activities:[

		]
	},
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
