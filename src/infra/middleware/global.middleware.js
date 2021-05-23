import cors from "cors";
import {json,urlencoded} from "express";
const middleware = {
	cors : cors(),
	json : json(),
	urlencoded : urlencoded({extended: true}),

}

export default middleware;