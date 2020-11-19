import * as React from "react";

import { Create } from "react-admin";

import { TattooerUpdateForm } from './TattooerUpdateForm';

export const TattooerCreate = (props) => (
  <Create {...props}>
    <TattooerUpdateForm />
  </Create>
);
