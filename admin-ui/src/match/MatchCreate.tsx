import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TournamentTitle } from "../tournament/TournamentTitle";

export const MatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="tournament.id"
          reference="Tournament"
          label="tournament"
        >
          <SelectInput optionText={TournamentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
