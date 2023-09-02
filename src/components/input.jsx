import React from "react";

const Input = (props) => {
  const { name, onChange, value, label, error, type } = props;
  return (
    <div className="form-group my-3">
      <label htmlFor={name}>{label}</label>
      <div className="input-group">
        <input
          required
          autoComplete="off"
          error={error}
          type={type}
          onChange={onChange}
          id={name}
          name={name}
          value={value}
          className="form-control"
        />
      </div>
      {error && (
        <div className="text-danger my-2">
          <strong className="m-1">
            <i className="fa-solid fa-circle-info"></i>
          </strong>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
