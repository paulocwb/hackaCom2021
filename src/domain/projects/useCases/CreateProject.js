import httpResponses from "../../../app/utils/httpResponses/ResponsesJson";
import { projectSchema } from "../../../app/utils/validations/schemaValidation";
class CreateProject {
	constructor(repository) {
		this.repository = repository;
	}

	async execute(request, response) {
		this.project = request.body;
		this.org = request.headers.sub;

		if (!this.org)
			return httpResponses.badRequestResponse(
				{ message: "invalid organization." },
				response
			);
		try {
			const isValid = this.validateBody();
			if (isValid?.error)
				return httpResponses.badRequestResponse(
					{ message: isValid },
					response
				);
			const { shortDescription, fullDescription, deadline, links, tags } =
				this.project;
			const project = await this.repository.createProject({
				shortDescription,
				fullDescription,
				deadline,
				links,
				tags,
				creator: this.org,
			});
			return httpResponses.createdResponse(
				{ message: "Created", details: { _id: project._id } },
				response
			);
		} catch (err) {
			return httpResponses.badRequestResponse(
				{ message: err.message },
				response
			);
		}
	}
	validateBody() {
		const data = { ...this.project, creator: this.org };
		const isValid = projectSchema.validate(data, { abortEarly: false });
		return isValid;
	}
}

export { CreateProject };
