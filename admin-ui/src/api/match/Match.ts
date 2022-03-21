import { Tournament } from "../tournament/Tournament";

export type Match = {
  createdAt: Date;
  id: string;
  tournament?: Tournament | null;
  updatedAt: Date;
};
