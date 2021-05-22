import { App } from "./app/App";
import { Database } from "./infra/Database";
import dbConf from "./config/mongo.config";
import middleware from "./infra/middleware/global.middleware";

console.log(middleware);

 const db = new Database(dbConf);
const app = new App();
(async () => {
	const port = process.env.PORT || 3001;
	db.connectDB().then(() => {
		app.loadRoute()
		app.start(port);
	});
})();