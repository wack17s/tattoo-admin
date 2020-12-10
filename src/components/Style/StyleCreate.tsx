import * as React from "react";

import { Create } from "react-admin";

import { StyleUpdateForm } from './StyleUpdateForm';

export const StyleCreate = (props) => (
  <Create {...props}>
    <StyleUpdateForm />
  </Create>
);
