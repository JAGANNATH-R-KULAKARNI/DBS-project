import React,{Component} from 'react';
import ProfileSoul from './profileSoul';
import DpModal from './ModalsForProfile/DpModal';
import UsernameModal from './ModalsForProfile/usernameModal';
import BioModal from './ModalsForProfile/bioModal';
import LocationModal from './ModalsForProfile/locationModal';
import SecurityModal from './ModalsForProfile/securityModal';
import firebase from '../../Firebase/firebase';
import CryptoJS from "react-native-crypto-js";
import Spinner from '../Loader/Loader';

class Profile extends Component
{
       constructor()
       {
        super();
        this.state={
               editDpStatus : false,
               editUsernameStatus : false,
               editBioStatus : false,
               editLocationStaus : false,
               securityShoeStatus : false,
               Dp : '',
               username : '',
               bio : '',
               location : '',
               spinner : false,
               spinnerForWholePage : false,
               updatedUsername : '',
               updatedBio : '',
               updatedLocation : ''
              };
 
        this.closeEditModal=this.closeEditModal.bind(this);
        this.editDpHandler=this.editDpHandler.bind(this);
        this.editUsernameHandler=this.editUsernameHandler.bind(this);
        this.editBioHandler=this.editBioHandler.bind(this);
        this.editLocationHandler=this.editLocationHandler.bind(this);
        this.editModalTextChangeHandler=this.editModalTextChangeHandler.bind(this);
        this.openEditModalDp=this.openEditModalDp.bind(this);
        this.openEditModalUsername=this.openEditModalUsername.bind(this);
        this.openEditModalBio=this.openEditModalBio.bind(this);
        this.openEditModalLocation=this.openEditModalLocation.bind(this);
        this.openEditModalSecurity=this.openEditModalSecurity.bind(this);
       }
          
       componentDidMount()
       {
              this.setState({spinnerForWholePage : true});    
          
              firebase.firestore().collection('users').doc(this.props.email).get()
              .then((u)=>{
                    
           var DecryptedUsername = CryptoJS.AES.decrypt(u.data()['username'],this.props.password);
           var DecryptedInfo = CryptoJS.AES.decrypt(u.data()['info'],this.props.password);
            var DecryptedLocation = CryptoJS.AES.decrypt(u.data()['location'],this.props.password);
            setTimeout(() => {
              this.setState({
                     updatedUsername : DecryptedUsername.toString(CryptoJS.enc.Utf8),
                     updatedBio : DecryptedInfo.toString(CryptoJS.enc.Utf8),
                     updatedLocation : DecryptedLocation.toString(CryptoJS.enc.Utf8),
                     spinnerForWholePage : false
                   });
            }, 700);
           
              })
              .catch((err)=>console.log(err));
       }

  /*     componentDidUpdate()
       {
          var USERNAME;
          var LOCATION;
          var BIO;

          firebase.firestore().collection('users').doc(this.props.email).get()
          .then((u)=>{
          USERNAME=u.data()['username'];
          LOCATION=u.data()['location'];
          BIO=u.data()['bio'];
          })
       }
*/
       editModalTextChangeHandler(e)
       {
          this.setState({[e.target.name] : e.target.value});
          console.log(e.target.value);
       }

       openEditModalDp()
       {
     this.setState({editDpStatus : true})
       }

       openEditModalUsername()
       {
    this.setState({editUsernameStatus : true})
       }

       openEditModalBio()
       {
       this.setState({editBioStatus : true});
       }


       openEditModalLocation()
       {
        this.setState({editLocationStaus : true});
       }

       openEditModalSecurity()
       {
        this.setState({securityShoeStatus : true});
       }

       closeEditModal()
       {
         this.setState({
              editDpStatus : false,
              editUsernameStatus : false,
              editBioStatus : false,
              editLocationStaus : false,
              securityShoeStatus : false,
              Dp : '',
              username : '',
              bio : '',
              location : '',
         });
       }

       
       editDpHandler()
       {

       }

       editUsernameHandler()
       {
          
     
         var encrypName = CryptoJS.AES.encrypt(this.state.username,this.props.password);
       
         firebase.firestore().collection('users').doc(this.props.email).update({
                username : encrypName.toString()
         })
         .then((u)=>{console.log(u);})
         .catch((err)=>console.log(err));

         firebase.firestore().collection('messages').orderBy('exactTimeToSort')
         .onSnapshot(querySnapshot => {
             console.log("componentDidMount messages success chatsRetrieval");
          const data = querySnapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id,
            }));
  
            console.log(data);
           
