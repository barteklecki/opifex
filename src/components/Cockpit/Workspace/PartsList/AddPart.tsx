import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { makeStyles } from '@material-ui/core/styles';

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

type PartProps = {
    add: () => void
}

const AddPart: React.FC<PartProps> = (props) => {

    const classes = useStyles();

    return (
        <Card 
            className={classes.root}
            onClick={() => props.add()}
        >
            <CardActionArea style={ {height: '100%'} }>
                <CardContent>
                        <AddCircleIcon fontSize="large" />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default AddPart;