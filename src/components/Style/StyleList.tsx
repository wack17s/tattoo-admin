import * as React from "react";
import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const StyleList = props => (
  <List {...props} perPage={50}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="en" />
      <TextField source="ru" />
      <TextField source="ua" />

      <EditButton />
    </Datagrid>
  </List>
);
