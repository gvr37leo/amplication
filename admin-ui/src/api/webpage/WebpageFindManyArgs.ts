import { WebpageWhereInput } from "./WebpageWhereInput";
import { WebpageOrderByInput } from "./WebpageOrderByInput";

export type WebpageFindManyArgs = {
  where?: WebpageWhereInput;
  orderBy?: Array<WebpageOrderByInput>;
  skip?: number;
  take?: number;
};
