import httpResponses from "../../../app/utils/httpResponses/ResponsesJson";

class ToggleStatus {
	constructor(repository) {
		this.repository = repository;
	}

	async execute(request, response) {

		const id = request.params.id;

		try{

			const user = await this.repository.getById(id);
			if(!user) return httpResponses.notFoundResponse({details:`Not found user with the id provided`},response);

			const value = !user.active;

			await this.repository.toggleAccountStatus({id,value});
			const message = "Account status successfully changed";

			return httpResponses.okResponse({message},response);
			
		}catch(err){
			return httpResponses.badRequestResponse(
				{ message: err.message, details: err },response)
		}
	}
}


export {ToggleStatus};