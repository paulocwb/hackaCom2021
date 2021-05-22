import mongoose from "mongoose";

const membersSchema = mongoose.Schema({
	name:{}
})

const instituteSchema = mongoose.Schema(
	{
		_id: { type: String },
		email: { type: String, required: true, unique: true },
		OrgName: { type: String, required },
		password: { type: String, required: true },
		role: { type: String, enum: ["OSC", "INSTITUICAO"] },
		members:[membersSchema],
		active: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

const instituteModel = mongoose.model("User", instituteSchema);

export { instituteModel };
