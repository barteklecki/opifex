import React from 'react';
import CSS from 'csstype';
import { Box } from '@material-ui/core';

const Footer = () => {

    const style: CSS.Properties = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        minHeight: '20px',
        paddingLeft: '5%',
        paddingRight: '5%',
        zIndex: 3000,
        backgroundColor: '#007acc',
        color: 'lightGray',
        textAlign: 'right',
    };

    return(
        <footer style={style}>
            <Box  color="primery">
                [ ... ]
            </Box>
        </footer>
    );
}

export default Footer;