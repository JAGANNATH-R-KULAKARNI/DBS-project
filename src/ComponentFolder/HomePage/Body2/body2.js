import React from 'react';
import firebase from '../../../Firebase/firebase';
import Channel from './Channel/channel';
import Spinner from '../../Loader/Loader';
import CryptoJS from "react-native-crypto-js";
import ErrorModal from './ModalForBody2';

class Body2 extends React.Component
{
     
    constructor()
    {
        super();
        this.state={
            userName : '',
            info : '',
            dateOfSignUp : null,
            finalChats : null,
            chatLength : 0,
            spinner : false,
            errorModalStatus : false,
            errorModalMessage : '',
        }
       
     this.handleClick=this.handleClick.bind(this);
     this.updateChats=this.updateChats.bind(this);
     this.scrollToBottom=this.scrollToBottom.bind(this);
     this.deleteChatHandler=this.deleteChatHandler.bind(this);
     this.errorModalMessageCloseHandle=this.errorModalMessageCloseHandle.bind(this);
    }
  
 

    errorModalMessageCloseHandle()
    {
      this.setState({
        errorModalStatus : false
      });
    }

    deleteChatHandler(id)
    {
       var docID=''+id;

      firebase.firestore().collection('messages').doc(docID).delete()
    .then((u)=>{
    })
     .catch((err)=>{
    this.setState({
      errorModalStatus : true,
       errorModalMessage : 'Deleting message was not successful , Check your Internet connection'
    });
})
    }

    scrollToBottom (){
        const reF=document.getElementById('chatsTextField');

        if(reF !== null)
        reF.scrollIntoView({ behavior: "smooth" });
       }
 

    updateChats(data)
    {
        this.setState({finalChats :data});
        this.scrollToBottom();
    }

    handleClick(text)
    {
        var today = new Date();
        var month=today.getMonth()+1;
        var MIN=today.getMinutes();
        var minutes=MIN < 10 ? '0'+MIN : ''+MIN;
        var hours=today.getHours();
        var type = (hours >= 12) ? 'PM' : 'AM';
       
        if(hours === 24)
        type='AM';
      
        var HOURS=hours % 12 ? hours % 12 : 12;
        var time = HOURS + ':' + minutes+' '+type+ '     ['+today.getDate()+'/'+month+'/'+today.getFullYear()+']';
        var encryptedText = CryptoJS.AES.encrypt(text,this.props.password);
        var encryptedCreatedAt = CryptoJS.AES.encrypt(time,this.props.password);
        var encryptedEmail = CryptoJS.AES.encrypt(this.props.email,this.props.password);
        var encryptedDateOfSignUp = CryptoJS.AES.encrypt(this.state.dateOfSignUp,this.props.password);

        var docData = {
            text : encryptedText.toString(),
            createdAt :  encryptedCreatedAt.toString(),
            email : encryptedEmail.toString(),
            exactTimeToSort : today.getTime(),
            dateOfSignUp : encryptedDateOfSignUp.toString(),
            likes : 0,
            dislikes : 0
        };


        firebase.firestore().collection("messages").doc(today.getTime().toString()).set(docData).then(() => {
        })
        .catch((err)=>{
            this.setState({
              errorModalStatus : true,
               errorModalMessage : 'Sending message was not successful , Check your Internet connection'
            });
        });
 
    
    }
    
    componentDidMount()
    {
        this.setState({spinner : true});
        firebase.firestore().collection('users').doc(this.props.email).get()
        .then((u)=>{
            var DecryptedUsername = CryptoJS.AES.decrypt(u.data()['username'],this.props.password);

            var DecryptedInfo = CryptoJS.AES.decrypt(u.data()['info'],this.props.password);
  
            var DecryptedDatOfSignUp = CryptoJS.AES.decrypt(u.data()['dateOfSignUp'],this.props.password);

          this.setState({
              username : DecryptedUsername.toString(CryptoJS.enc.Utf8),
              info : DecryptedInfo.toString(CryptoJS.enc.Utf8),
              dateOfSignUp : DecryptedDatOfSignUp.toString(CryptoJS.enc.Utf8),
            });
            
          })
        .catch((err)=>{
          this.setState({
            errorModalStatus : true,
             errorModalMessage : 'There was some error in getting user details , Check your Internet connection'
          });
        });

        firebase.firestore().collection('messages').orderBy('exactTimeToSort')
        .onSnapshot(querySnapshot => {
         const data = querySnapshot.docs.map(doc => ({
             ...doc.data(),
             id: doc.id,
           }));
 
          this.setState({
              chatLength : data.length,
              spinner : false
            });
          this.updateChats(data);
       });
       this.scrollToBottom();
    }
  
    componentDidUpdate(prevProps, prevState)
    {
       firebase.firestore().collection('messages').orderBy('exactTimeToSort')
       .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }));

   
  
          if(this.state.chatLength !== data.length)
          {     
         this.setState({chatLength : data.length});
         this.updateChats(data);
          }
          
      });
   
    }

  
    render()
    {
       const body=(this.state.spinner ? <Spinner /> : 
        <Channel 
        handleClick={this.handleClick} 
        finalChats={this.state.finalChats} 
        email={this.props.email}
        deleteChatHandler={this.deleteChatHandler}
        password={this.props.password}
        />
        );

        return (
            <div>
              {this.props.errorModalStatus ? <ErrorModal message={this.state.errorModalMessage}
               errorModalMessageCloseHandle={this.errorModalMessageCloseHandle}/> : null}
                {body}
                <div id='chatsTextField'/>
         </div>
        );
    }
};

export default Body2;