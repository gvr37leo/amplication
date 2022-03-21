/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteWebpageArgs } from "./DeleteWebpageArgs";
import { WebpageFindManyArgs } from "./WebpageFindManyArgs";
import { WebpageFindUniqueArgs } from "./WebpageFindUniqueArgs";
import { Webpage } from "./Webpage";
import { WebpageService } from "../webpage.service";

@graphql.Resolver(() => Webpage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WebpageResolverBase {
  constructor(
    protected readonly service: WebpageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Webpage",
    action: "read",
    possession: "any",
  })
  async _webpagesMeta(
    @graphql.Args() args: WebpageFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Webpage])
  @nestAccessControl.UseRoles({
    resource: "Webpage",
    action: "read",
    possession: "any",
  })
  async webpages(
    @graphql.Args() args: WebpageFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Webpage[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Webpage",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Webpage, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Webpage",
    action: "read",
    possession: "own",
  })
  async webpage(
    @graphql.Args() args: WebpageFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Webpage | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Webpage",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Webpage)
  @nestAccessControl.UseRoles({
    resource: "Webpage",
    action: "delete",
    possession: "any",
  })
  async deleteWebpage(
    @graphql.Args() args: DeleteWebpageArgs
  ): Promise<Webpage | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}