

class SaveLog {
	constructor(repository){
		this.repository = repository;
	}

	execute(request){
		const {body,headers,method,url,baseUrl,originalUrl,params,query,length} = request;

		const payload = {
			body,
			headers,
			method,
			url,
			baseUrl,
			originalUrl,
			params,
			query,
			length
		}
		this.repository.saveLog(payload);
		return;
	}
}

export { SaveLog }