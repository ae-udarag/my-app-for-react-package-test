import Button from '@material-ui/core/Button';
import React from 'react';

const CustomButton = (props) => {
    return (
        <Button variant="contained" color="primary">
            {props.text}
        </Button>
    );
}

export default CustomButton;