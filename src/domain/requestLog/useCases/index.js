import {LogRequestRepository} from "../repository/requestRepository";

import { SaveLog } from "./SaveLog";
const logRepository = new LogRequestRepository();
const logController = new SaveLog(logRepository);

export {logController};
