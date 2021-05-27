import React from 'react';
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
    location : '',
    dateOfSignUp : null,
    OKNoModalForDELETEStatus : false,
    deleteChatID : null,
    textFieldnull : false,
    url : ''
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
     this.setState({
      OKNoModalForDELETEStatus : true,
      deleteChatID : id
     })
  }

  YesDeleteChatClickHandlerChannel()
  {
this.props.deleteChatHandler(this.state.deleteChatID);
this.setState({
  OKNoModalForDELETEStatus : false,
  deleteChatID : null
});
  }

  NoDeleteChatClickHandlerChannel()
  {
this.setState({
  OKNoModalForDELETEStatus : false,
  deleteChatID : null
});
  }

  profileModalHandlerAfterOKClicked()
  {
  this.setState({profileStatus : false});
  }

  profileModalHandler(name,email,date,info,location,url)
  {
  this.setState({
    profileStatus : true,
    name : name,
    email : email,
    info : info,
    location : location,
    dateOfSignUp : date,
    url : url
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
     url={this.state.url} location={this.state.location} email={this.state.email} name={this.state.name} info={this.state.info} dateOfSignUp={this.state.dateOfSignUp}
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
      textFieldnull={this.state.textFieldnull}/>
      
     
    </div>
  );
  }
};

export default SimpleContainer;
