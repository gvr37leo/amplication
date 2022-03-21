import { MatchCreateNestedManyWithoutTournamentsInput } from "./MatchCreateNestedManyWithoutTournamentsInput";
import { SignupCreateNestedManyWithoutTournamentsInput } from "./SignupCreateNestedManyWithoutTournamentsInput";

export type TournamentCreateInput = {
  matches?: MatchCreateNestedManyWithoutTournamentsInput;
  name?: string | null;
  signups?: SignupCreateNestedManyWithoutTournamentsInput;
  startsat?: Date | null;
};
