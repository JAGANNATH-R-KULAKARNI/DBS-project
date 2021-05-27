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
               updatedLocation : '',
               updatedDp : '',
               randomImageGeneratorMessageTitle : 'Generate'
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
        this.generateRandomImageForDp=this.generateRandomImageForDp.bind(this);
       }
          
       generateRandomImageForDp()
       {
              this.setState({
                     randomImageGeneratorMessageTitle : 'Wait....'
              });

          fetch('https://source.unsplash.com/random').then(res =>{
                 if(res.ok){

                        this.setState({
                               Dp : res.url,
                               randomImageGeneratorMessageTitle : 'Generate'
                        })
                        return res.json();
                 }
                 
                 throw new Error('Request failed :(');
          },
          networkError => console.log(networkError.message)
          );
        
       }

       componentDidMount()
       {
              this.setState({spinnerForWholePage : true});    
          
              firebase.firestore().collection('users').doc(this.props.email).get()
              .then((u)=>{
                    
           var DecryptedUsername = CryptoJS.AES.decrypt(u.data()['username'],this.props.password);
           var DecryptedInfo = CryptoJS.AES.decrypt(u.data()['info'],this.props.password);
            var DecryptedLocation = CryptoJS.AES.decrypt(u.data()['location'],this.props.password);
            var DecryptedDp = CryptoJS.AES.decrypt(u.data()['url'],this.props.password);

            setTimeout(() => {
              this.setState({
                     updatedUsername : DecryptedUsername.toString(CryptoJS.enc.Utf8),
                     updatedBio : DecryptedInfo.toString(CryptoJS.enc.Utf8),
                     updatedLocation : DecryptedLocation.toString(CryptoJS.enc.Utf8),
                     updatedDp : DecryptedDp.toString(CryptoJS.enc.Utf8),
                     Dp : DecryptedDp.toString(CryptoJS.enc.Utf8),
                     spinnerForWholePage : false
                   });
            }, 700);
           
              })
              .catch((err)=>{});
       }


       editModalTextChangeHandler(e)
       {
          this.setState({[e.target.name] : e.target.value});
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
              username : '',
              bio : '',
              location : '',
              Dp : ''
         });
       }
   

       editDpHandler()
       {

              var encryptDp = CryptoJS.AES.encrypt(this.state.Dp,this.props.password);
       
              firebase.firestore().collection('users').doc(this.props.email).update({
                     url : encryptDp.toString()
              })
              .then((u)=>{})
              .catch((err)=>{});
     
             this.setState({
                   updatedDp: this.state.Dp
             });
             this.closeEditModal();
             this.setState({
                   spinnerForWholePage : true
                 });
             setTimeout(() => {
                   this.setState({
                          spinnerForWholePage : false
                        });
                 }, 1500);
       }

       editUsernameHandler()
       {
          
     
         var encrypName = CryptoJS.AES.encrypt(this.state.username,this.props.password);
       
         firebase.firestore().collection('users').doc(this.props.email).update({
                username : encrypName.toString()
         })
         .then((u)=>{})
         .catch((err)=>{});

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
            }, 1500);
       }

       editBioHandler()
       {
                
            
             var encryptBio = CryptoJS.AES.encrypt(this.state.bio,this.props.password);
           
             firebase.firestore().collection('users').doc(this.props.email).update({
                    info : encryptBio.toString()
             })
             .then((u)=>{})
             .catch((err)=>{});
    
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
            }, 1500);
       }

       editLocationHandler()
       {
             
             var encryptLocation = CryptoJS.AES.encrypt(this.state.location,this.props.password);
           
             firebase.firestore().collection('users').doc(this.props.email).update({
                    location : encryptLocation.toString()
             })
             .then((u)=>{})
             .catch((err)=>{});

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
            }, 1500);
       }

       
       render()
       {
              return (
                     <div>
                            {this.state.spinnerForWholePage ? <Spinner /> : 
                            <div>
                            {this.state.spinner ? <Spinner /> : null}
              {this.state.editDpStatus ? <DpModal generateRandomImageForDp={this.generateRandomImageForDp}
          randomImageGeneratorMessageTitle={this.state.randomImageGeneratorMessageTitle}  editDpHandler={this.editDpHandler} updatedDp={this.state.Dp} editModalTextChangeHandler={this.editModalTextChangeHandler}  closeEditModal={this.closeEditModal}/> : null}

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
                 updatedDp={this.state.updatedDp}
                 />
                 </div>}
                     </div>
              );
       }
};

export default Profile;







