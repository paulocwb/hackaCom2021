import { CreateUser } from "./useCases/CreateUser";
import { UserRepository } from "./repository/UserRepository";
import { ToggleStatus } from "./useCases/ToggleStatus";


const repository = new UserRepository();

const createUser = new CreateUser(repository);

const accountStatus = new ToggleStatus(repository);

export { 
	createUser,
	accountStatus }