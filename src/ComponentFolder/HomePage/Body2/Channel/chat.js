import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Avatar from '@material-ui/core/Avatar';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import HttpsIcon from '@material-ui/icons/Https';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Card from './card';
import firebase from '../../../../Firebase/firebase';
import CryptoJS from "react-native-crypto-js";

class ButtonSizes extends React.Component
 {
 constructor()
 {
   super();
   this.state={
     username : '',
     info : '',
     location : '',
     url : ''
   };
 }

 componentDidMount()
 {
  firebase.firestore().collection('users').doc(this.props.email).get()
  .then((u)=>{
      console.log(u.data());

     var DecryptedUUsername = CryptoJS.AES.decrypt(u.data()['username'],this.props.password);
     
     var DecryptedIInfo = CryptoJS.AES.decrypt(u.data()['info'],this.props.password);
     
     var DecryptedLLocation = CryptoJS.AES.decrypt(u.data()['location'],this.props.password);
     
     var DecryptedUUrl = CryptoJS.AES.decrypt(u.data()['url'],this.props.password);

      this.setState({
        username : DecryptedUUsername.toString(CryptoJS.enc.Utf8),
     info : DecryptedIInfo.toString(CryptoJS.enc.Utf8),
     location : DecryptedLLocation.toString(CryptoJS.enc.Utf8),
     url : DecryptedUUrl.toString(CryptoJS.enc.Utf8)
      })
    })
  .catch((err)=>{console.log(err)});
 }

 render()
 {
 const deleteIcon=( this.props.color === 'primary' ? <Link onClick={(e)=>this.props.deleteChatClickHandlerChannel(this.props.exactTimeToSort)}>
 <Tooltip title="Delete">
 <IconButton aria-label="delete">
   <DeleteIcon />
   </IconButton>
   </Tooltip>
   </Link> : null); 

 const encryptionIconANDdeleteIcon=(<div>
                     {deleteIcon}
                    <Tooltip title="End-To-End Encrypted">
                     <IconButton aria-label="End-To-End Encrypted">
                       <HttpsIcon />
                       </IconButton>
                       </Tooltip> 
                       </div>);

  return (
    <div>
        <Router>
       
   <Card encryptionIconANDdeleteIcon={encryptionIconANDdeleteIcon} lable={this.state.username} text={this.props.text}
     deleteChatClickHandlerChannel={this.props.deleteChatClickHandlerChannel} color={this.props.color}
     exactTimeToSort={this.props.exactTimeToSort}
     name={this.props.propsEmail === this.props.email ? "You" : this.state.username} email={this.props.email} dateOfSignUp={this.props.dateOfSignUp}
     info={this.state.info} profileModalHandler={this.props.profileModalHandler} time={this.props.time}
     avatar={this.state.username} location={this.state.location} url={this.state.url}/>
 
    </Router>
        </div>
    
  );
 }
}

export default ButtonSizes;