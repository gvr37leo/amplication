import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TournamentService } from "./tournament.service";
import { TournamentControllerBase } from "./base/tournament.controller.base";

@swagger.ApiTags("tournaments")
@common.Controller("tournaments")
export class TournamentController extends TournamentControllerBase {
  constructor(
    protected readonly service: TournamentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
