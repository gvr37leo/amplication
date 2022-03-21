import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type MatchUpdateInput = {
  tournament?: TournamentWhereUniqueInput | null;
};
