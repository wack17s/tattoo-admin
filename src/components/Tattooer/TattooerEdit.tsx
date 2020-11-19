import * as React from "react";

import { Edit } from "react-admin";

import { TattooerUpdateForm } from './TattooerUpdateForm';

export const TattooerEdit = (props) => (
  <Edit {...props}>
    <TattooerUpdateForm />
  </Edit>
);
