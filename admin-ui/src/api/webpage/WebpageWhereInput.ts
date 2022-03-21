import { WebpageListRelationFilter } from "./WebpageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WebpageWhereUniqueInput } from "./WebpageWhereUniqueInput";

export type WebpageWhereInput = {
  children?: WebpageListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  parent?: WebpageWhereUniqueInput;
};
