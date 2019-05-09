import React from 'react';

function Input(props) {
  const { label, value, type, onChange } = props;
  return (
    <>
      <div className="form-group">
        <label>
          {label}
          <input
            className="form-control"
            value={value}
            type={type}
            placeholder={label}
            onChange={onChange}
          />
          {value}
        </label>
      </div>
    </>
  );
}

export default Input;
