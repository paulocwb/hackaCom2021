import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		_id: { type: String },
		email: { type: String, required: true, unique: true },
		name: { type: String, required },
		password: { type: String, required: true },
		role: { type: String, enum: ["osc", "university"] },
		active: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export { userModel };
