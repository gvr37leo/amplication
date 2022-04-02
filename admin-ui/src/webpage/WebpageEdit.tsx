import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WebpageTitle } from "./WebpageTitle";

export const WebpageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
