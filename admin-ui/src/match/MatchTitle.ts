import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "tournament";

export const MatchTitle = (record: TMatch): string => {
  return record.tournament || record.id;
};
