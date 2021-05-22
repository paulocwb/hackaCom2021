
import {instituteModel} from "../model/institute.model.js";

class UserRepository{

	async createUser(user){
		
		const User = new instituteModel(user);
		await User.save();
		return User.toObject();
	}

	async getById(id){
		console.log('id',id);
		return await instituteModel.findById(id).lean(true);

	}

	async toggleAccountStatus({id,value}){

		const up =  await instituteModel.updateOne({_id:id},{email:'abcd'}).lean(true);
		console.log(up);
		return
	}
}

export { UserRepository };