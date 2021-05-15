import React, { Component } from 'react';
import Classes from '../../Modal/Modal.css';
import Backdrop from '../../BackDrop/BackDrop';
import TextField from '../textFieldForProfile';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
          <div style={{paddingLeft : '10px'}}>
          <ButtonGroup disableElevation variant="contained" color="primary">
      <Button  onClick={this.props.closeEditModal}>Discard</Button>
      <Button>Save</Button>
    </ButtonGroup>
    </div>
    
          </div>
          <Backdrop />  
          </div>
          );
    }
}


export default modal;