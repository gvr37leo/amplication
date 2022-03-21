import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WebpageService } from "./webpage.service";
import { WebpageControllerBase } from "./base/webpage.controller.base";

@swagger.ApiTags("webpages")
@common.Controller("webpages")
export class WebpageController extends WebpageControllerBase {
  constructor(
    protected readonly service: WebpageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
