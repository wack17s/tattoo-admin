import * as React from "react";

import { Edit } from "react-admin";

import { CityUpdateForm } from './CityUpdateForm';

export const CityEdit = (props) => (
  <Edit {...props}>
    <CityUpdateForm />
  </Edit>
);
