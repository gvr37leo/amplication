import { Tournament } from "../tournament/Tournament";
import { User } from "../user/User";

export type Signup = {
  checkedin: boolean | null;
  createdAt: Date;
  id: string;
  tournament?: Tournament | null;
  updatedAt: Date;
  user?: User | null;
};
