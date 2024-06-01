import React, { Component } from "react";

const Input = ({ name, lable, error, ...rest }) => {
  return (
    <div className="form-group">
      <lable htmlFor={name}>{lable}</lable>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
