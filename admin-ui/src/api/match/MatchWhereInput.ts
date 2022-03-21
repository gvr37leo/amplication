import { StringFilter } from "../../util/StringFilter";
import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type MatchWhereInput = {
  id?: StringFilter;
  tournament?: TournamentWhereUniqueInput;
};
