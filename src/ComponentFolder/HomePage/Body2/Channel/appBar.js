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
import TextField from './TEXTFIELDMID';
import Send from './sendButton';
import Chat from './chat';
import CryptoJS from "react-native-crypto-js";
import Divider from '@material-ui/core/Divider';
import Footer from './footer';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
  const position=useMediaQuery('max-width: 720px');

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square style={{paddingBottom: 50}}>
        <br />
        <br />
        <br />
        <Typography className={classes.text} variant="h5" gutterBottom>
          Chat here
        </Typography>
       < Divider/>
        <List className={classes.list}>
          <div >
        {
         props.finalChats ? props.finalChats.map((item)=>{
          var DecryptedText = CryptoJS.AES.decrypt(item['text'],props.password);
          var decryptedText=DecryptedText.toString(CryptoJS.enc.Utf8);

          var Decryptedusername = CryptoJS.AES.decrypt(item['username'],props.password);
          var decryptedUusername=Decryptedusername.toString(CryptoJS.enc.Utf8);

          var Decryptedemail = CryptoJS.AES.decrypt(item['email'],props.password);
          var decryptedEemail=Decryptedemail.toString(CryptoJS.enc.Utf8);

          var DecryptedcreatedAt = CryptoJS.AES.decrypt(item['createdAt'],props.password);
          var decryptedCcreatedAt=DecryptedcreatedAt.toString(CryptoJS.enc.Utf8);

          var Decryptedinfo = CryptoJS.AES.decrypt(item['info'],props.password);
          var decryptedIinfo=Decryptedinfo.toString(CryptoJS.enc.Utf8);

          var DecrypteddateOfSignUp = CryptoJS.AES.decrypt(item['dateOfSignUp'],props.password);
          var decryptedDdateOfSignUp=DecrypteddateOfSignUp.toString(CryptoJS.enc.Utf8);

         return <Chat NameForAvatar={decryptedUusername} label={decryptedUusername} name={props.email === decryptedEemail ? "You" : decryptedUusername} time={decryptedCcreatedAt} text={decryptedText} 
         color={props.email === decryptedEemail ? "primary" : "secondary"} profileModalHandler={props.profileModalHandler} email={decryptedEemail}
          info={decryptedIinfo} dateOfSignUp={decryptedDdateOfSignUp} key={item['exactTimeToSort']} exactTimeToSort={item['exactTimeToSort']} deleteChatClickHandlerChannel={props.deleteChatClickHandlerChannel}/>;
         }) : null
       }
       </div>
       < Divider/>
        </List>
        <div/>
        <div>
        <TextField textFieldHandle={props.textFieldHandle}  textFieldnull={props.textFieldnull}
        sendStatus={props.sendStatus} handleClick={props.handleClick}/>
       </div>
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