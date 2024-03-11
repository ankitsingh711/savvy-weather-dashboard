// common/Input.js
import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({ placeholder, value, onChange, label }) => {
  return (
    <div style={{width:"300px", marginBottom: "10px"}}>
      <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      placeholder={placeholder}
      onChange={onChange}
      style={{width: "400px"}}
    />
    </div>
  );
};

export default Input;
