import React, { Component } from 'react';
import Classes from './Modal.css';
import Backdrop from '../../../BackDrop/BackDrop';
import OkNoButton from './OkNoButton';
import ALERT from './alert';

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
         <ALERT />
         <OkNoButton color="primary" TYPE="Yes" DeleteChatClickHandlerChannel={this.props.YesDeleteChatClickHandlerChannel}/> 
         <OkNoButton color="secondary" TYPE="No" DeleteChatClickHandlerChannel={this.props.NoDeleteChatClickHandlerChannel}/>
          </div>
          <Backdrop />  
          </div>
          );
    }
}


export default modal;