import httpResponses from "../../../app/utils/httpResponses/ResponsesJson";
class GetAllInstituteProjects{

	constructor(repository){
		this.repository = repository;
	}

	async execute(request, response) {
		this.org = request.headers.sub;

		try{
			const projects = await this.repository.listAll(this.org);
			return httpResponses.okResponse(projects);
		}catch (err) {
			return httpResponses.badRequestResponse({message:err.message});
		}
	}
}

export { GetAllInstituteProjects }