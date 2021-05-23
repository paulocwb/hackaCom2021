import { inviteModel } from "../model/invitations.model";

class InviteRepository {
	async createInvite({ studentEmail, studentName, institute }) {
		const invite = new inviteModel({
			studentEmail,
			studentName,
			institute
		});
		await invite.save();
		return invite;
	}
	async getInviteInfo(token){
		const inviteInfo = await inviteModel.findOne({token,status:'pending'}).populate("institute").lean(true);

		return inviteInfo;
		
	}
}


export { InviteRepository };