import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  player1Id?: SortOrder;
  player2Id?: SortOrder;
  score1?: SortOrder;
  score2?: SortOrder;
  scoreReported?: SortOrder;
  tournamentId?: SortOrder;
  updatedAt?: SortOrder;
};
