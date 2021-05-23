import mongoose from "mongoose";
import crypto from "crypto";
const inviteSchema = mongoose.Schema({
	studentEmail: { type: String, required: true },
	studentName: { type: String, required: true },
	status:{ type: String,enum:['pending','redeemed'],default: 'pending'},
	institute: { type: String, ref: "User", required: true },
	token: { type: String },
	redeemed: { type: Boolean,default:false },
});

inviteSchema.pre('save',async function(){
	if(this.isNew){
		this.token = crypto.randomBytes(20).toString('hex');
	}
})

const inviteModel = mongoose.model("Invite", inviteSchema);

export { inviteModel };
