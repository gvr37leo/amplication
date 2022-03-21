import { Module } from "@nestjs/common";
import { WebpageModuleBase } from "./base/webpage.module.base";
import { WebpageService } from "./webpage.service";
import { WebpageController } from "./webpage.controller";
import { WebpageResolver } from "./webpage.resolver";

@Module({
  imports: [WebpageModuleBase],
  controllers: [WebpageController],
  providers: [WebpageService, WebpageResolver],
  exports: [WebpageService],
})
export class WebpageModule {}
