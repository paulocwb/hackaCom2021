import mongoose from "mongoose";

const logSchema = mongoose.Schema({

	body:{ type:Object},
	headers:{ type:Object},
	method:{type:String},
	url:{ type:String},
	baseUrl:{ type:String},
	originalUrl:{ type:String},
	params:{ type:Object},
	query:{ type:Object},
	length:{ type:Number},
	dateReq:{ type:Date, default:Date.now()},
})

const logModel = mongoose.model("RequestLog",logSchema);

export {logModel}