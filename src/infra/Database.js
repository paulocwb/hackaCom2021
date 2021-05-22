import mongoose from "mongoose"
class Database {
	
	constructor(config) {
		this.config = config;
	}

	async connectDB() {
		await mongoose.connect(this.config.uris,this.config.options);
		
		return this.db = mongoose.connection;
	}
}

export { Database };
