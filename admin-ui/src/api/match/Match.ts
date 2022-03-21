import { User } from "../user/User";
import { Tournament } from "../tournament/Tournament";

export type Match = {
  createdAt: Date;
  id: string;
  player1?: User | null;
  player2?: User | null;
  score1: number | null;
  score2: string | null;
  scoreReported: string | null;
  tournament?: Tournament | null;
  updatedAt: Date;
};
