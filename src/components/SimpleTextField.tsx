import React from 'react';

export const SimpleTextField = ({ record }: { record?: any }) => {
  return record ? (
    <span>
      <p>{record}</p>
    </span>
  ) : null;
};
