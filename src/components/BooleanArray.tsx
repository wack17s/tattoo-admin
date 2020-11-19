import * as React from "react";
import { BooleanField } from 'react-admin';

export  const BooleanArray = ({ record = {}, source}) => {
  let theRecord = {...record};

  theRecord[source] = Boolean(record[source] && record[source].length);

  return <BooleanField record={theRecord} source={source} />
}
