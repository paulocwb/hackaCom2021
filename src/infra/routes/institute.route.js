import { Router } from "express";
import * as instituteController from "../../domain/user/";
import { logRequest } from "../middleware/requestStorage/requestLogger.middleware";

const route = Router();

route.post("/",logRequest, (request, response) => {
	
	instituteController.createUser.execute(request, response);
	
});

route.patch("/account/:id",logRequest, (request, response) => {
	instituteController.accountStatus.execute(request, response);
});

route.post("/:id/members",logRequest, (request, response) => {
	instituteController.insertMember.execute(request, response);
});

export default route;
