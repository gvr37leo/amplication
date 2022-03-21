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

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TOURNAMENT_TITLE_FIELD } from "./TournamentTitle";

export const TournamentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="startsat" source="startsat" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Match"
          target="TournamentId"
          label="matches"
        >
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
        <ReferenceManyField
          reference="Signup"
          target="TournamentId"
          label="signups"
        >
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
