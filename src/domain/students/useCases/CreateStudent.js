import httpResponses from "../../../app/utils/httpResponses/ResponsesJson";
class CreateStudent {

	constructor(repository) {
		this.repository = repository;
	}

	async execute(request, response) {
		const college = this.headers.sub;
		const {name,password,classroom,tags,bio} = request.body;
		try{
			const student = await this.repository.createStudent({name,password,classroom,tags,bio,college});
			return httpResponses.createdResponse({message:"Student created successfully",details:{_id: student._id}},response)
		}catch (err) {
			return httpResponses.badRequestResponse({message:err.message},response)
		}
	}
}

export { CreateStudent }