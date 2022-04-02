import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WebpageTitle } from "./WebpageTitle";

export const WebpageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="children"
          reference="Webpage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebpageTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="webpage.id" reference="Webpage" label="parent">
          <SelectInput optionText={WebpageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
