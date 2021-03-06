import { projectModel } from "../model/project.model";

class ProjectRepository {

	async getProjectById(id){
		return await projectModel.findById(id).lean(true);
	}


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

	async acceptProject({projectId,instituteId,status}){
		return await projectModel.updateOne({_id:projectId},{assigned:instituteId,status});
	}

	async listStudentProjects(studentId){
		return await projectModel.find({'students._id':studentId}).lean(true);
	}

	async insertTasks({task,projectId}){
		const project = await projectModel.findByIdAndUpdate(projectId,{$push:{'status.tasks':task}}).lean(true);
		return project.tasks;
	}

	async removeTasks ({taskId}){
		const proj  = await projectModel.deleteOne({'status.tasks._id':taskId});
		return;
	}
	async completeProjectTask({taskId}){
		throw new Error ('To be implemented')
	}
	async completeProject({projectId}){
		throw new Error ('To be implemented')
	}
}
export { ProjectRepository };
