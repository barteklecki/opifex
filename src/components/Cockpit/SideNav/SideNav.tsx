import React from 'react';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import CategoryIcon from '@material-ui/icons/Category';
import CasinoIcon from '@material-ui/icons/Casino';
import QueueIcon from '@material-ui/icons/Queue';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import PictureInPictureIcon from '@material-ui/icons/PictureInPicture';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SettingsIcon from '@material-ui/icons/Settings';

type sizeNavProps = {
    selected: number
}


const sideNav = ({selected}: sizeNavProps) => {
    return(
        <>
        <List>
            <ListItem button key='parts-list' selected={ selected === 0 }>
                <ListItemIcon><CategoryIcon /></ListItemIcon>
                <ListItemText primary='Parts list' />
            </ListItem>
            <ListItem button key='parametric-part' selected={ selected === 1 }>
                <ListItemIcon><CasinoIcon /></ListItemIcon>
                <ListItemText primary='Parametric shape' />
            </ListItem>
            <ListItem button key='file-import' selected={ selected === 2 }>
                <ListItemIcon><QueueIcon /></ListItemIcon>
                <ListItemText primary='File import' />
            </ListItem>
            <ListItem button key='part-edit' selected={ selected === 3 }>
                <ListItemIcon><PermDataSettingIcon /></ListItemIcon>
                <ListItemText primary='Part edit' />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key='plate-settings' selected={ selected === 4 }>
                <ListItemIcon><PictureInPictureIcon /></ListItemIcon>
                <ListItemText primary='Plate settings' />
            </ListItem>
            <ListItem button key='nesting' selected={ selected === 5 }>
                <ListItemIcon><DashboardIcon /></ListItemIcon>
                <ListItemText primary='Nesting' />
            </ListItem>
            <ListItem button key='export' selected={ selected === 6 }>
                <ListItemIcon><SaveAltIcon /></ListItemIcon>
                <ListItemText primary='Export' />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key='settings' selected={ selected === 7 }>
                <ListItemIcon><SettingsIcon /></ListItemIcon>
                <ListItemText primary='Settings' />
            </ListItem>
        </List>
        </>
    );

}

export default sideNav;