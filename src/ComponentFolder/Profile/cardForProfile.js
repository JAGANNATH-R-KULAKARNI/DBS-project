import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


export default function LongTextSnackbar(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <SnackbarContent message={props.item} action={props.type} />
    </div>
  );
}