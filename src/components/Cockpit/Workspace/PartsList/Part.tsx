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
    part: {
        id: number,
        name: string,
        qty: number,
    }
    info: (id: number) => void
    edit: (id: number) => void
    delete: (id: number) => void
}

const Part = (props: PartProps) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div>
                <strong> id: </strong>{props.part.id},
                <strong> name: </strong>{props.part.name},
                <strong> qty: </strong>{props.part.qty}
            </div>
            <CardActionArea>
                <img
                className={classes.media}
                src={require('../../../../assets/logo192.png')}
                alt="Example shape"
                />
            </CardActionArea>
            <Button size="small" onClick={() => props.info(props.part.id)}>
                <InfoIcon />
            </Button>
            <Button size="small" onClick={() => props.edit(props.part.id)}>
                <PermDataSettingIcon />
            </Button>
            <Button size="small" onClick={() => props.delete(props.part.id)}>
                <DeleteForeverIcon />
            </Button>
        </Card>
    );
}

export default Part;