import { memberSchema } from "../../../app/utils/validations/schemaValidation";
import httpResponses from "../../../app/utils/httpResponses/ResponsesJson";
import {hashPwd} from "../../../app/utils/encryptPass";
class InsertMember {
	constructor(repository) {
		this.repository = repository;
	}

	async execute(request, response) {
		
		this.data = request.body;
		
		this.institute = request.params.id;

		try {
			const isValid = await this.validateBody();
			if (isValid?.error) {
				return httpResponses.badRequestResponse(
					{
						message: isValid.error.message,
						details: isValid.error.details,
					},
					response
				);
			};
			const isUnique = await this.isUnique();
			if (!isUnique) return httpResponses.conflictResponse(
				{message:"This member already exists in your organization."},
				response);
			
			this.data.password = await hashPwd(this.data.password);
			
			const {name,email,password,cargo,...props} = this.data;
			
			const member = await this.repository.insertMember({institute:this.institute,name,email,password,cargo});
			
			return httpResponses.createdResponse(
				{ message: "created",
				details:{_id:member._id}},
				response
			);
			
		} catch (err) {
			return httpResponses.badRequestResponse(
				{ message: err.message, details: err },
				response
			);
		}
	}
	async isUnique(){
		const institute = await this.repository.findMemberByInstitute({institute:this.institute});
		if(!institute.members.length) return true;

		const existMember = institute.members.find(member => member.email === this.data.email);
		if(existMember) return false;
		
		return true;
	}
	async validateBody() {
		const isValid = memberSchema.validate(this.data, {
			abortEarly: false,
		});
		return isValid;
	}
}
export { InsertMember };
