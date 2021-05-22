import mongoose from "mongoose";

const inviteSchema = mongoose.Schema({
	studentEmail: { type: String, required: true },
	studentName: { type: String, required: true },
	status:{ type: String,enum:['pending','redeemed'],default: 'pending'},
	institute: { type: String, ref: "User", required: true },
	token: { type: String, required: true },
	redeemed: { type: Boolean },
});

const inviteModel = mongoose.model("Invite", inviteSchema);

export { inviteModel };
