import httpResponses from "../../../app/utils/httpResponses/ResponsesJson";
class UnassignStudent{

	constructor(repository) {
		this.repository = repository;
	}

	async execute(request, response) {
		
		this.projectId = request.params.projectId;
		this.studentId = request.headers.sid;
		try{
			
			const projectExists = await this.isUnique();
			if(!projectExists) return httpResponses.notFoundResponse({ message:"Project didn't exist"},response);
			
			await this.repository.unassignStudent({projectId, studentId});
			return httpResponses.okResponse({},response);
		}catch (err) {
			return httpResponses.badRequestResponse({message:err.message},response);
		}
	}

	async isUnique() {
		const project = await this.repository.getProjectById(this.projectId);
		if(project){
			const userAlreadyAssigned = project.students.find(student => student._id ===this.studentId);
			if(userAlreadyAssigned) return false
			return true;
			};
		return false;
	}
}

export { UnassignStudent };