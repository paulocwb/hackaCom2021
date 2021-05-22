import { App } from "./app/App";
import { Database } from "./infra/Database";
import dbConf from "./config/mongo.config";
import middleware from "./infra/middleware/global.middleware";

const db = new Database(dbConf);
const app = new App();

(async () => {
	const port = process.env.PORT || 3001;
	db.connectDB().then(() => {
		Object.values(middleware).forEach(mid =>{
			app.loadMiddleware(mid);
		})
		//app.loadRoute()
		app.start(port);
	});
})();