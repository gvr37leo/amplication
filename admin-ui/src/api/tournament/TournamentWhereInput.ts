import { StringFilter } from "../../util/StringFilter";
import { MatchListRelationFilter } from "../match/MatchListRelationFilter";
import { SignupListRelationFilter } from "../signup/SignupListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TournamentWhereInput = {
  id?: StringFilter;
  matches?: MatchListRelationFilter;
  signups?: SignupListRelationFilter;
  startsat?: DateTimeNullableFilter;
};
