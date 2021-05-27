import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedButtons(props) {
  const classes = useStyles();

  return (
    <div>
        <Button variant="contained" color="primary" className={classes.margin} onClick={props.afterUploadResulModalOKhandler}>
          Ok
        </Button>
    </div>
  );
}