import { App } from "./app/App";
import { Database } from "./infra/Database";
import dbConf from "./config/mongo.config";
const db = new Database(dbConf);
const app = new App();
(async () => {
	const port = process.env.PORT || 3001;
	db.connectDB().then(() => {
		app.start(port);
	});
})();
