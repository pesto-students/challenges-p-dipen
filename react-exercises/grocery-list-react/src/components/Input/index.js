import React from 'react';

const inputText = ({ onChange, value, classname }) => {
  return (
    <div className={classname}>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default inputText;
