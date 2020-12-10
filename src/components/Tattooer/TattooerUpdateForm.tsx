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
  ReferenceInput,
  FormDataConsumer
} from "react-admin";

// TS hack
const InstgramArrayInput = ({ ...props }) => React.createElement(ArrayInput as any, { ...props, source: 'posts' });
const Image = (props) => {
  return props.record ? <img key={props.record} alt="govno" src={props.record.uri} style={{ width: 300, height: 300, objectFit: 'cover' }} /> : null;
};

const InstaLink = (props) => {
  return <a target="_blank" rel="noopener noreferrer" href={`https://instagram.com/${props.record['instagram']}`}>{`instagram.com/${props.record['instagram']}`}</a>
};

export const TattooerUpdateForm = props => {
  return (
    <SimpleForm {...props}>
      <TextInput source="instagram" label='Instagram' required />
      <InstaLink source="instagram" />
      <BooleanInput source="readyToShow" />
      <BooleanInput source="needUpdate" />
      <BooleanInput source="needReview" />
      {/* <TextInput source="city" required /> */}
      <ReferenceInput source="city_id" reference="city" label="City" perPage={100} sort={{ field: 'ru', order: 'ASC' }}>
        <SelectInput optionText="ru" required />
      </ReferenceInput>
      <ReferenceArrayInput source="style_ids" reference="style" label="Styles" perPage={100} sort={{ field: 'en', order: 'ASC' }}>
        <SelectArrayInput optionText="en" />
      </ReferenceArrayInput>
      <TextInput source="about" multiline />
      <TextInput source="aboutRaw" disabled multiline />
      <InstgramArrayInput>
        <SimpleFormIterator>
        <FormDataConsumer>
            {({ getSource, scopedFormData }) => {
                return (
                    <Image
                        record={scopedFormData}
                    />
                );
            }}
        </FormDataConsumer>
          <TextInput source='uri' />
        </SimpleFormIterator>
      </InstgramArrayInput>
    </SimpleForm>
  )
};
