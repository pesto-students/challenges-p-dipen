import React from 'react';

const button = ({ onClick, label, classname, isDisabled = false }) => {
  return (
    <button onClick={onClick} className={classname} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default button;
