import { SortOrder } from "../../util/SortOrder";

export type SignupOrderByInput = {
  checkedin?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  tournamentId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
