import React, { Component } from 'react';

const Input = ({name, lable,value, onChange, error}) => {
    return (  <div className="form-group">
                        <lable htmlFor={name}>{lable}</lable>
                        <input
                            name={name}
                            value={value}
                            onChange={onChange} 
                            id={name} 
                            type="text" className="form-control" />
                            {error && <div className="alert alert-danger">{error}</div>}
                    </div> );
}
 
export default Input;