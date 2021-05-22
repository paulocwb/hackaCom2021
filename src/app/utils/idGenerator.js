import { v4 as uuid } from "uuid";

const idFactory = () => {
	const id = uuid();
	return id;
};


export default idFactory;