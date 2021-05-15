import React from 'react';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import PropTypes from 'prop-types';
import HOMEPAGEUI from './HomePage2UI';
import ProfileButton from '../Profile/profileButton';
import Profile from '../Profile/Profile';
import LogOutButton from '../LogOut/LogOutButton';

const drawerWidth = 240;

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [Status, setStatus] = React.useState(true);
  const [state, setState] = React.useState({
    left: false,
    bottom : false
  });

  const logOutButtonClick = () =>{
    props.logOutHandle();
    toggleDrawer('bottom', false);
  }

  const arrowBackButtonHandler = () =>{
    setStatus(true);
  }
  const profileButtonHandle = () =>{
    setStatus(false);
    toggleDrawer('bottom',false);
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <br />
      <div  style={{textAlign : "center"}}>
      <CastConnectedIcon />
      </div>
      <br />
      <Divider />
      <List>
        <div style={{textAlign : "center"}}>
        <ProfileButton profileButtonHandle={profileButtonHandle}/>
        </div>
      </List>
      <Divider />
      <List>
      <div style={{textAlign : "center"}}>
      <LogOutButton buttonMessage="LogOut" logOutButtonClick={logOutButtonClick}/>
        </div>
      </List>
      <Divider />
      <List>
     
      </List>
    </div>
  );

  return (
    <div>
    <div>
    <HOMEPAGEUI drawerOpen={toggleDrawer('bottom', true)} status={Status} arrowBackButtonHandler={arrowBackButtonHandler}/>
    <SwipeableDrawer
            anchor='bottom'
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
            onOpen={toggleDrawer('bottom', true)}
          >
            {list('bottom')}
          </SwipeableDrawer>
      </div>
      <div style={{paddingLeft : '5px'}}>
      {Status ? props.body : <Profile email={props.email}  password={props.password}/>}
      </div>
    </div>
  );
}


/*
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import PropTypes from 'prop-types';
const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));



export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
 
  const handleDrawerOpen = () => {
    props.scrollDownFalse();
    setOpen(true);
    console.log("drawer open");
  };

  const handleDrawerClose = () => {
    props.scrollDownTrue();
    setOpen(false);
    console.log("drawer close");
  };

  const logOutButtonClick = () =>{
    props.logOutHandle();
    handleDrawerClose();
  }


  return (
    <div className={classes.root}>
         
      <CssBaseline />
     
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <CastConnectedIcon />
          </IconButton>
         
          <div id='TopchatsTextField'/>
           <Typography variant="h3">
            Connect
          </Typography>
          
       
        </Toolbar>
      </AppBar>
     
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <div onClick={logOutButtonClick} style={{textAlign : "center"}}>
              {props.logOutButton}
        </div>
        </List>
        <Divider />
        <List>
         
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {props.body}
      </main>
   
    </div>
  );
}

*/