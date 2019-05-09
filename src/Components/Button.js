import React from 'react';

function Button(props) {
  return (
    <button
      className="btn btn-primary"
      disabled={props.disabled ? 'disabled' : ''}
    >
      SUBMIT
    </button>
  );
}

export default Button;
