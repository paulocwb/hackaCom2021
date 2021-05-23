
import httpResponses from "../../../app/utils/httpResponses/ResponsesJson";
import { inviteSchema } from "../../../app/utils/validations/schemaValidation";
class InviteStudent{

	constructor(repository){
		this.repository = repository;
	};
	async execute(request,response){
		this.studentData = request.body;
		this.institute = request.params.institute;
		try{
	
			const isValid = await this.validateBody();
			if (isValid?.error) {
				return httpResponses.badRequestResponse(
					{
						message: isValid.error.message,
						details: isValid.error.details,
					},
					response
				);
			}
			const {studentName,studentEmail} = this.studentData;

			const invite = await this.repository.createInvite({studentName,studentEmail,institute:this.institute});

			return httpResponses.createdResponse({message:'Invite Send',details:{
				_id:invite._id,
				email:invite.studentEmail
			}},response)
		}catch(err){
			return httpResponses.badRequestResponse({message:err.message},response);
		}
	}

	async validateBody(){
		
		const isValid = await inviteSchema.validate({
			studentName:this.studentData.studentName,
			studentEmail:this.studentData.studentEmail,
			institute: this.institute}, {
			abortEarly: false,
		});

		return isValid;
	}
}

export { InviteStudent }