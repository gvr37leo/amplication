import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  tournamentId?: SortOrder;
  updatedAt?: SortOrder;
};
