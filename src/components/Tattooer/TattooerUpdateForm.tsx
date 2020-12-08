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
const InstgramArrayInput = ({ ...props }) => React.createElement(ArrayInput as any, { ...props, source: 'posts' });
const Image = (props) => {
  return <img key={props.record} src={props.record.uri} style={{ width: 100, height: 100 }} />;
};


const InstaLink = (props) => {
  return <a target="_blank" href={`https://instagram.com/${props.record['instagram']}`}>{`instagram.com/${props.record['instagram']}`}</a>
};

export const TattooerUpdateForm = props => {
  return (
    <SimpleForm {...props}>
      <TextInput source="instagram" label='Instagram' required />
      <InstaLink source="instagram" />
      <BooleanInput source="approved" />
      {/* <TextInput source="city" required /> */}
      <ReferenceInput source="city" reference="city" label="City" perPage={100} sort={{ field: 'name', order: 'ASC' }}>
        <SelectInput optionText="name" required />
      </ReferenceInput>
      <ReferenceArrayInput source="styles" reference="style" label="Styles" perPage={100} sort={{ field: 'name', order: 'ASC' }}>
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <TextInput source="about" multiline />
      <TextInput source="aboutRaw" disabled multiline />
      <InstgramArrayInput>
        <SimpleFormIterator>
          <Image />
          <TextInput source='uri' />
        </SimpleFormIterator>
      </InstgramArrayInput>
    </SimpleForm>
  )
};
