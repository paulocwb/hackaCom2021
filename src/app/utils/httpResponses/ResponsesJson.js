class HttpResponses {

	okResponse({ message, details = "" },response) {
		if (!message) message = "OK";
		const payload = {
			statusCode: 200,
			status: "OK",
			message,
			details,
		};

		return response.status(payload.statusCode).json(payload);
	};

	createdResponse({ message, details = "" },response) {
		if (!message) message = "Successfully created";
		const payload = {
			statusCode: 201,
			status: "Created",
			message,
			details,
		};

		return response.status(payload.statusCode).json(payload);
	};

	badRequestResponse({ message = "", details = ""},response) {
		if (!message) message = "Bad Request";
		const payload = {
			statusCode: 400,
			status: "Fail",
			message,
			details,
		};

		return response.status(payload.statusCode).json(payload);
	}

	notFoundResponse({ message, details = "" },response) {
		if (!message) message = "The Resource does not exist";
		const payload = {
			statusCode: 404,
			status: "Not Found",
			message,
			details,
		};

		return response.status(payload.statusCode).json(payload);
	};
	conflictResponse({ message, details = "" },response) {
		if (!message) message = "The Resource does not exist";
		const payload = {
			statusCode: 409,
			status: "Conflict",
			message,
			details,
		};
		return response.status(payload.statusCode).json(payload);
	}
}

export default new HttpResponses();
