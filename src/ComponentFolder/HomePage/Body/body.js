import React from 'react';
import firebase from '../../../Firebase/firebase';
import Card from './BodyUI/cardUI';
import AddButton from './BodyUI/addButton';
import { Add } from '@material-ui/icons';
import BodyModal from '../Body/bodyModal';
import axios from 'axios';
import Chat from './chatUI/chatUI';
import {ChatEngine} from 'react-chat-engine';

async function pageTokenExample(){
    // Create a reference under which you want to list
  /*  var storageRef=firebase.storage().ref();
    
      storageRef.child('ben').getDownloadURL()
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
       console.log(url);
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    var img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
  */
    /*
  axios.get('https://connect-ca4c1-default-rtdb.firebaseio.com/connect.json')
  .then((u)=>{
      console.log("axios result ");
      console.log(u);
  })
  .catch((err)=>{
     console.log("axios result err " + err);
  });
  




*/
  var arr;

  firebase.firestore().collection('email').doc('jagben').get()
  .then((doc) =>{
   
    
    if (doc.exists) {
      const data=doc.data();
      arr=data['conversations'];
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    
  })
  .catch((err) => console.log(err));


  arr=arr.concat("hey");

  firebase.firestore().collection('email').doc('jagben').set({
   conversations : arr
  })
  .then((resp) =>console.log("here " + resp))
  .catch((err) => console.log("here2 " + err));
  }

class Body extends React.Component
{
    constructor()
    {
        super();
        this.state={
            fileName : '',
            isChose : false,
            file : null,
            bodyModalStatus : false,
            progressBarStatus : false,
            modalResult : false,
            afterUploadResultModalStatus : false,
            afterUploadResulModalMessage : '',
            afterUploadResulModalMessageType : '',
            disableChooseFile : true,
            disableUploadFile : true
        }
        this.choseFileHandler=this.choseFileHandler.bind(this);
        this.fileNameHandler=this.fileNameHandler.bind(this);
        this.uploadFileHandler=this.uploadFileHandler.bind(this);
        this.addButtonModalOpernerHandler=this.addButtonModalOpernerHandler.bind(this);
        this.afterUploadResulModalOKhandler=this.afterUploadResulModalOKhandler.bind(this);
        this.uploadDetailsToFirebaseFirestore=this.uploadDetailsToFirebaseFirestore.bind(this);
        this.getStorageLocationOfUploadedFile=this.getStorageLocationOfUploadedFile.bind(this);
        this.detailsFromFirebaseFirestore=this.detailsFromFirebaseFirestore.bind(this);
    }

    detailsFromFirebaseFirestore()
    {
      console.log("here i am")
      firebase.firestore().collection('email').doc(this.props.email).get()
      .then((doc) =>{
       
        
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
        
      })
      .catch((err) => console.log(err));
    }

    afterUploadResulModalOKhandler()
    {
     this.setState({
        fileName : '',
        isChose : false,
        file : null,
        bodyModalStatus : false,
        progressBarStatus : false,
        modalResult : false,
        afterUploadResultModalStatus : false,
        afterUploadResulModalMessage : '',
        afterUploadResulModalMessageType : '',
        disableChooseFile : true,
        disableUploadFile : true
     });
    }

    choseFileHandler(e)
    {

      this.setState({
          isChose : true,
          file : e.target.files[0],
          disableUploadFile : false
      });
        
    }

    fileNameHandler(e)
    {
       this.setState({
           fileName : e.target.value,
           disableChooseFile : e.target.value === '' ? true : false
    });
    }

    uploadDetailsToFirebaseFirestore(url)
    {
      console.log("url function")
     firebase.firestore().collection('email').doc(this.state.fileName)
     .add({
       fileName : this.state.fileName,
       fileLocation : url
     })
     .then((resp) => {
      setTimeout(() => {
        this.setState({
            fileName : '',
           isChose : false,
           fileRef : null,
           file : null,
           progressBarStatus : false,
           modalResult : true,
           afterUploadResultModalStatus : true,
           afterUploadResulModalMessage : 'Upload was successful :)',
           afterUploadResulModalMessageType : 'success'
           });
    }, 1000);
     })
     .catch((err) =>{
      setTimeout(() => {
        this.setState({
            fileName : '',
           isChose : false,
           fileRef : null,
           file : null,
           progressBarStatus : false,
           afterUploadResultModalStatus : true,
           afterUploadResulModalMessage : 'Something went wrong in updating database,Upload was not successful :(',
           afterUploadResulModalMessageType : 'error'
           });
    }, 1000);
     });
    }

    getStorageLocationOfUploadedFile()
    {
      var storageRef=firebase.storage().ref();
    
      storageRef.child(this.state.fileName).getDownloadURL()
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
       console.log(url);
       this.uploadDetailsToFirebaseFirestore(url);
    // This can be downloaded directly:
  /*  var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    var img = document.getElementById('myimg');
    img.setAttribute('src', url);*/
  })
  .catch((error) => {
    setTimeout(() => {
      this.setState({
          fileName : '',
         isChose : false,
         fileRef : null,
         file : null,
         progressBarStatus : false,
         afterUploadResultModalStatus : true,
         afterUploadResulModalMessage : 'Something went wrong in getting storage location,Upload was not successful :(',
         afterUploadResulModalMessageType : 'error'
         });
  }, 1000);
  });
    }

    uploadFileHandler()
    {

        this.setState({progressBarStatus : true});    
        const storageRef=firebase.storage().ref();
        const fileRef=storageRef.child(this.state.fileName);   
        fileRef.put(this.state.file)
        .then((u)=>{
            console.log("uploaded vro "+u);
            this.getStorageLocationOfUploadedFile();
          
        })
        .catch((err)=>{
            console.log(err);
            setTimeout(() => {
                this.setState({
                    fileName : '',
                   isChose : false,
                   fileRef : null,
                   file : null,
                   progressBarStatus : false,
                   afterUploadResultModalStatus : true,
                   afterUploadResulModalMessage : 'Something went wrong ,Upload was not successful :(',
                   afterUploadResulModalMessageType : 'error'
                   });
            }, 1000);
        });

    
      
    }

    addButtonModalOpernerHandler()
    {
        this.setState({bodyModalStatus : true});
    }

    render()
    {
        const card=(<Card 
        fileName={this.state.fileName}
        choseFileHandler={this.choseFileHandler}
        fileNameHandler={this.fileNameHandler}
        uploadFileHandler={this.uploadFileHandler}
        progressBarStatus={this.state.progressBarStatus}
        disableChooseFile={this.state.disableChooseFile}
        disableUploadFile={this.state.disableUploadFile}
        closeBodyModalHandler={this.afterUploadResulModalOKhandler}
        />);
        return (
            <div>
               {this.state.bodyModalStatus ? <BodyModal  card={card}
                afterUploadResultModalStatus={this.state.afterUploadResultModalStatus}
                afterUploadResulModalMessage={this.state.afterUploadResulModalMessage}
                afterUploadResulModalMessageType={this.state.afterUploadResulModalMessageType}
                afterUploadResulModalOKhandler={this.afterUploadResulModalOKhandler}
               /> : null}
                <AddButton addButtonModalOpernerHandler={this.addButtonModalOpernerHandler}/>
                <ChatEngine
			     projectID='c9bedb72-0fec-419d-b3a5-e5a9fccd825d'
			     userName='JagannathRKulakarni'
			    userSecret='171845'
		       />
            </div>
        );
    }
};

export default Body;
