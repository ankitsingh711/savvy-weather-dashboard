// common/Button.js
import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = ({ children, ...rest }) => {
  return (
    <Button variant="contained" color="primary" {...rest} style={{marginLeft: "0px", width: "400px"}}>
      {children}
    </Button>
  );
};

export default CustomButton;
