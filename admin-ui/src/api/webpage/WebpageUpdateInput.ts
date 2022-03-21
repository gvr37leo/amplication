import { WebpageUpdateManyWithoutWebpagesInput } from "./WebpageUpdateManyWithoutWebpagesInput";
import { WebpageWhereUniqueInput } from "./WebpageWhereUniqueInput";

export type WebpageUpdateInput = {
  children?: WebpageUpdateManyWithoutWebpagesInput;
  content?: string | null;
  name?: string | null;
  parent?: WebpageWhereUniqueInput | null;
};
