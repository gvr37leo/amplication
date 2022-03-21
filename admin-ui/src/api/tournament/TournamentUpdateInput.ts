import { MatchUpdateManyWithoutTournamentsInput } from "./MatchUpdateManyWithoutTournamentsInput";
import { SignupUpdateManyWithoutTournamentsInput } from "./SignupUpdateManyWithoutTournamentsInput";

export type TournamentUpdateInput = {
  matches?: MatchUpdateManyWithoutTournamentsInput;
  name?: string | null;
  signups?: SignupUpdateManyWithoutTournamentsInput;
  startsat?: Date | null;
};
