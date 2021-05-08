import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color={props.color} onClick={props.DeleteChatClickHandlerChannel}>
        {props.TYPE}
      </Button>
     
    </div>
  );
}
