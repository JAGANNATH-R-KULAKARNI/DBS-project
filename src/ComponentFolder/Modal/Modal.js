import React, { Component } from 'react';
import Classes from './Modal.css';
import Backdrop from '../BackDrop/BackDrop';
import Button from '../Button/Button';
import ButtonLogOut from '../LogOut/LogOutButton';
import MessageUI from '../MessagesUI/MessagesUI';

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
          <MessageUI messageType={this.props.messageType} modalMessage={this.props.modalMessage}/>
          <div onClick={this.props.modalOKtoggleButton ? this.props.ModalHandle : this.props.ModalHandleDuringLogginOut}>
          <Button/>  
          </div>
          <div onClick={this.props.cancelModalHandleDuringLogginOut}>
          {!this.props.modalOKtoggleButton ? <ButtonLogOut buttonMessage="CANCEL"/> : null}
          </div>
          </div>
          <Backdrop />  
          </div>
          );
    }
}


export default modal;