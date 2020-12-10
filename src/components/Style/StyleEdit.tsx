import * as React from "react";

import { Edit } from "react-admin";

import { StyleUpdateForm } from './StyleUpdateForm';

export const StyleEdit = (props) => (
  <Edit {...props}>
    <StyleUpdateForm />
  </Edit>
);
