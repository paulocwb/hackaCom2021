import cors from "cors";
import {json,urlencoded} from "express";
import morgan from "morgan";
const logger = morgan()
const middleware = {
	cors : cors(),
	json : json(),
	urlencoded : urlencoded({extended: true}),

}

export default middleware;