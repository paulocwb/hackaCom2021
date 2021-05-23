import { ProjectRepository } from "../repository/ProjectRepository";
import { CreateProject } from "./CreateProject";
import { GetAllInstituteProjects } from "./GetAllInstituteProjects";
import { AssignStudent } from "./AssignStudent";
import { UnassignStudent} from "./UnassignStudent";

const projectRepository = new ProjectRepository();
const unassignStudent = new UnassignStudent(repository);
const getAllInstituteProjects = new GetAllInstituteProjects(projectRepository);
const assignStudent = new AssignStudent(projectRepository);
const createProject = new CreateProject(projectRepository);

export { createProject,
	getAllInstituteProjects,
	assignStudent,
	unassignStudent};
