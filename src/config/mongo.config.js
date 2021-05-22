export default {
	uris:process.env.DB_URI,
	options:{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	}
}