import { Webpage as TWebpage } from "../api/webpage/Webpage";

export const WEBPAGE_TITLE_FIELD = "name";

export const WebpageTitle = (record: TWebpage): string => {
  return record.name || record.id;
};
