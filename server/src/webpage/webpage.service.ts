import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { WebpageServiceBase } from "./base/webpage.service.base";

@Injectable()
export class WebpageService extends WebpageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
