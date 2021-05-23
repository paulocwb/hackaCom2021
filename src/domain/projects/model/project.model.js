import mongoose from "mongoose";
import idFactory from "../../../app/utils/idGenerator";
const tagSchema = mongoose.Schema({
	name: String,
});


const taskSchema = mongoose.Schema({
	name: { type: String },
	url: [{ type: String}],
	description:{ type: String},
	status:{ type: String, enum:['DOING','FINISHED']},
	students:[{ type: String, ref:"Student"}]
})

const projectSchema = mongoose.Schema({
	_id: { type: String },
	shortDescription: { type: String },
	fullDescription: { type: String },
	links: [{ url: String }],
	status:{
		hoursPrize:{type:Number, min:0},
		startDate:{ type: Date, default: Date.now},
		finishDate:{ type: Date},
		winner: { type: String,ref: "Student"},
		tasks:[taskSchema]
	},
	assigned: { type: String, ref: "User" },
	creator: { type: String, ref: "User", required: true },
	students: [
		{
			type: String,
			ref: "Student",
		},
	],
	deadline: { type: Date },
	tags: [tagSchema],
});

projectSchema.pre('save',function(){
	if(this.isNew){
		this._id = idFactory();
	}
})

const tagModel = mongoose.model("Tag", tagSchema);

const projectModel = mongoose.model("Project", projectSchema);

export { projectModel, tagModel };
