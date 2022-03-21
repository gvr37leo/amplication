import { MatchCreateNestedManyWithoutTournamentsInput } from "./MatchCreateNestedManyWithoutTournamentsInput";
import { SignupCreateNestedManyWithoutTournamentsInput } from "./SignupCreateNestedManyWithoutTournamentsInput";

export type TournamentCreateInput = {
  matches?: MatchCreateNestedManyWithoutTournamentsInput;
  signups?: SignupCreateNestedManyWithoutTournamentsInput;
};
