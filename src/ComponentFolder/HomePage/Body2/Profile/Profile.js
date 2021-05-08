import React,{Component} from 'react';
import AvatarImage from './ProfileElements/Avatar';
import ButtonOK from './ProfileElements/Button';
import Chip from './ProfileElements/chip';
import Card from './ProfileElements/card';

class Profile extends Component
{
    render()
    {
        
        return (
            <div>
              <Card label={this.props.name} email={this.props.email} info={this.props.info} dateOfSignUp={this.props.dateOfSignUp}
              profileModalHandlerAfterOKClicked={this.props.profileModalHandlerAfterOKClicked}/>
              
            </div>
        );
    }
};

export default Profile;
/*
<div style={{width : "100%",marginLeft: "auto",
marginRight: "auto"}}>
                <AvatarImage label={this.props.name}/>
              </div>
               <Chip label={this.props.name}/>
               <Chip label={this.props.email}/>
       
       <h4>About : #Awesome</h4>
       <ButtonOK />
       */