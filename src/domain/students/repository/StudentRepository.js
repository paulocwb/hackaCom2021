import { studentModel } from "../model/student.model";
class StudentRepository {
	async createStudent({ name, password, classroom, tags, bio, college }) {
		const student = new studentModel({
			name,
			password,
			classroom,
			tags,
			bio,
			college,
		});
		await student.save();
		return student.toJSON();
	}

	async listStudentProjects(id) {
		const student = await studentModel.findById(id).lean(true);
		return student;
	}
}

export { StudentRepository };
