import React from 'react';

export const displayDate = (parsedDate) => {
  return (
    <span>
      {parsedDate.getDate()}/
      {parsedDate.getMonth() + 1 < 10
        ? `0${parsedDate.getMonth() + 1}`
        : parsedDate.getMonth() + 1}
      /{parsedDate.getFullYear()}
    </span>
  );
};