            data.map((item)=>{
                   console.log(this.props.email);
                   console.log(item['username']);
                   var Decryptedemail = CryptoJS.AES.decrypt(item['email'],this.props.password);
                   var decryptedEemail=Decryptedemail.toString(CryptoJS.enc.Utf8);

    //    console.log(this.props.email === item['email'] ? "true vro" : "false vro");
                  if(this.props.email === decryptedEemail) 
                  {
                   firebase.firestore().collection('messages').doc(item['exactTimeToSort'].toString()).update({
                     username : encrypName.toString()
                   })
                   .then((u)=>console.log(u))
                   .catch((err)=>console.log(err));
              }
            });

       

        });
        this.setState({
              updatedUsername : this.state.username
        });
        this.closeEditModal();
        this.setState({
              spinnerForWholePage : true
            });
        setTimeout(() => {
              this.setState({
                     spinnerForWholePage : false
                   });
            }, 300);
       }

       editBioHandler()
       {
                
            
             var encryptBio = CryptoJS.AES.encrypt(this.state.bio,this.props.password);
           
             firebase.firestore().collection('users').doc(this.props.email).update({
                    info : encryptBio.toString()
             })
             .then((u)=>{console.log(u);})
             .catch((err)=>console.log(err));
    
             firebase.firestore().collection('messages').orderBy('exactTimeToSort')
             .onSnapshot(querySnapshot => {
                 console.log("componentDidMount messages success chatsRetrieval");
              const data = querySnapshot.docs.map(doc => ({
                  ...doc.data(),
                  id: doc.id,
                }));
      
                console.log(data);
               
                data.map((item)=>{
 
                       var Decryptedemail = CryptoJS.AES.decrypt(item['email'],this.props.password);
                       var decryptedEemail=Decryptedemail.toString(CryptoJS.enc.Utf8);
    
        //    console.log(this.props.email === item['email'] ? "true vro" : "false vro");
                      if(this.props.email === decryptedEemail) 
                      {
                       firebase.firestore().collection('messages').doc(item['exactTimeToSort'].toString()).update({
                            info : encryptBio.toString()
                       })
                       .then((u)=>console.log(u))
                       .catch((err)=>console.log(err));
                  }
                });
    
           
    
            });
            this.setState({
              updatedBio : this.state.bio
        });
            this.closeEditModal();
            this.setState({
              spinnerForWholePage : true
            });
        setTimeout(() => {
              this.setState({
                     spinnerForWholePage : false
                   });
            }, 300);
       }

       editLocationHandler()
       {
             
             var encryptLocation = CryptoJS.AES.encrypt(this.state.location,this.props.password);
           
             firebase.firestore().collection('users').doc(this.props.email).update({
                    location : encryptLocation.toString()
             })
             .then((u)=>{console.log(u);})
             .catch((err)=>console.log(err));
    
             firebase.firestore().collection('messages').orderBy('exactTimeToSort')
             .onSnapshot(querySnapshot => {
                 console.log("componentDidMount messages success chatsRetrieval");
              const data = querySnapshot.docs.map(doc => ({
                  ...doc.data(),
                  id: doc.id,
                }));
      
                console.log(data);
               
                data.map((item)=>{
 
                       var Decryptedemail = CryptoJS.AES.decrypt(item['email'],this.props.password);
                       var decryptedEemail=Decryptedemail.toString(CryptoJS.enc.Utf8);
    
        //    console.log(this.props.email === item['email'] ? "true vro" : "false vro");
                      if(this.props.email === decryptedEemail) 
                      {
                       firebase.firestore().collection('messages').doc(item['exactTimeToSort'].toString()).update({
                            location : encryptLocation.toString()
                       })
                       .then((u)=>console.log(u))
                       .catch((err)=>console.log(err));
                  }
                });
    
           
    
            });
            this.setState({
              updatedLocation : this.state.location
        });
            this.closeEditModal();
            this.setState({
              spinnerForWholePage : true
            });
        setTimeout(() => {
              this.setState({
                     spinnerForWholePage : false
                   });
            }, 300);
       }

       
       render()
       {
              return (
                     <div>
                            {this.state.spinnerForWholePage ? <Spinner /> : 
                            <div>
                            {this.state.spinner ? <Spinner /> : null}
              {this.state.editDpStatus ? <DpModal 
              editModalTextChangeHandler={this.editModalTextChangeHandler}  closeEditModal={this.closeEditModal}/> : null}

              {this.state.editUsernameStatus ? <UsernameModal 
              editUsernameHandler={this.editUsernameHandler} editModalTextChangeHandler={this.editModalTextChangeHandler}  closeEditModal={this.closeEditModal}/> : null}

              {this.state.editBioStatus ? <BioModal 
              editBioHandler={this.editBioHandler} editModalTextChangeHandler={this.editModalTextChangeHandler}  closeEditModal={this.closeEditModal}/> : null}

              {this.state.editLocationStaus ? <LocationModal 
              editLocationHandler={this.editLocationHandler} editModalTextChangeHandler={this.editModalTextChangeHandler}  closeEditModal={this.closeEditModal}/> : null}

              {this.state.securityShoeStatus ? <SecurityModal 
              editModalTextChangeHandler={this.editModalTextChangeHandler}  closeEditModal={this.closeEditModal}/> : null}

                 <ProfileSoul 
                 openEditModalDp={this.openEditModalDp}
                 openEditModalUsername={this.openEditModalUsername}
                 openEditModalBio={this.openEditModalBio}
                 openEditModalLocation={this.openEditModalLocation}
                 openEditModalSecurity={this.openEditModalSecurity}
                 updatedUsername={this.state.updatedUsername}
                 updatedBio={this.state.updatedBio}
                 updatedLocation={this.state.updatedLocation}
                 />
                 </div>}
                     </div>
              );
       }
};

export default Profile;







/*import React,{Component} from 'react';
import Card from './cardForProfile';
import CardForImage from './cardForImage';
import EditIcon from '@material-ui/icons/Edit';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import SecurityIcon from '@material-ui/icons/Security';
import Button from '@material-ui/core/Button';

const Profile = () =>
{

       const image=( <div style={{
        textAlign: 'center'
        }}>           
<img src='https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="Profile Image"
style={{
    objectFit : 'contain'
    }}/>
</div>);

     const MORE=(<Button color="secondary" size="small">
     More
   </Button>
 );
        return (
            <div style={{textAlign : 'center'}}>
                <br />
                <br />
                <br />
                <br />
         <CardForImage item={<EditIcon />}/>
         <br />
                <br />
                <br />
         <Card type={<EditIcon />} item="Jagannath R Kulakarni"/>
                <br />
                <br />
         <Card type={<EditIcon />} item="#Awesome"/>
                <br />
                <br />
         <Card type={<EditIcon />} item="Mysore"/>
                <br />
                <br />
        <Card type={MORE} item='Security'/>
        <br />
                <br />
                
            </div>
        );
    
};

export default Profile;
*/