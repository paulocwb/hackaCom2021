class HttpResponses {
	badRequestResponse({ message = "", details = "", response }) {
		if (!message) message = "Bad Request";
		const payload = {
			statusCode: 400,
			status: "Fail",
			message,
			details,
		};

		return response.status(payload.statusCode).json(payload);
	}

	createdResponse({ message, details = "", response }) {
		if (!message) message = "Successfully created";
		const payload = {
			statusCode: 201,
			status: "Created",
			message,
			details,
		};

		return response.status(payload.statusCode).json(payload);
	}
}

export default new HttpResponses();
