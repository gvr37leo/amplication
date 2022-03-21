import { Match } from "../match/Match";
import { Signup } from "../signup/Signup";

export type Tournament = {
  createdAt: Date;
  id: string;
  matches?: Array<Match>;
  name: string | null;
  signups?: Array<Signup>;
  startsat: Date | null;
  updatedAt: Date;
};
