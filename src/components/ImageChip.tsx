import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: -8,
    marginBottom: -8,
  },
  chip: { margin: 4 },
});

export const ImageChip = ({ record }: { record?: any }) => {
  const classes = useStyles();

  return record ? (
    <img src={record} style={{ width: 30, height: 30 }} />
  ) : null;
};

ImageChip.defaultProps = {
  addLabel: true,
};
