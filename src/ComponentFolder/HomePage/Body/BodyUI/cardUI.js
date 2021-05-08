import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextFieldUI from './textFiledUI';
import ChooseFileUI from './choosefilebutton';
import UplDelButUI from './uploadDeleteButtonUI';
import ProgressUI from './progressUI';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    
    <Card className={classes.root} elevation="0">
 
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <TextFieldUI  fileNameHandler={props.fileNameHandler} fileName={props.fileName}/>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <ChooseFileUI  choseFileHandler={props.choseFileHandler} disableChooseFile={props.disableChooseFile}/>
          </Typography>
        </CardContent>
    
    
        <UplDelButUI uploadFileHandler={props.uploadFileHandler} greenSignal={props.greenSignal} disableUploadFile={props.disableUploadFile} 
        closeBodyModalHandler={props.closeBodyModalHandler}/>
        {props.progressBarStatus ? <ProgressUI /> : null}
        <br />
      
    </Card>
  
  );
}
