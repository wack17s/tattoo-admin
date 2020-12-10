import * as React from "react";

import { Create } from "react-admin";

import { CityUpdateForm } from './CityUpdateForm';

export const CityCreate = (props) => (
  <Create {...props}>
    <CityUpdateForm />
  </Create>
);
