import { WebpageCreateNestedManyWithoutWebpagesInput } from "./WebpageCreateNestedManyWithoutWebpagesInput";
import { WebpageWhereUniqueInput } from "./WebpageWhereUniqueInput";

export type WebpageCreateInput = {
  children?: WebpageCreateNestedManyWithoutWebpagesInput;
  content?: string | null;
  name?: string | null;
  parent?: WebpageWhereUniqueInput | null;
};
