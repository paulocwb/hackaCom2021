import { CreateUser } from "./useCases/CreateUser";
import { UserRepository } from "./repository/UserRepository";

const repository = new UserRepository();

const createUser = new CreateUser(repository);


export { createUser }