import { Router } from "express";
import * as inviteController from "../../domain/invites/useCases/index";

import { logRequest } from "../middleware/requestStorage/requestLogger.middleware";
const route = Router();

route.post("/:institute", logRequest, (request, response) => {
	inviteController.inviteStudent.execute(request, response);
});

route.get("/:token", logRequest, (request, response) => {
	inviteController.inviteRedeem.execute(request, response);
});

export default route;
