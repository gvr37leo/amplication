import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SignupService } from "./signup.service";
import { SignupControllerBase } from "./base/signup.controller.base";

@swagger.ApiTags("signups")
@common.Controller("signups")
export class SignupController extends SignupControllerBase {
  constructor(
    protected readonly service: SignupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
