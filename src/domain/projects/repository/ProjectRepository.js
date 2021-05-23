import { projectModel } from "../model/project.model";

class ProjectRepository {
	async createProject(data) {
		const project = await projectModel.create(data);
		return project.toJSON();
	};

	async listAll(institute){
		const projects = await projectModel.find().or([{university:institute},{org:institute}]).lean(true);
		return projects;
	};

	async assignStudent({studentId,projectId}){
		const project = await projectModel.findByIdAndUpdate({_id:projectId},{$push:{students:studentId}}).lean(true);
		return project.students;
	}
	async unassignStudent({studentId,projectId}){
		const project = await projectModel.findById({_id:projectId});
		const studentIndex = project.students.forEach(student => student._id ===studentId);
		if (studentIndex){
			project.students.splice(studentIndex,1);
		}
		await project.save();
		return project.students;
	}

	async acceptProject({projectId,instituteId}){
		return await projectModel.updateOne({_id:projectId},{assigned:instituteId});
	}

	async listStudentProjects(studentId){
		return await projectModel.find({'students._id':studentId}).lean(true);

	}

	async insertTasks({task,projectId}){
		const project = await projectModel.findByIdAndUpdate(projectId,{$push:{tasks:task}}).lean(true);
		return project.tasks;
	}
}
export { ProjectRepository };
