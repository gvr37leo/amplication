import { TournamentWhereInput } from "./TournamentWhereInput";
import { TournamentOrderByInput } from "./TournamentOrderByInput";

export type TournamentFindManyArgs = {
  where?: TournamentWhereInput;
  orderBy?: Array<TournamentOrderByInput>;
  skip?: number;
  take?: number;
};
