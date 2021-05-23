import { InviteStudent } from "./InviteStudent";
import { RedeemInvite } from "../useCases/RedeemInvite";

import { InviteRepository } from "../repository/InviteRepository";

const inviteRepository = new InviteRepository();
const inviteStudent = new InviteStudent(inviteRepository);
const inviteRedeem = new RedeemInvite(inviteRepository);

export{
	inviteStudent,
	inviteRedeem,
};