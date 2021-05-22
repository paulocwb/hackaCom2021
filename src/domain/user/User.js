import idFactory from "../../app/utils/idGenerator";
class User {
	constructor({ _id, name, email, role, active,orgname, password,website,about }) {
		this._id = _id ?? idFactory();
		this.name = name;
		this.email = email;
		this.role = role;
		this.active = active;
		this.orgname = orgname;
		this.website = website;
		this.about = about;
		this.password = password;
	}
}

export { User }