import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SignupCreateInput = {
  checkedin?: boolean | null;
  tournament?: TournamentWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
