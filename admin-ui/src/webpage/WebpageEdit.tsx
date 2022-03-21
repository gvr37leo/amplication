import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WebpageTitle } from "./WebpageTitle";

export const WebpageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="webpage.id" reference="Webpage" label="parent">
          <SelectInput optionText={WebpageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
