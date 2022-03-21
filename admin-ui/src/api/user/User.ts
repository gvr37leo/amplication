import { Match } from "../match/Match";
import { Signup } from "../signup/Signup";

export type User = {
  createdAt: Date;
  draws: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  losses: number | null;
  matches1?: Array<Match>;
  matches2?: Array<Match>;
  roles: Array<string>;
  signups?: Array<Signup>;
  tournamentwins: string | null;
  updatedAt: Date;
  username: string;
  wins: number | null;
};
