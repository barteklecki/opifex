import React from 'react';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Divider from '@material-ui/core/Divider';

import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import CropSquareIcon from '@material-ui/icons/CropSquare';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    group: {
        marginLeft: 25,
        marginRight: 25,
    },
    toogleButton: {
        paddingTop: 0,
        paddingBottom: 0,
        width: 40,
        height: 40,
    }
});

const PartsListToolbar = () => {

    const classes = useStyles();

    return (
        <>
            <ToggleButtonGroup className={classes.group} size="small" value="module" exclusive>
                <ToggleButton value="module" className={classes.toogleButton}>
                    <ViewModuleIcon />
                </ToggleButton>
                <ToggleButton value="list" className={classes.toogleButton}>
                    <ViewListIcon />
                </ToggleButton>
            </ToggleButtonGroup>
            <Divider />
            <ToggleButtonGroup size="small" value="medium" exclusive>
                <ToggleButton value="small" className={classes.toogleButton}>
                    <CropSquareIcon fontSize="small" />
                </ToggleButton>
                <ToggleButton value="medium" className={classes.toogleButton}>
                    <CropSquareIcon />
                </ToggleButton>
                <ToggleButton value="big" className={classes.toogleButton}>
                    <CropSquareIcon fontSize="large"/>
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    );
};

export default PartsListToolbar;