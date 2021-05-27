import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip size="small" label={props.label} ></Chip> 
    </div>
  );
}
