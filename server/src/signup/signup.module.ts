import { Module } from "@nestjs/common";
import { SignupModuleBase } from "./base/signup.module.base";
import { SignupService } from "./signup.service";
import { SignupController } from "./signup.controller";
import { SignupResolver } from "./signup.resolver";

@Module({
  imports: [SignupModuleBase],
  controllers: [SignupController],
  providers: [SignupService, SignupResolver],
  exports: [SignupService],
})
export class SignupModule {}
