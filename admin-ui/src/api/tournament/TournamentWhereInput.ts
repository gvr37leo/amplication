import { StringFilter } from "../../util/StringFilter";
import { MatchListRelationFilter } from "../match/MatchListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SignupListRelationFilter } from "../signup/SignupListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TournamentWhereInput = {
  id?: StringFilter;
  matches?: MatchListRelationFilter;
  name?: StringNullableFilter;
  signups?: SignupListRelationFilter;
  startsat?: DateTimeNullableFilter;
};
