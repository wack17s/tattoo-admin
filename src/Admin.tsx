import * as React from 'react';
import { Admin as RAAdmin, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { TattooerList } from './components/Tattooer/TattooerList'
import { TattooerEdit } from './components/Tattooer/TattooerEdit'

import { CityList } from './components/City/CityList'
import { CityEdit } from './components/City/CityEdit'
import { CityCreate } from './components/City/CityCreate'

import { StyleList } from './components/Style/StyleList'
import { StyleEdit } from './components/Style/StyleEdit'
import { StyleCreate } from './components/Style/StyleCreate'

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
    <Resource name="tattooer" list={TattooerList} edit={TattooerEdit} />
    <Resource name="tattooer-ready" list={TattooerList} edit={TattooerEdit} />
    <Resource name="tattooer-not-ready" list={TattooerList} edit={TattooerEdit} />
    <Resource name="style"  list={StyleList} edit={StyleEdit} create={StyleCreate} />
    <Resource name="city" list={CityList} edit={CityEdit} create={CityCreate} />
  </RAAdmin>
);
