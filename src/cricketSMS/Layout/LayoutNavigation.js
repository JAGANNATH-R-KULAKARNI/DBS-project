import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});


export default function SimpleBottomNavigation(props) {
  const classes = makeStyles({
    root: {
      width: 300,
    },
  });
  const [value, setValue] = React.useState(0);
  const ELEMENT= (value === 0 ? props.players : (value === 1 ? props.teams : props.stadiums));
  return (
      <div>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Players" icon={<DirectionsRunIcon />} />
      <BottomNavigationAction label="Teams" icon={<GroupIcon />} />
      <BottomNavigationAction label="Stadiums" icon={<LocationOnIcon />} />
    </BottomNavigation>
    <br />
    <br />
    <br />
    <div style={{textAlign : 'center'}}>
    {ELEMENT}
    </div>
    </div>
  );
}
