import bcrypt from "bcrypt";

const hashPwd = async (pass) => {
	const hashedPass = await bcrypt.hash(pass, 10);
	return hashedPass;
};

export { hashPwd };