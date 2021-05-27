import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import TextField from './TEXTFIELDMID';
import Chat from './chat';
import CryptoJS from "react-native-crypto-js";
import Divider from '@material-ui/core/Divider';

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

          var Decryptedemail = CryptoJS.AES.decrypt(item['email'],props.password);
          var decryptedEemail=Decryptedemail.toString(CryptoJS.enc.Utf8);

          var DecryptedcreatedAt = CryptoJS.AES.decrypt(item['createdAt'],props.password);
          var decryptedCcreatedAt=DecryptedcreatedAt.toString(CryptoJS.enc.Utf8);

          var DecrypteddateOfSignUp = CryptoJS.AES.decrypt(item['dateOfSignUp'],props.password);
          var decryptedDdateOfSignUp=DecrypteddateOfSignUp.toString(CryptoJS.enc.Utf8);

        return <Chat time={decryptedCcreatedAt} text={decryptedText} likes={item['likes']} dislikes={item['dislikes']} emailForLikesAndDislikes={props.email}
        color={props.email === decryptedEemail ? "primary" : "secondary"} profileModalHandler={props.profileModalHandler} email={decryptedEemail} propsEmail={props.email}
        password={props.password} dateOfSignUp={decryptedDdateOfSignUp} key={item['exactTimeToSort']} exactTimeToSort={item['exactTimeToSort']} deleteChatClickHandlerChannel={props.deleteChatClickHandlerChannel}/>;
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
