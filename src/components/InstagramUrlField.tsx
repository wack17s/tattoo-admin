import * as React from "react";

export const InstagramUrlField = ({ record = {}, source, label }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={`http://instagram.com/${record[source]}`}>
      {record[source]}
    </a>
  );
}