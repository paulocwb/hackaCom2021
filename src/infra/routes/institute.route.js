import { Router } from "express";
import * as instituteController from "../../domain/user/";
const route = Router();

route.post('/',(request,response)=>{
	instituteController.createUser.execute(request,response);
});

route.patch('/account/:id',(request,response)=>{
	instituteController.accountStatus.execute(request,response);
});

route.put('/:id/members',(request,response)=>{
	instituteController.insertMember.execute(request,response);
});

export default route;
