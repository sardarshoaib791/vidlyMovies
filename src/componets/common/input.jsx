import React, { Component } from "react";

const Input = ({ type, name, lable, value, onChange, error }) => {
  return (
    <div className="form-group">
      <lable htmlFor={name}>{lable}</lable>
      <input
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
