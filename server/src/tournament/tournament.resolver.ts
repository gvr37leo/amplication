import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TournamentResolverBase } from "./base/tournament.resolver.base";
import { Tournament } from "./base/Tournament";
import { TournamentService } from "./tournament.service";

@graphql.Resolver(() => Tournament)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TournamentResolver extends TournamentResolverBase {
  constructor(
    protected readonly service: TournamentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
