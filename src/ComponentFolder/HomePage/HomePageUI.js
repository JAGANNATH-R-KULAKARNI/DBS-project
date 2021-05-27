import React from 'react';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CastConnectedIcon from '@material-ui/icons/CastConnected';
import { makeStyles } from '@material-ui/core/styles';
import HOMEPAGEUI from './HomePage2UI';
import ProfileButton from '../Profile/profileButton';
import Profile from '../Profile/Profile';
import LogOutButton from '../LogOut/LogOutButton';

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

