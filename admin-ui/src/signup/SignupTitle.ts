import { Signup as TSignup } from "../api/signup/Signup";

export const SIGNUP_TITLE_FIELD = "tournament";

export const SignupTitle = (record: TSignup): string => {
  return record.tournament || record.id;
};
