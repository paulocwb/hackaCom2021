
import {instituteModel} from "../model/institute.model.js";

class UserRepository{

	async createUser(user){
		
		const User = new instituteModel(user);
		await User.save();
		return User.toObject();
	}
	async insertMember({institute,name,email,password,cargo}){
		const member = await instituteModel.findByIdAndUpdate(institute,
			{$push:{members:{name,email,password,cargo}}},
			{new:true});
		return member.toObject();
	}

	async findMemberByInstitute({institute}){
		const member = await instituteModel.findOne({_id:institute},'members').lean(true);
		return member;
	}
	
	async getById(id){
		return await instituteModel.findById(id).lean(true);

	}

	async toggleAccountStatus({id,value}){
		await instituteModel.updateOne({_id:id},{active:value});
		return;
	}

}

export { UserRepository };