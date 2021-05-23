import mongoose from "mongoose";
import {hashPwd} from "../../../app/utils/encryptPass";

const membersSchema = mongoose.Schema(
	{
	name:{type: String,},
	email:{type: String,},
	password:{type: String,},
	cargo:{type: String,enum:['professor','colaborador','coordenador'],},
	active: { type:Boolean, default: true } 
})

const instituteSchema = mongoose.Schema(
	{
		_id: { type: String },
		email: { type: String, required: true, unique: true },
		orgname: { type: String, required: true},
		password: { type: String, required: true,select: false},
		role: { type: String, enum: ["OSC", "INSTITUICAO"] },
		members:[membersSchema],
		active: { type: Boolean, default: true },
		website:{ type: String},
		about: { type: String},
		picture:{ type: String}
	},
	{ timestamps: true }
);

instituteSchema.pre("save", async function(){

	if (this.isNew){
		this.password = await hashPwd(this.password);
	}
});
const instituteModel = mongoose.model("User", instituteSchema);

export { instituteModel };
