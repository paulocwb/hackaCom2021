
import {userModel} from "../../user/model/user.model.js";

class UserRepository{

	async createUser(user){
		
		const user = await userModel.create(user).lean(true);
		return user;
	}
}