import React, { Component } from 'react';
import Classes from './Channel/Modal.css';
import Backdrop from '../../BackDrop/BackDrop';
import OkButton from './buttonForbody2';
import Alert from './Body2Alert';

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
         <Alert message={this.props.message}/>
         <OkButton color="secondary" TYPE="Ok" errorModalMessageCloseHandle={this.props.errorModalMessageCloseHandle}/> 
           </div>
          <Backdrop />  
          </div>
          );
    }
}


export default modal;