import { MatchUpdateManyWithoutUsersInput } from "./MatchUpdateManyWithoutUsersInput";
import { SignupUpdateManyWithoutUsersInput } from "./SignupUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  draws?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  losses?: number | null;
  matches1?: MatchUpdateManyWithoutUsersInput;
  matches2?: MatchUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  signups?: SignupUpdateManyWithoutUsersInput;
  tournamentwins?: string | null;
  username?: string;
  wins?: number | null;
};
