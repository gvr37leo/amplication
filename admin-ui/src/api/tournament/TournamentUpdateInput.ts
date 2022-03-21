import { MatchUpdateManyWithoutTournamentsInput } from "./MatchUpdateManyWithoutTournamentsInput";
import { SignupUpdateManyWithoutTournamentsInput } from "./SignupUpdateManyWithoutTournamentsInput";

export type TournamentUpdateInput = {
  matches?: MatchUpdateManyWithoutTournamentsInput;
  signups?: SignupUpdateManyWithoutTournamentsInput;
};
