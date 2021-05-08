import React, { Component } from 'react';
import Classes from './Modal.css';
import Backdrop from '../../../../BackDrop/BackDrop';
import Profile from '../Profile';

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
        
         <Profile 
         profileModalHandlerAfterOKClicked={this.props.profileModalHandlerAfterOKClicked}
         name={this.props.name} email={this.props.email} info={this.props.info} dateOfSignUp={this.props.dateOfSignUp}
         />
          </div>
          <Backdrop />  
          </div>
          );
    }
}


export default modal;