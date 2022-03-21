import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  draws?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  losses?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  tournamentwins?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  wins?: SortOrder;
};
