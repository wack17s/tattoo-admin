import * as React from 'react';
import { Admin as RAAdmin, Resource, EditGuesser, ListGuesser } from 'react-admin';
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from 'react-admin-firebase';

import { config } from '../config';

import { TattooerList } from './components/Tattooer/TattooerList'
import { TattooerEdit } from './components/Tattooer/TattooerEdit'
import { TattooerCreate } from './components/Tattooer/TattooerCreate'

const options = {};

const dataProvider = FirebaseDataProvider(config.firebase, options);
const authProvider = FirebaseAuthProvider(config.firebase, options);

export const Admin = () => (
  // <RAAdmin dataProvider={dataProvider} authProvider={authProvider as any}>
  <RAAdmin dataProvider={dataProvider}>
    <Resource name="tattooers" list={TattooerList} edit={TattooerEdit} create={TattooerCreate} />
    <Resource name="styles" list={ListGuesser} edit={EditGuesser} />
    <Resource name="cities" list={ListGuesser} edit={EditGuesser} />
  </RAAdmin>
);
