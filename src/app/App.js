import express from "express"
import { swaggerUI,swaggerSetup } from "../docs/config";
class App {

	constructor() {
		this.app = express();
		this.app.use('/',swaggerUI.serve, swaggerUI.setup(swaggerSetup));
	}

	loadRoute(path, router) {
		console.log(path);
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
