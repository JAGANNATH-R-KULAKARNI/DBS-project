import React, { Component } from 'react';
import Classes from './securityModal.css';
import Backdrop from '../../BackDrop/BackDrop';
import SecurityCard from '../securityCard';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SecurityIcon from '@material-ui/icons/Security';

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
          
          <SecurityCard closeEditModal={this.props.closeEditModal}/>
          </div>
          <Backdrop />  
          </div>
          );
    }
}


export default modal;