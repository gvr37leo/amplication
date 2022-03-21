import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { WebpageResolverBase } from "./base/webpage.resolver.base";
import { Webpage } from "./base/Webpage";
import { WebpageService } from "./webpage.service";

@graphql.Resolver(() => Webpage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WebpageResolver extends WebpageResolverBase {
  constructor(
    protected readonly service: WebpageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
