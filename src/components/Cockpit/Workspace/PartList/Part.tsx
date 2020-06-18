import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles({
    root: {
        width: 220,
        height: 220,
        textAlign: 'right',
    },
    media: {
        width: '100%',
        height: 180,
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
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/svg.svg"
                title="Example shape"
                >
                    <p> id: {props.info.id},
                        name: {props.info.name},
                        QTY: {props.info.qty}</p>
                </CardMedia>

                <Button size="small">
                    <InfoIcon />
                </Button>
                <Button size="small">
                    <PermDataSettingIcon />
                </Button>
                <Button size="small">
                    <DeleteForeverIcon />
                </Button>
            </CardActionArea>
        </Card>
    );
}

export default Part;