import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { MatchListRelationFilter } from "../match/MatchListRelationFilter";
import { SignupListRelationFilter } from "../signup/SignupListRelationFilter";

export type UserWhereInput = {
  draws?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  losses?: IntNullableFilter;
  matches1?: MatchListRelationFilter;
  matches2?: MatchListRelationFilter;
  signups?: SignupListRelationFilter;
  tournamentwins?: StringNullableFilter;
  username?: StringFilter;
  wins?: IntNullableFilter;
};
