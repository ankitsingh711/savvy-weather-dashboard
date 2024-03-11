// common/Input.js
import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({ placeholder, value, onChange, label, error }) => {
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      label={label}
      // error={}
    />
  );
};

export default Input;
