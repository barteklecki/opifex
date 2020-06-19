import React from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import { Route } from 'react-router';

import CloudBackup from './CloudBackup/CloudBackup';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Omit } from '@material-ui/types';
import Divider from '@material-ui/core/Divider';

import CategoryIcon from '@material-ui/icons/Category';
import CasinoIcon from '@material-ui/icons/Casino';
import QueueIcon from '@material-ui/icons/Queue';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import PictureInPictureIcon from '@material-ui/icons/PictureInPicture';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

interface ListItemLinkProps {
    primary: string;
    to: string;
    icon?: React.ReactElement;
    secondary?: string;
    selected?: boolean;
}

function ListItemLink(props: ListItemLinkProps) {
    const { primary, to, icon, secondary, selected } = props;
    const location = useLocation();

    const renderLink = React.useMemo(
      () =>
        React.forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => (
          <Link to={to} ref={ref} {...itemProps} />
        )),
      [to],
    );

    let isSelected = to.includes(location.pathname);

    return (
        <ListItem button component={renderLink} selected={isSelected} variant="dense">
          {icon ? <ListItemIcon >{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} secondary={secondary} />
        </ListItem>
    );
}


const sideNav = () => {
    return(
        <nav>
            <List aria-label="Parts section">
                <ListItemLink to="/list" primary="Parts list" icon={<CategoryIcon />} />
                <ListItemLink selected to="/parametric" primary="Add parametric" icon={<CasinoIcon />} />
                <ListItemLink to="/" primary="File import" icon={<QueueIcon />} />
                <ListItemLink to="/" primary="Part edit" icon={<PermDataSettingIcon />} />
            </List>
            <Divider />
            <List aria-label="Nesting section">
                <ListItemLink to="/" primary="Plate settings" icon={<PictureInPictureIcon />} />
                <ListItemLink to="/" primary="Nesting" icon={<DashboardIcon />} />
                <ListItemLink to="/" primary="Export" icon={<SaveAltIcon />} />
            </List>
            <Divider />
            <List aria-label="Account section">
                <ListItemLink to="/login" primary="Login" secondary="Logout, login to sync" icon={<AccountCircleIcon />} />
                <ListItemLink to="/" primary="Cloud backup" icon={<CloudBackup online={false} done={false} />} />
            </List>
        </nav>
    );

}

export default sideNav;