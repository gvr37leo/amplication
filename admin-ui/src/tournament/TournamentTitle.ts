import { Tournament as TTournament } from "../api/tournament/Tournament";

export const TOURNAMENT_TITLE_FIELD = "id";

export const TournamentTitle = (record: TTournament): string => {
  return record.id || record.id;
};
