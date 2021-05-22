import mongoose from "mongoose";

const tagSchema = mongoose.Schema({
	name: String,
});


const activitiesSchema = mongoose.Schema({
	name: { type: String },
	url: [{ type: String}],
	description:{ type: String},
	status:{ type: String, enum:['DOING','FINISHED']}

})

const projectSchema = mongoose.Schema({
	_id: { type: String },
	shortDescription: { type: String },
	fullDescription: { type: String },
	links: [{ url: string }],
	status:{
		hoursPrize:{type:Number, min:0},
		startDate:{ type: Date, default: Date.now},
		finishDate:{ type: Date},
		activities:[activitiesSchema]
	},
	university: { type: String, ref: "User" },
	org: { type: String, ref: "User", required: true },
	studentsAllocated: [
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
