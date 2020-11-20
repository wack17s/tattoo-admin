import * as React from "react";

import {
  SimpleForm,
  ReferenceArrayInput,
  TextInput,
  SelectArrayInput,
  SelectInput,
  SimpleFormIterator,
  ArrayInput,
  BooleanInput,
  ReferenceInput
} from "react-admin";

// TS hack
const InstgramArrayInput = ({ ...props }) => React.createElement(ArrayInput as any, { ...props, source: 'postURIs' });
const Image = (props) => {
  return <img key={props.record} src={props.record} style={{ width: 100, height: 100 }} />;
};


const InstaLink = (props) => {
  return <a target="_blank" href={`https://instagram.com/${props.record['id']}`}>{`instagram.com/${props.record['id']}`}</a>
};

export const TattooerUpdateForm = props => {
  return (
    <SimpleForm {...props}>
      <TextInput source="id" label='Instagram' required />
      <InstaLink source="id" />
      <BooleanInput source="approved" />
      {/* <TextInput source="city" required /> */}
      <ReferenceInput source="city" reference="cities" label="City" perPage={100} sort={{ field: 'id', order: 'ASC' }}>
        <SelectInput optionText="id" required />
      </ReferenceInput>
      <ReferenceArrayInput source="styles" reference="styles" label="Styles" perPage={100} sort={{ field: 'id', order: 'ASC' }}>
        <SelectArrayInput optionText="id" />
      </ReferenceArrayInput>
      <TextInput source="about" multiline />
      <TextInput source="aboutRaw" disabled multiline />
      <InstgramArrayInput>
        <SimpleFormIterator>
          <Image />
          <TextInput />
        </SimpleFormIterator>
      </InstgramArrayInput>
    </SimpleForm>
  )
};
