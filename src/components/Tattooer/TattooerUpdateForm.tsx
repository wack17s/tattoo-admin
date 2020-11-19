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
} from "react-admin";

// TS hack
const InstgramArrayInput = ({ ...props }) => React.createElement(ArrayInput as any, { ...props, source: 'postURIs' });
const Image = (props) => {
  return <img key={props.record} src={props.record} style={{ width: 100, height: 100 }} />;
};

export const TattooerUpdateForm = props => {
  return (
    <SimpleForm {...props}>
      <TextInput source="id" label='Instagram' required />
      <BooleanInput source="approved" />
      {/* <TextInput source="city" required /> */}
      <ReferenceArrayInput source="city" reference="cities" label="City">
        <SelectInput optionText="id" required />
      </ReferenceArrayInput>
      <ReferenceArrayInput source="styles" reference="styles" label="Styles">
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
