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
import { CreateTournamentArgs } from "./CreateTournamentArgs";
import { UpdateTournamentArgs } from "./UpdateTournamentArgs";
import { DeleteTournamentArgs } from "./DeleteTournamentArgs";
import { TournamentFindManyArgs } from "./TournamentFindManyArgs";
import { TournamentFindUniqueArgs } from "./TournamentFindUniqueArgs";
import { Tournament } from "./Tournament";
import { MatchFindManyArgs } from "../../match/base/MatchFindManyArgs";
import { Match } from "../../match/base/Match";
import { SignupFindManyArgs } from "../../signup/base/SignupFindManyArgs";
import { Signup } from "../../signup/base/Signup";
import { TournamentService } from "../tournament.service";

@graphql.Resolver(() => Tournament)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TournamentResolverBase {
  constructor(
    protected readonly service: TournamentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tournament",
    action: "read",
    possession: "any",
  })
  async _tournamentsMeta(
    @graphql.Args() args: TournamentFindManyArgs
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

  @graphql.Query(() => [Tournament])
  @nestAccessControl.UseRoles({
    resource: "Tournament",
    action: "read",
    possession: "any",
  })
  async tournaments(
    @graphql.Args() args: TournamentFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tournament[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tournament",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Tournament, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tournament",
    action: "read",
    possession: "own",
  })
  async tournament(
    @graphql.Args() args: TournamentFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tournament | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Tournament",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Tournament)
  @nestAccessControl.UseRoles({
    resource: "Tournament",
    action: "create",
    possession: "any",
  })
  async createTournament(
    @graphql.Args() args: CreateTournamentArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tournament> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Tournament",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Tournament"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Tournament)
  @nestAccessControl.UseRoles({
    resource: "Tournament",
    action: "update",
    possession: "any",
  })
  async updateTournament(
    @graphql.Args() args: UpdateTournamentArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tournament | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Tournament",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Tournament"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tournament)
  @nestAccessControl.UseRoles({
    resource: "Tournament",
    action: "delete",
    possession: "any",
  })
  async deleteTournament(
    @graphql.Args() args: DeleteTournamentArgs
  ): Promise<Tournament | null> {
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

  @graphql.ResolveField(() => [Match])
  @nestAccessControl.UseRoles({
    resource: "Tournament",
    action: "read",
    possession: "any",
  })
  async matches(
    @graphql.Parent() parent: Tournament,
    @graphql.Args() args: MatchFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Match[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Match",
    });
    const results = await this.service.findMatches(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Signup])
  @nestAccessControl.UseRoles({
    resource: "Tournament",
    action: "read",
    possession: "any",
  })
  async signups(
    @graphql.Parent() parent: Tournament,
    @graphql.Args() args: SignupFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Signup[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Signup",
    });
    const results = await this.service.findSignups(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
