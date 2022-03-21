import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";

export type MatchWhereInput = {
  id?: StringFilter;
  player1?: UserWhereUniqueInput;
  player2?: UserWhereUniqueInput;
  score1?: IntNullableFilter;
  score2?: StringNullableFilter;
  scoreReported?: StringNullableFilter;
  tournament?: TournamentWhereUniqueInput;
};
