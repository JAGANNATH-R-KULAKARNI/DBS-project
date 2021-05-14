import React,{Component} from 'react';
import ProfileSoul from './profileSoul';
import DpModal from './ModalsForProfile/DpModal';
import UsernameModal from './ModalsForProfile/usernameModal';
import BioModal from './ModalsForProfile/bioModal';
import LocationModal from './ModalsForProfile/locationModal';
import SecurityModal from './ModalsForProfile/securityModal';


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
         });
       }


       editDpHandler()
       {

       }

       editUsernameHandler()
       {

       }

       editBioHandler()
       {

       }

       editLocationHandler()
       {

       }

       
       render()
       {
              return (
                     <div>
              {this.state.editDpStatus ? <DpModal 
              editModalTextChangeHandler={this.editModalTextChangeHandler}  closeEditModal={this.closeEditModal}/> : null}

              {this.state.editUsernameStatus ? <UsernameModal 
              editModalTextChangeHandler={this.editModalTextChangeHandler}  closeEditModal={this.closeEditModal}/> : null}

              {this.state.editBioStatus ? <BioModal 
              editModalTextChangeHandler={this.editModalTextChangeHandler}  closeEditModal={this.closeEditModal}/> : null}

              {this.state.editLocationStaus ? <LocationModal 
              editModalTextChangeHandler={this.editModalTextChangeHandler}  closeEditModal={this.closeEditModal}/> : null}

              {this.state.securityShoeStatus ? <SecurityModal 
              editModalTextChangeHandler={this.editModalTextChangeHandler}  closeEditModal={this.closeEditModal}/> : null}

                 <ProfileSoul 
                 openEditModalDp={this.openEditModalDp}
                 openEditModalUsername={this.openEditModalUsername}
                 openEditModalBio={this.openEditModalBio}
                 openEditModalLocation={this.openEditModalLocation}
                 openEditModalSecurity={this.openEditModalSecurity}
                 />
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