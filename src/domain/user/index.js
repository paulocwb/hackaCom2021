import { CreateUser } from "./useCases/CreateUser";
import { UserRepository } from "./repository/UserRepository";
import { ToggleStatus } from "./useCases/ToggleStatus";
import { InsertMember } from "./useCases/InsertMember";

const repository = new UserRepository();

const createUser = new CreateUser(repository);

const accountStatus = new ToggleStatus(repository);

const insertMember = new InsertMember(repository);

export { 
	createUser,
	accountStatus,
	insertMember }