import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import AddCircleIcon from '@material-ui/icons/AddCircle';

type PartProps = {
}

const useStyles = makeStyles({
    root: {
        width: 220,
        height: 220,
        borderStyle: 'dotted',
        borderWidth: '5px',
        borderColor: 'Gray',
        opacity: '20%',
    },
});

const Part = (props: PartProps) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea style={ {height: '100%'} }>
                <CardContent>
                        <AddCircleIcon fontSize="large" />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Part;