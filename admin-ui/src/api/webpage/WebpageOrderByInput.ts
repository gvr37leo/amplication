import { SortOrder } from "../../util/SortOrder";

export type WebpageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parentId?: SortOrder;
  updatedAt?: SortOrder;
};
