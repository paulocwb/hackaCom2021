import express from "express"

class App {

	constructor() {
		this.app = express();
	}

	loadRoute(path, router) {
		this.app.use(path, router);
	}

	loadMiddleware(middleware) {
		this.app.use(middleware);
	}

	start(port) {
		this.app.listen(port, () => {
			console.log(`Server Running on port: ${port}`);
		});
	}

}

export { App };
