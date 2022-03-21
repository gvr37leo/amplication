import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TournamentWhereUniqueInput } from "../tournament/TournamentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SignupWhereInput = {
  checkedin?: BooleanNullableFilter;
  id?: StringFilter;
  tournament?: TournamentWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
