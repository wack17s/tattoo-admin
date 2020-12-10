import * as React from 'react';
import { Admin as RAAdmin, Resource, EditGuesser, ListGuesser, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { TattooerList } from './components/Tattooer/TattooerList'
import { TattooerEdit } from './components/Tattooer/TattooerEdit'
import { TattooerCreate } from './components/Tattooer/TattooerCreate';

import { authProvider } from './authProvider';

const httpClient = (url, options: any = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json', 'Content-Type': 'application/json' });
  }
  const access_token = localStorage.getItem('access_token');

  options.headers.set('Authorization', `Bearer ${access_token}`);

  return fetchUtils.fetchJson(url, options);
};

export const Admin = () => (
  <RAAdmin dataProvider={jsonServerProvider(process.env.REACT_APP_SERVER_URL, httpClient)} authProvider={authProvider}>
    <Resource name="tattooer" list={TattooerList} edit={TattooerEdit} create={TattooerCreate} />
    <Resource name="style" list={ListGuesser} edit={EditGuesser} />
    <Resource name="city" list={ListGuesser} edit={EditGuesser} />
  </RAAdmin>
);
