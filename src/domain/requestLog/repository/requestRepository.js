import { logModel } from "../model/requestLog.model";

class LogRequestRepository {
	saveLog(payload) {
		logModel.create(payload);
		return
	}
}

export { LogRequestRepository }