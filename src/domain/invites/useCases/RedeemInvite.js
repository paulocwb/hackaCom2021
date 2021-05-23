import httpResponses from "../../../app/utils/httpResponses/ResponsesJson";

class RedeemInvite{

	constructor(repository){
		this.repository = repository;
	}

	async execute(request, response) {
		const token = request.query.token;
		if(!token) return httpResponses.badRequestResponse({message:'Token not provided.'});

		try{

			const studentInfo = await this.repository.getInviteInfo(token);
			if(!studentInfo) return httpResponses.badRequestResponse({message:'Invalid Token'});

			return {
				name:studentInfo.studentName,
				email:studentInfo.email,
				institute: studentInfo.institute.orgname,
				picture: studentInfo.institute.picture
			}
		}catch(err){
			return httpResponses.badRequestResponse({message:err.message});
		}

	}
}

export { RedeemInvite }