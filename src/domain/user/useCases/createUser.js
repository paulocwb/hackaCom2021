import {createUserSchema} from "../../../app/utils/validations/schemaValidation";
import httpResponses from "../../../app/utils/httpResponses/ResponsesJson";
class CreateUser {

	constructor(repository) {
		this.repository = repository;
	}

	async execute(request,response){
		this.data  = request.body;
		try{
			const isValid = await this.validateBody();
		}catch(err){
			httpResponses.badRequestResponse({message:err.message,details:err,response});
	
		}
	}

	async validate(){
		
		const isValid = createUserSchema().validate();
		console.log(isValid);
		return isValid;
	}
}
export { CreateUser };
