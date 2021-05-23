import {logController} from "../../../domain/requestLog/useCases/index";
const logRequest = (request,response,next)=>{
	
	logController.execute(request,response);
	next();
}


export {logRequest}