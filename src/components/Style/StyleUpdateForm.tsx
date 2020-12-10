import * as React from "react";

import {
  SimpleForm,
  TextInput,
} from "react-admin";

export const StyleUpdateForm = props => {
  return (
    <SimpleForm {...props}>
      <TextInput source="name" />
      <TextInput source="en" />
      <TextInput source="ru" />
      <TextInput source="ua" />

    </SimpleForm>
  )
};
