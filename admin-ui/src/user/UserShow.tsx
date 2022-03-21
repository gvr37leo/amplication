import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { TOURNAMENT_TITLE_FIELD } from "../tournament/TournamentTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="draws" source="draws" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="losses" source="losses" />
        <TextField label="Roles" source="roles" />
        <TextField label="tournamentwins" source="tournamentwins" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="wins" source="wins" />
        <ReferenceManyField reference="Match" target="UserId" label="matches">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="player1" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="player2" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="score1" source="score1" />
            <TextField label="score2" source="score2" />
            <TextField label="scoreReported" source="scoreReported" />
            <ReferenceField
              label="tournament"
              source="tournament.id"
              reference="Tournament"
            >
              <TextField source={TOURNAMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Match" target="UserId" label="matches">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="player1" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="player2" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="score1" source="score1" />
            <TextField label="score2" source="score2" />
            <TextField label="scoreReported" source="scoreReported" />
            <ReferenceField
              label="tournament"
              source="tournament.id"
              reference="Tournament"
            >
              <TextField source={TOURNAMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Signup" target="UserId" label="signups">
          <Datagrid rowClick="show">
            <BooleanField label="checkedin" source="checkedin" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="tournament"
              source="tournament.id"
              reference="Tournament"
            >
              <TextField source={TOURNAMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
