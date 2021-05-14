import React, { Component } from 'react';
import Classes from '../../Modal/Modal.css';
import Backdrop from '../../BackDrop/BackDrop';
import TextField from '../textFieldForProfile';
import Button from '@material-ui/core/Button';

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
          
          <TextField editModalTextChangeHandler={this.props.editModalTextChangeHandler} TYPE="Dp"/>
          <br />
          <div style={{width : '40%',paddingLeft : '5%'}}>
          <Button variant="outlined" color="secondary" onClick={this.props.closeEditModal}>
             Discard
           </Button>
           </div>
           <br />
           <div style={{width : '40%',paddingLeft : '5%'}}>
           <Button variant="outlined" color="primary">
             Save
           </Button>
           </div>
          </div>
          <Backdrop />  
          </div>
          );
    }
}


export default modal;