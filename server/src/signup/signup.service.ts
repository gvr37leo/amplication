import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SignupServiceBase } from "./base/signup.service.base";

@Injectable()
export class SignupService extends SignupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
