import mongoose from "mongoose";
const skillSchema = mongoose.Schema({
	skill: { type: String },
});
const studentSchema = mongoose.Schema(
	{
		_id: { type: String },
		email: { type: String, required: true, unique: true },
		name: { type: String, required },
		password: { type: String, required: true },
		college: { type: String, ref: "User" },
		class: { type: String, required: true },
		projects: { type: String, ref: "Project" },
		skills: [skillSchema],
		bio: { type: String },
		active: { type: Boolean },
	},
	{ timestamps: true }
);

const skillModel = mongoose.model("Skill", skillSchema);

const studentModel = mongoose.model("Student", studentSchema);

export { studentModel, skillModel };
