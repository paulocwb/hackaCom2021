import idFactory from "../../app/utils/idGenerator";
import hashPwd from "../../app/utils/encryptPass";
class User {
	constructor({ _id, name, email, role, active, password,website,about }) {
		this._id = _id ?? idFactory();
		this.name = name;
		this.email = email;
		this.role = role;
		this.active = active;
		this.website = website;
		this.about = about;
		this.password = await hash(password);
	}

	async hash(pass) {
		try {
			const encryptedPass = hashPwd(pass);
			return encryptedPass;
		} catch (err) {
			return {
				error: err.message,
				status: 400,
				details: "Error hashing password",
			};
		}
	}
}

export { User }