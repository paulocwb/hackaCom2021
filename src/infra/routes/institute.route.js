import { Router } from "express";
import * as instituteController from "../../domain/user/";
const route = Router();


route.post('/',(request,response)=>{
	instituteController.createUser.execute(request,response);
});

export default route;
