import { logRequest } from "../middleware/requestStorage/requestLogger.middleware";
import {Router} from "express";
import * as projectController from "../../domain/projects/useCases/index";

const router = new Router();

router.post('/',logRequest,(request,response)=>{
	projectController.createProject.execute(request, response);
});

router.get('/',logRequest,(request,response)=>{
	
	projectController.getAllInstituteProjects.execute(request, response);

});

router.post('/:projectid/assign',logRequest,(request, response)=>{
	
	projectController.assignStudent.execute(request,response);
});

router.delete('/:projectId/unassign',logRequest,(request, response)=>{
	
	projectController.unassignStudent.execute(request,response);
})
export default router;