import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '34ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  
  return (
    <div>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
      id="textfieldresetid" label="buzz here" variant="outlined" onChange={props.textFieldHandle} multiline/>
    </form>
</div>
  );
};


