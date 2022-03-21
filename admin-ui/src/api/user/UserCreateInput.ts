import { SignupCreateNestedManyWithoutUsersInput } from "./SignupCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  signups?: SignupCreateNestedManyWithoutUsersInput;
  username: string;
};
