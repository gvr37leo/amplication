import { Webpage as TWebpage } from "../api/webpage/Webpage";

export const WEBPAGE_TITLE_FIELD = "id";

export const WebpageTitle = (record: TWebpage): string => {
  return record.id || record.id;
};
