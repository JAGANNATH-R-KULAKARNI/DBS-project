import React from 'react';
import firebase from '../../../Firebase/firebase';
import Channel from './Channel/channel';
import Chat from './Channel/chat';
import TextField from './Channel/textField';
import Send from './Channel/sendButton';
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
      console.log("deleteChatHandler");
      console.log(id);
       var docID=''+id;

      firebase.firestore().collection('messages').doc(docID).delete()
    .then((u)=>{
    console.log("Document is successfully deleted");
    })
     .catch((err)=>{
    console.log("something went wrong");
    this.setState({
      errorModalStatus : true,
       errorModalMessage : 'Deleting message was not successful , Check your Internet connection'
    });
})
    }

    scrollToBottom (){

        console.log("scrolling");
        document.getElementById('chatsTextField').scrollIntoView({ behavior: "smooth" });
       }
 

    updateChats(data)
    {
        /*
        const finalChats=data.map((item)=>{
         return <Chat name={item['username']} time={item['createdAt'] } text={item['text']}/>;
        });
        */
     
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
        var type = (hours / 12) ? 'PM' : 'AM';
        var time = hours % 12 + ':' + minutes+' '+type+ '     ['+today.getDate()+'/'+month+'/'+today.getFullYear()+']';
        console.log("testing encryption");
        console.log(text);
      //  var encrypted = CryptoJS.AES.encrypt(text, "Secret Passphrase");
     //   console.log(encrypted);
    //    console.log("encryped form string : ",encrypted.toString())
      //  var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
      //  console.log(decrypted);
  //    var decrypted = CryptoJS.AES.decrypt(encrypted.toString(), "Secret Passphrase");
//console.log("final result : ",decrypted.toString(CryptoJS.enc.Utf8)); // UTF-8 encoded
//console.log(CryptoJS.enc.Utf8.stringify(decrypted)); // UTF-8 encoded
       var encryptedText = CryptoJS.AES.encrypt(text,this.props.password);
        var encryptedCreatedAt = CryptoJS.AES.encrypt(time,this.props.password);
        var encryptedEmail = CryptoJS.AES.encrypt(this.props.email,this.props.password);
        var encryptedUsername = CryptoJS.AES.encrypt(this.state.username,this.props.password);
        var encryptedInfo = CryptoJS.AES.encrypt(this.state.info,this.props.password);
        var encryptedDateOfSignUp = CryptoJS.AES.encrypt(this.state.dateOfSignUp,this.props.password);

        var docData = {
            text : encryptedText.toString(),
            createdAt :  encryptedCreatedAt.toString(),
            email : encryptedEmail.toString(),
            exactTimeToSort : today.getTime(),
            username : encryptedUsername.toString(),
            info : encryptedInfo.toString(),
            dateOfSignUp : encryptedDateOfSignUp.toString(),
            location : ''
        };


        firebase.firestore().collection("messages").doc(today.getTime().toString()).set(docData).then(() => {
            console.log("Document successfully written!");
        })
        .catch((err)=>{
            console.log("There was some error in uploading");
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
            console.log("componentDidMount success usernameRetrieval");
            console.log(u.data());
            
            var DecryptedUsername = CryptoJS.AES.decrypt(u.data()['username'],this.props.password);
          //  var decrypted=Decrypted.toString(CryptoJS.enc.Utf8);

            var DecryptedInfo = CryptoJS.AES.decrypt(u.data()['info'],this.props.password);
         //   var decrypted=Decrypted.toString(CryptoJS.enc.Utf8);

            var DecryptedDatOfSignUp = CryptoJS.AES.decrypt(u.data()['dateOfSignUp'],this.props.password);
          //  var decrypted=Decrypted.toString(CryptoJS.enc.Utf8);

          this.setState({
              username : DecryptedUsername.toString(CryptoJS.enc.Utf8),
              info : DecryptedInfo.toString(CryptoJS.enc.Utf8),
              dateOfSignUp : DecryptedDatOfSignUp.toString(CryptoJS.enc.Utf8),
            });
            
          })
        .catch((err)=>{
          console.log("componentDidMount error usernameRetrieval");
          this.setState({
            errorModalStatus : true,
             errorModalMessage : 'There was some error in getting user details , Check your Internet connection'
          });
        });

        firebase.firestore().collection('messages').orderBy('exactTimeToSort')
        .onSnapshot(querySnapshot => {
            console.log("componentDidMount messages success chatsRetrieval");
         const data = querySnapshot.docs.map(doc => ({
             ...doc.data(),
             id: doc.id,
           }));
 
           console.log(data);
           console.log(data.length);
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
       firebase.firestore().collection('messages').orderBy('exactTimeToSort').limit(100)
       .onSnapshot(querySnapshot => {
           console.log("componentDidUpdate success messages retrieval");
        const data = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }));

          console.log(data);
          console.log(data.length);
          console.log(this.state.chatLength);
       //   const len=prevState.data ? prevState.data.length : 0;
          if(this.state.chatLength !== data.length)
          {     
         this.setState({chatLength : data.length});
         this.updateChats(data);
          }
          
      });
   
   //   console.log("final chats vro")
     //console.log(this.state.finalChats)
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
                <div/>
         </div>
        );
    }
};

export default Body2;