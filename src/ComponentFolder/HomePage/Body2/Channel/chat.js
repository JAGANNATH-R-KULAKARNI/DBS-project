import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Avatar from '@material-ui/core/Avatar';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import HttpsIcon from '@material-ui/icons/Https';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Card from './card';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


export default function ButtonSizes(props) {
  const classes = useStyles();

 const deleteIcon=( props.color === 'primary' ? <Link onClick={(e)=>props.deleteChatClickHandlerChannel(props.exactTimeToSort)}>
 <Tooltip title="Delete">
 <IconButton aria-label="delete">
   <DeleteIcon />
   </IconButton>
   </Tooltip>
   </Link> : null); 

 const encryptionIconANDdeleteIcon=(<div>
                     {deleteIcon}
                    <Tooltip title="End-To-End Encrypted">
                     <IconButton aria-label="End-To-End Encrypted">
                       <HttpsIcon />
                       </IconButton>
                       </Tooltip> 
                       </div>);

  return (
    <div>
        <Router>
       
   <Card encryptionIconANDdeleteIcon={encryptionIconANDdeleteIcon} lable={props.label} text={props.text}
     deleteChatClickHandlerChannel={props.deleteChatClickHandlerChannel} color={props.color}
     exactTimeToSort={props.exactTimeToSort}
     name={props.name} email={props.email} dateOfSignUp={props.dateOfSignUp}
     info={props.info} profileModalHandler={props.profileModalHandler} time={props.time}
     avatar={props.NameForAvatar}/>
    {/*<div>
        <Button variant="contained" color={props.color}>
        <Tooltip title="End-To-End Encrypted">
    <IconButton aria-label="End-To-End Encrypted">
     <HttpsIcon />
     </IconButton>
     </Tooltip>
            <div style={{paddingRight : "10px"}}>
        <Avatar alt={props.label} src="/static/images/avatar/3.jpg" />
        </div>
        <div style={{ fontFamily : " LucidaConsole  CourierNew Cursive"}}>
  {props.text}
  </div>
  
  { props.color === 'primary' ? <Link onClick={(e)=>props.deleteChatClickHandlerChannel(props.exactTimeToSort)}>
   <Tooltip title="Delete">
   <IconButton aria-label="delete">
     <DeleteIcon />
     </IconButton>
     </Tooltip>
     </Link> : null}
    </Button>
 
    </div>
 <br />
    <Button color="primary">{props.time}</Button>
   <Link onClick={(dummy,Email=props.email,Name=props.label,DateOfSignUp=props.dateOfSignUp,Info=props.info) =>
    props.profileModalHandler(Name,Email,DateOfSignUp,Info)}>~{props.name}</Link>
    <Divider/>
    */}
    </Router>
        </div>
    
  );
}
