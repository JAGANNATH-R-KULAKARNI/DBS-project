import React, { Component } from 'react';
import Classes from './Modal.css';
import Backdrop from '../BackDrop/BackDrop';
import Button from '../Button/Button';
import ButtonLogOut from '../LogOut/LogOutButton';
import MessageUI from '../MessagesUI/MessagesUI';

class modal extends Component
{
   
   
    render()
    {
        return ( 
          <div>
            
            <div className={Classes.Modal}
               style={{
                   transform : 'translateY(0)' ,
                   opacity :'1' 
               }}>
          <MessageUI messageType={this.props.messageType} modalMessage={this.props.modalMessage}/>
          <div onClick={this.props.modalOKtoggleButton ? this.props.ModalHandle : this.props.ModalHandleDuringLogginOut}>
          <Button/>  
          </div>
          <div onClick={this.props.cancelModalHandleDuringLogginOut}>
          {!this.props.modalOKtoggleButton ? <ButtonLogOut buttonMessage="CANCEL"/> : null}
          </div>
          </div>
          <Backdrop />  
          </div>
          );
    }
}


export default modal;


/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MessageUI from '../MessagesUI/MessagesUI';

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
    <Card className={classes.root}>

        <CardContent>

          <Typography variant="body2" color="textSecondary" component="p">
          <MessageUI messageType={props.messageType} modalMessage={props.modalMessage}/>
          </Typography>
        </CardContent>
    
      <CardActions>
        <Button size="small" color="secondary" onClick={props.modalOKtoggleButton ? props.ModalHandle : props.ModalHandleDuringLogginOut}>
          Yes
        </Button>
       { !props.modalOKtoggleButton ? <div>
        <Button size="small" color="primary" onClick={props.cancelModalHandleDuringLogginOut}>
          No
        </Button>
        </div> : null}
      </CardActions>
    </Card>
  );
}
*/