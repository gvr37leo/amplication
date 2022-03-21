import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WebpageTitle } from "./WebpageTitle";

export const WebpageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="webpage.id" reference="Webpage" label="parent">
          <SelectInput optionText={WebpageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
