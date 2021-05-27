import React, { Component } from 'react';
import Classes from './securityModal.css';
import Backdrop from '../../BackDrop/BackDrop';
import SecurityCard from '../securityCard';

class modal extends Component
{
   
    render()
    {
        return ( 
          <div>
            
            <div className={Classes.Modal}
               style={{
                   transform : 'translateY(0)' ,
                   opacity :'1' ,
                   objectFit : 'contain'
               }}>
          
          <SecurityCard closeEditModal={this.props.closeEditModal}/>
          </div>
          <Backdrop />  
          </div>
          );
    }
}


export default modal;
