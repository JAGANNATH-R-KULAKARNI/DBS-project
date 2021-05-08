import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Avatar from '@material-ui/core/Avatar';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';

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

  return (
    <div>
        <Router>
        <Button variant="contained" color={props.color}>
            <div style={{paddingRight : "10px"}}>
        <Avatar alt={props.label} src="/static/images/avatar/3.jpg" />
        </div>
        <div style={{ fontFamily : " LucidaConsole  CourierNew Cursive"}}>
  {props.text}
  </div>
    </Button>
   { props.color === 'primary' ? <Link onClick={(e)=>props.deleteChatClickHandlerChannel(props.exactTimeToSort)}>
   <Tooltip title="Delete">
   <IconButton aria-label="delete">
     <DeleteIcon />
     </IconButton>
     </Tooltip>
     </Link> : null}
 <br />
    <Button color="primary">{props.time}</Button>
   <Link onClick={(dummy,Email=props.email,Name=props.label,DateOfSignUp=props.dateOfSignUp,Info=props.info) =>
    props.profileModalHandler(Name,Email,DateOfSignUp,Info)}>~{props.name}</Link>
    <br />
    <br />
    </Router>
        </div>
    
  );
}
