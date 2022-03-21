import { MatchCreateNestedManyWithoutUsersInput } from "./MatchCreateNestedManyWithoutUsersInput";
import { SignupCreateNestedManyWithoutUsersInput } from "./SignupCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  draws?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  losses?: number | null;
  matches1?: MatchCreateNestedManyWithoutUsersInput;
  matches2?: MatchCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  signups?: SignupCreateNestedManyWithoutUsersInput;
  tournamentwins?: string | null;
  username: string;
  wins?: number | null;
};
