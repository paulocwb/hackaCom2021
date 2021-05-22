import { instituteSchema } from "../../../app/utils/validations/schemaValidation";
import httpResponses from "../../../app/utils/httpResponses/ResponsesJson";
import {User} from "../User";
class CreateUser {
	constructor(repository) {
		this.repository = repository;
	}

	async execute(request, response) {
		this.data = request.body;

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
			}
			const userClass = new User(this.data);

			const user = await this.repository.createUser(userClass);
			
			return httpResponses.createdResponse(
				{ message: "created",
			details:{id:user._id} },
				response
			);
			
		} catch (err) {
			return httpResponses.badRequestResponse(
				{ message: err.message, details: err },
				response
			);
		}
	}

	async validateBody() {
		const isValid = instituteSchema.validate(this.data, {
			abortEarly: false,
		});
		return isValid;
	}
}
export { CreateUser };
