import * as React from "react";
import { BooleanField, List, Datagrid, TextField, EditButton, ArrayField, SingleFieldList, DeleteButton } from 'react-admin';

import { InstagramUrlField } from '../InstagramUrlField';
// import { ImageChip } from '../ImageChip';
import { SimpleChipField } from '../SimpleChipField';
import { BooleanText } from '../BooleanText';
import { BooleanArray } from '../BooleanArray';

export const TattooerList = props => (
  <List {...props} perPage={50}>
    <Datagrid>
      <BooleanField source="approved" />
      <InstagramUrlField source="id" label='Instagram' />
      <TextField source="city" />
      <BooleanArray source="styles" />
      <BooleanArray source="postURIs" />
      <BooleanText source="about" />
      <BooleanText source='aboutRaw' />
      {/* <TextField source="aboutRaw" /> */}
      {/* <PostListActionToolbar> */}
          <EditButton />
          <DeleteButton />
          {/* <ShowButton /> */}
      {/* </PostListActionToolbar> */}
    </Datagrid>
  </List>
);
