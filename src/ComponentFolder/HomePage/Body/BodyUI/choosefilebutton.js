import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

 function UploadButtons (props) {
  
 
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        placeholder="Save as?"
        onChange={props.choseFileHandler}
        disabled={props.disableChooseFile}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" disabled={props.disableChooseFile}>
         chooseFile
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" disabled={props.disableChooseFile}/>
      
    </div>
  );
  
}
export default UploadButtons;