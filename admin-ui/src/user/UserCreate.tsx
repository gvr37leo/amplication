import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { MatchTitle } from "../match/MatchTitle";
import { SignupTitle } from "../signup/SignupTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="draws" source="draws" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <NumberInput step={1} label="losses" source="losses" />
        <ReferenceArrayInput
          source="matches1"
          reference="Match"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MatchTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="matches2"
          reference="Match"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MatchTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="signups"
          reference="Signup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SignupTitle} />
        </ReferenceArrayInput>
        <TextInput label="tournamentwins" source="tournamentwins" />
        <TextInput label="Username" source="username" />
        <NumberInput step={1} label="wins" source="wins" />
      </SimpleForm>
    </Create>
  );
};
