import React,{Component} from 'react';
import firebase from '../../Firebase/firebase';
import {provider} from '../../Firebase/firebase';
import Home from '../HomePage/HomePage';
import SignInPageUI from './SignInPageUI';

class SignIn extends Component
{
/*  constructor()
    {
       super();
       this.state={
           signedIn : false
       }
       this.handleSignIn=this.handleSignIn.bind(this);
    }

  handleSignIn()
  {
    const auth = firebase.auth();
  //  var provider = new firebase.auth.GoogleAuthProvider()

      auth.signInWithPopup(provider).then((res) => {
        console.log(res.user);
        this.setState({signedIn : true});
        
      }).catch((error) => {
        console.log(error.message)
      })
  }*/

  render()
  {
    return (

<SignInPageUI handleSignIn={this.handleSignIn}></SignInPageUI>
    );
  }
};

export default SignIn;