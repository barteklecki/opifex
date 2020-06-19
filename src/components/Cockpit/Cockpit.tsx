import React from 'react';
import SideNav from './SideNav/SideNav';
import Workspace from './Workspace/Workspace';

import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Zoom from '@material-ui/core/Zoom';

const drawerWidth = 220;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    toolbarPrimary: {
        minHeight: '36px',
    },
    toolbarSecondary: {
        minHeight: '40px',
        background: '#333333',
    },
    toolbarBump: {
        paddingLeft: '10px',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    logoMini: {
        height: '30px',
        width: '30px',
    },
    logoBig: {
        height: '60px',
        width: '60px',
    },
    strong: {
        color: '#6AD6FF',
    }
  }),
);

const Cockpit = ( ) => {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
          <AppBar
              style={{ background: '#3C3C3C' }}
              position="fixed"
              className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
              })} >
              <Toolbar variant="dense" className={classes.toolbarPrimary}>
                  <IconButton
                      aria-label="logo"
                      onClick={handleDrawerOpen} 
                      size="small"
                      edge="start"
                      className={clsx(classes.menuButton, {
                      [classes.hide]: open,
                      })}
                  >
                      <img src={require('../../assets/logo192.png')} alt="logo" className={classes.logoMini}/>
                  </IconButton>
                  <Typography variant="subtitle1" noWrap>
                      <strong className={classes.strong}>OPIFEX</strong>  &#8250;  Compose your list of parts to cut
                  </Typography>
              </Toolbar>
              <Toolbar variant="dense" className={classes.toolbarSecondary}>
                  <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          onClick={handleDrawerOpen}
                          size="small"
                          edge="start"
                          className={clsx(classes.menuButton, {
                            [classes.hide]: open })}
                      >
                          <MenuIcon />
                      </IconButton>
              </Toolbar>
          </AppBar>
          <Drawer
              variant="permanent"
              className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
              })}
              classes={{
              paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
              }),
              }}
              >
              <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                  <Zoom in={open} style={{ transitionDelay: open ? '500ms' : '0ms' }}>
                    <img src={require('../../assets/logo192.png')} alt="logo" className={classes.logoBig} />
                  </Zoom>
                  &#160;&#160;&#160;
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
              </div>
              <SideNav/>
          </Drawer>
          <div className={classes.content}>
              <div className={classes.toolbar} />
              <Workspace />
          </div>
        </div>
    );
}

export default Cockpit;