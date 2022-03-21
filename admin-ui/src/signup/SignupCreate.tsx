import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TournamentTitle } from "../tournament/TournamentTitle";
import { UserTitle } from "../user/UserTitle";

export const SignupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="checkedin" source="checkedin" />
        <ReferenceInput
          source="tournament.id"
          reference="Tournament"
          label="tournament"
        >
          <SelectInput optionText={TournamentTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
