import * as React from "react";
import { BooleanField } from 'react-admin';

export  const BooleanText = ({ record = {}, source}) => {
  let theRecord = {...record};

  theRecord[source] = Boolean(record[source]);

  return <BooleanField record={theRecord} source={source} />
}
