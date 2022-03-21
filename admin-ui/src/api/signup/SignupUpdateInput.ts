import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SignupUpdateInput = {
  checkedin?: boolean | null;
  tournament?: TournamentWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
