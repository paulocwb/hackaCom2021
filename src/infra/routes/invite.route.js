import { Router } from "express";
import * as inviteController from "../../domain/invites/useCases/index";

const route = Router();

route.post('/:institute',(request,response)=>{

	inviteController.inviteStudent.execute(request,response);

})

route.get('/:token',(request,response)=>{
	inviteController.inviteRedeem.execute(request,response);
	
})

export default route;