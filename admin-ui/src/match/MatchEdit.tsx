import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TournamentTitle } from "../tournament/TournamentTitle";

export const MatchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="player1">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="player2">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="score1" source="score1" />
        <TextInput label="score2" source="score2" />
        <TextInput label="scoreReported" source="scoreReported" />
        <ReferenceInput
          source="tournament.id"
          reference="Tournament"
          label="tournament"
        >
          <SelectInput optionText={TournamentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
