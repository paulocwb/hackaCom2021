import { StudentRepository } from "../model/student.model";
import { CreateStudent } from "./CreateStudent";

const studentRepository = new StudentRepository();

const createStudent = new CreateStudent(studentRepository);

export { createStudent };
