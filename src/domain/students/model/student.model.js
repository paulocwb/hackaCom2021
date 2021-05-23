import idFactory from "../../../app/utils/idGenerator";
import mongoose from "mongoose";
const studentSchema = mongoose.Schema(
	{
		_id: { type: String },
		email: { type: String, required: true, unique: true },
		name: { type: String, required },
		password: { type: String, required: true },
		college: { type: String, ref: "User" },
		classroom: { type: String, required: true },
		projects: { type: String, ref: "Project" },
		hoursAwarded:{ type: Number, default:0},
		tags: [{ _id: mongoose.Schema.Types.ObjectId,
			ref: "Tag" }],
		bio: { type: String },
		active: { type: Boolean,default: true},
	},
	{ timestamps: true }
);

studentSchema.pre('save',function(){
	if(this.isNew){
		this._id = idFactory();
	}
})

const studentModel = mongoose.model("Student", studentSchema);

export { studentModel };
