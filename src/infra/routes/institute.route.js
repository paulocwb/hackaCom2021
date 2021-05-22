import { Router } from "express";
import * as instituteController from "../../domain/user/";
const route = Router();


route.post('/',(request,response)=>{
	instituteController.createUser.execute(request,response);
});

route.patch('/account/:id',(request,response)=>{
	instituteController.accountStatus.execute(request,response);
})
export default route;
