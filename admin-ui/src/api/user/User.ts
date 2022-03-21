import { Signup } from "../signup/Signup";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  signups?: Array<Signup>;
  updatedAt: Date;
  username: string;
};
