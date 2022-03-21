import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type MatchCreateInput = {
  player1?: UserWhereUniqueInput | null;
  player2?: UserWhereUniqueInput | null;
  score1?: number | null;
  score2?: string | null;
  scoreReported?: string | null;
  tournament?: TournamentWhereUniqueInput | null;
};
