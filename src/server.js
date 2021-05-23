import { App } from "./app/App";
import { Database } from "./infra/Database";
import dbConf from "./config/mongo.config";
import middleware from "./infra/middleware/global.middleware";
import * as routes from "./infra/routes/index";

const db = new Database(dbConf);
const app = new App();

(async () => {
	const port = process.env.PORT || 3001;
	db.connectDB().then(() => {
		Object.values(middleware).forEach(mid =>{
			app.loadMiddleware(mid);
		});
		Object.entries(routes).forEach(route =>{
			app.loadRoute(`${process.env.DEFAULT_URL}/${route[0]}`,route[1].default)
		})
		
		app.start(port);
	});
})();