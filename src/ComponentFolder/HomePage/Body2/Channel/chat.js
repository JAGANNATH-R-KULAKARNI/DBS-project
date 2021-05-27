import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {BrowserRouter as Router,Link} from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import HttpsIcon from '@material-ui/icons/Https';
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
     url : '',
     likes : 0,
     dislikes : 0,
     likeStatus : false,
     dislikeStatus : false,
     isLikesStatusAvailable : false,
     isDislikesStatusAvailable : false
   };
   
   this.likeHandler=this.likeHandler.bind(this);
   this.dislikeHandler=this.dislikeHandler.bind(this);
 }

 componentDidMount()
 {
  firebase.firestore().collection('users').doc(this.props.email).get()
  .then((u)=>{
     var DecryptedUUsername = CryptoJS.AES.decrypt(u.data()['username'],this.props.password);
     
     var DecryptedIInfo = CryptoJS.AES.decrypt(u.data()['info'],this.props.password);
     
     var DecryptedLLocation = CryptoJS.AES.decrypt(u.data()['location'],this.props.password);
     
     var DecryptedUUrl = CryptoJS.AES.decrypt(u.data()['url'],this.props.password);

      this.setState({
        username : DecryptedUUsername.toString(CryptoJS.enc.Utf8),
     info : DecryptedIInfo.toString(CryptoJS.enc.Utf8),
     location : DecryptedLLocation.toString(CryptoJS.enc.Utf8),
     url : DecryptedUUrl.toString(CryptoJS.enc.Utf8),
     likes : this.props.likes,
     dislikes : this.props.dislikes
      })
    })
  .catch((err)=>{});

  firebase.firestore().collection('emotions').doc('likes').collection(this.props.emailForLikesAndDislikes)
  .onSnapshot(querySnapshot => {
 const data = querySnapshot.docs.map(doc => ({
     ...doc.data(),
     id: doc.id,
   }));

 var like=false;

 data.map((item)=>{
   if(this.props.exactTimeToSort === item['exactTimeToSort'])
   {
     like=true;
   }

   return null;
 });

 this.setState({
   likeStatus : like,
   isLikesStatusAvailable : true
 })
  }
  );

  firebase.firestore().collection('emotions').doc('dislikes').collection(this.props.emailForLikesAndDislikes)
  .onSnapshot(querySnapshot => {
 const data = querySnapshot.docs.map(doc => ({
     ...doc.data(),
     id: doc.id,
   }));

 var dislike=false;

 data.map((item)=>{
   if(this.props.exactTimeToSort === item['exactTimeToSort'])
   {
     dislike=true;
   }
   return null;
 });

 this.setState({
   dislikeStatus : dislike,
   isDislikesStatusAvailable : true
 })
  }
  );

 }

 componentWillUnmount()
 {
  firebase.firestore().collection('messages').doc(this.props.exactTimeToSort.toString()).update({
    likes : this.state.likes,
    dislikes : this.state.dislikes
})
.then((u)=>{})
.catch((err)=>{});

 if(this.state.likeStatus)
 {
  firebase.firestore().collection('emotions').doc('likes').collection(this.props.emailForLikesAndDislikes).doc(this.props.exactTimeToSort.toString())
  .set({
    exactTimeToSort : this.props.exactTimeToSort
  })
  .then((u)=>{})
  .catch((err)=>{});
 }
 else
 {
  firebase.firestore().collection('emotions').doc('likes').collection(this.props.emailForLikesAndDislikes).doc(this.props.exactTimeToSort.toString())
  .delete()
  .then((u)=>{})
  .catch((err)=>{});
 }
 if(this.state.dislikeStatus)
 {
  firebase.firestore().collection('emotions').doc('dislikes').collection(this.props.emailForLikesAndDislikes).doc(this.props.exactTimeToSort.toString())
  .set({
    exactTimeToSort : this.props.exactTimeToSort
  })
  .then((u)=>{})
  .catch((err)=>{});
 }
 else
 {
  firebase.firestore().collection('emotions').doc('dislikes').collection(this.props.emailForLikesAndDislikes).doc(this.props.exactTimeToSort.toString())
  .delete()
  .then((u)=>{})
  .catch((err)=>{});
 }
 }

 likeHandler()
 {
   var count=this.state.likes;
   var dislikes=this.state.dislikes;
   var dislikeStatus=this.state.dislikeStatus;

   if(this.state.dislikeStatus && !this.state.likeStatus)
   {
    dislikeStatus=false;
    dislikes--;
   }

   if(this.state.likeStatus)
   count--;
   else
   count++;

  this.setState({
    likes : count,
    likeStatus : !this.state.likeStatus,
    dislikeStatus : dislikeStatus,
    dislikes : dislikes
  });

 }

 dislikeHandler()
 {
  var count=this.state.dislikes;
  var likes=this.state.likes;
  var likeStatus=this.state.likeStatus;

  if(this.state.likeStatus && !this.state.dislikeStatus)
  {
    likeStatus=false;
    likes--;
  }
  if(this.state.dislikeStatus)
  count--;
  else
  count++;

 this.setState({
   dislikes : count,
   dislikeStatus : !this.state.dislikeStatus,
   likeStatus : likeStatus,
   likes : likes
 });

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
     deleteChatClickHandlerChannel={this.props.deleteChatClickHandlerChannel} color={this.props.color} likeStatus={this.state.likeStatus}
     exactTimeToSort={this.props.exactTimeToSort} likes={this.state.likes} dislikes={this.state.dislikes} dislikeStatus={this.state.dislikeStatus}
     name={this.props.propsEmail === this.props.email ? "You" : this.state.username} email={this.props.email} dateOfSignUp={this.props.dateOfSignUp}
     info={this.state.info} profileModalHandler={this.props.profileModalHandler} time={this.props.time}
     avatar={this.state.username} location={this.state.location} url={this.state.url}
     likeHandler={this.likeHandler} dislikeHandler={this.dislikeHandler} 
     isLikesStatusAvailable={this.state.isLikesStatusAvailable} isDislikesStatusAvailable={this.state.isDislikesStatusAvailable}/>
 
    </Router>
        </div>
    
  );
 }
}

export default ButtonSizes;