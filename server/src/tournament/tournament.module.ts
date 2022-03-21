import { Module } from "@nestjs/common";
import { TournamentModuleBase } from "./base/tournament.module.base";
import { TournamentService } from "./tournament.service";
import { TournamentController } from "./tournament.controller";
import { TournamentResolver } from "./tournament.resolver";

@Module({
  imports: [TournamentModuleBase],
  controllers: [TournamentController],
  providers: [TournamentService, TournamentResolver],
  exports: [TournamentService],
})
export class TournamentModule {}
