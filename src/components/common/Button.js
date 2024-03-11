// common/Button.js
import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = ({ children, ...rest }) => {
  return (
    <Button variant="contained" color="primary" {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
