import * as React from 'react';
import { Admin as RAAdmin, Resource, EditGuesser, ListGuesser, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { TattooerList } from './components/Tattooer/TattooerList'
import { TattooerEdit } from './components/Tattooer/TattooerEdit'
import { TattooerCreate } from './components/Tattooer/TattooerCreate';

const httpClient = (url, options: any = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  // options.headers.set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
};

export const Admin = () => (
  <RAAdmin dataProvider={jsonServerProvider('http://localhost:3001', httpClient)}>
    <Resource name="tattooer" list={TattooerList} edit={TattooerEdit} create={TattooerCreate} />
    <Resource name="style" list={ListGuesser} edit={EditGuesser} />
    <Resource name="city" list={ListGuesser} edit={EditGuesser} />
  </RAAdmin>
);
