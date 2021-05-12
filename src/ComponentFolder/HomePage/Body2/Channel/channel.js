import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './appBar';
import Modal from '../Profile/ProfileElements/Modal';
import OKNoModal from './Modal';

class SimpleContainer extends React.Component {

  constructor()
  {
  super();
  this.state={
    text : '',
    sendStatus : false,
    profileStatus : false,
    name : '',
    email : '',
    info : '',
    dateOfSignUp : null,
    OKNoModalForDELETEStatus : false,
    deleteChatID : null,
    textFieldnull : false
  };

   this.handleClick=this.handleClick.bind(this);
   this.textFieldHandle=this.textFieldHandle.bind(this);
   this.profileModalHandler=this.profileModalHandler.bind(this);
   this.profileModalHandlerAfterOKClicked=this.profileModalHandlerAfterOKClicked.bind(this);
   this.deleteChatClickHandlerChannel=this.deleteChatClickHandlerChannel.bind(this);
   this.YesDeleteChatClickHandlerChannel=this.YesDeleteChatClickHandlerChannel.bind(this);
   this.NoDeleteChatClickHandlerChannel=this.NoDeleteChatClickHandlerChannel.bind(this);
  }

  deleteChatClickHandlerChannel(id)
  {
    console.log('deleteChatClickHandlerChannel',id);
     this.setState({
      OKNoModalForDELETEStatus : true,
      deleteChatID : id
     })
  }

  YesDeleteChatClickHandlerChannel()
  {
console.log("yes");
this.props.deleteChatHandler(this.state.deleteChatID);
this.setState({
  OKNoModalForDELETEStatus : false,
  deleteChatID : null
});
  }

  NoDeleteChatClickHandlerChannel()
  {
console.log("No");
this.setState({
  OKNoModalForDELETEStatus : false,
  deleteChatID : null
});
  }

  profileModalHandlerAfterOKClicked()
  {
  this.setState({profileStatus : false});
  }

  profileModalHandler(name,email,date,info)
  {
      console.log("profileModalHandler",name,email);
  this.setState({
    profileStatus : true,
    name : name,
    email : email,
    info : info,
    dateOfSignUp : date
  });
  }
    textFieldHandle(e)
    {
    this.setState({
        text : e.target.value,
        sendStatus : e.target.value.length === 0 ? false : true,
    })

    }
  

  handleClick()
  {
    const TEXT=this.state.text;
    this.setState({
      text : '',
      textFieldnull : !this.state.textFieldnull
    });
   this.props.handleClick(TEXT);
  
  }

  render()
  {
  return (
    <div>

      {this.state.profileStatus ? <Modal 
      profileModalHandlerAfterOKClicked={this.profileModalHandlerAfterOKClicked}
      email={this.state.email} name={this.state.name} info={this.state.info} dateOfSignUp={this.state.dateOfSignUp}
      /> : null}
          {this.state.OKNoModalForDELETEStatus ? <OKNoModal 
          YesDeleteChatClickHandlerChannel={this.YesDeleteChatClickHandlerChannel} NoDeleteChatClickHandlerChannel={this.NoDeleteChatClickHandlerChannel}
          /> : null}
     <AppBar finalChats={this.props.finalChats} 
      textFieldHandle={this.textFieldHandle}
      sendStatus={this.state.sendStatus}
      handleClick={this.handleClick}
      email={this.props.email}
      profileModalHandler={this.profileModalHandler}
      deleteChatClickHandlerChannel={this.deleteChatClickHandlerChannel}
      password={this.props.password}
      textFieldnull={this.state. textFieldnull}
      />
      
     
    </div>
  );
  }
};

export default SimpleContainer;
/*
{this.props.finalChats}
     
     
           
  
     
<TextField textFieldHandle={this.textFieldHandle}/>
<Send sendStatus={this.state.sendStatus} handleClick={this.handleClick}/>
*/