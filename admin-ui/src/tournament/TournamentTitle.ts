import { Tournament as TTournament } from "../api/tournament/Tournament";

export const TOURNAMENT_TITLE_FIELD = "name";

export const TournamentTitle = (record: TTournament): string => {
  return record.name || record.id;
};
