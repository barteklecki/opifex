import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles({
    root: {
        width: 220,
        height: 220,
        textAlign: 'center',
        padding: 5,
    },
    media: {
        width: 'auto',
        height: 150,
    },
  });

type PartProps = {
    info: { 
        id: number, 
        name: string, 
        qty: number,
    },
}

const Part = (props: PartProps) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div>
                <strong> id: </strong>{props.info.id},
                <strong> name: </strong>{props.info.name},
                <strong> qty: </strong>{props.info.qty}
            </div>
            <CardActionArea>
                <img
                className={classes.media}
                src={require('../../../../assets/logo192.png')}
                alt="Example shape"
                />
            </CardActionArea>
            <Button size="small">
                    <InfoIcon />
                </Button>
                <Button size="small">
                    <PermDataSettingIcon />
                </Button>
                <Button size="small">
                    <DeleteForeverIcon />
                </Button>
        </Card>
    );
}

export default Part;