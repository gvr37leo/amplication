import { SignupUpdateManyWithoutUsersInput } from "./SignupUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  signups?: SignupUpdateManyWithoutUsersInput;
  username?: string;
};
