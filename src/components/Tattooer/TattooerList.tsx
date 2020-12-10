import * as React from "react";
import { BooleanField, List, Datagrid, TextField, EditButton, ReferenceArrayField, ReferenceField, DeleteButton, SingleFieldList } from 'react-admin';

import { InstagramUrlField } from '../InstagramUrlField';
import { BooleanText } from '../BooleanText';
import { BooleanArray } from '../BooleanArray';

export const TattooerList = props => (
  <List {...props} perPage={50}>
    <Datagrid>
      <BooleanField source="readyToShow" />
      <BooleanField source="needUpdate" />
      <BooleanField source="needReview" />
      <InstagramUrlField source="instagram" label='Instagram' />
      {/* <TextField source="city" />
      <BooleanArray source="styles" /> */}
      <ReferenceField source="city_id" reference="city" label="City">
        <TextField source="ru" />
      </ReferenceField>
      <ReferenceArrayField label="Styles" source="style_ids" reference="style">
        <SingleFieldList>
          <TextField style={{ marginLeft: 4 }} source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      {/* <BooleanArray source="postURIs" /> */}
      <BooleanArray source="posts" />
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
