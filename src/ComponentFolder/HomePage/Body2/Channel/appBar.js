import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import TextField from './textField';
import Send from './sendButton';
import Chat from './chat';


const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));



export default function BottomAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Chat here
        </Typography>
        <List className={classes.list}>
          <div style={{padding : "10px 10px 10px 10px"}}>
        {
         props.finalChats ? props.finalChats.map((item)=>{
         return <Chat label={item['username']} name={props.email === item['email'] ? "You" :item['username']} time={item['createdAt'] } text={item['text']} 
         color={props.email === item['email'] ? "primary" : "secondary"} profileModalHandler={props.profileModalHandler} email={item['email']}
          info={item['info']} dateOfSignUp={item['dateOfSignUp']} exactTimeToSort={item['exactTimeToSort']} deleteChatClickHandlerChannel={props.deleteChatClickHandlerChannel}/>;
         }) : null
       }
       </div>
        </List>
        
        <TextField textFieldHandle={props.textFieldHandle}/>
              <Send sendStatus={props.sendStatus} handleClick={props.handleClick}/>
              
      </Paper>
     
    </React.Fragment>
  );
}
/*
  {props.finalChats ? props.finalChats.map((item) => (
            <React.Fragment key={item['exactTimeToSort']}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt={item['username']} src={item['username']} />
                </ListItemAvatar>
                <ListItemText primary={item['text']} secondary={"~"+item['username']} />
                <p>{item['createdAt']}</p>
              </ListItem>
            </React.Fragment>
          )) : null}
            {
         props.finalChats ? props.finalChats.map((item)=>{
         return <Chat name={item['username']} time={item['createdAt'] } text={item['text']}/>;
         }) : null
       }
*/