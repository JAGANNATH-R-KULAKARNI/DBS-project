import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    textAlign : 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <div style={{width : "33%"}}></div>
      <div style={{width : "34%"}}>
      <Avatar alt={props.label} src="/static/images/avatar/1.jpg" className={classes.large} />
      </div>
      <div style={{width : "33%"}}></div>
    </div>
  );
}
