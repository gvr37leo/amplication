import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type MatchCreateInput = {
  tournament?: TournamentWhereUniqueInput | null;
};
