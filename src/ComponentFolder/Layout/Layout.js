import React,{Component} from 'react';
import SignInPage from '../SignInPage/SignInPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import fire from '../../Firebase/firebase';
import Home from '../HomePage/HomePage';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
//import axios from 'axios';

class Layout extends Component
{
    constructor()
    {
        super();
        this.state={
            homePage : false,
            isSigninpage : true,
            username : '',
            email : '',
            password : '',
            info : '',
            loader : false,
            Modal : false,
            modalMessage : '',
            modalOKtoggleButton : true,
            signUpPage : false,
            messageType : ''
        };

        this.shiftChangeHandle=this.shiftChangeHandle.bind(this);
        this.handleSignUp=this.handleSignUp.bind(this);
        this.handleSignIn=this.handleSignIn.bind(this);
        this.signUpStateChangeHandle=this.signUpStateChangeHandle.bind(this);
        this.signInStateChangeHandle=this.signInStateChangeHandle.bind(this);
        this.ModalHandle=this.ModalHandle.bind(this);
        this.logOutHandle=this.logOutHandle.bind(this);
        this.ModalHandleDuringLogginOut=this.ModalHandleDuringLogginOut.bind(this);
        this.cancelModalHandleDuringLogginOut=this.cancelModalHandleDuringLogginOut.bind(this);
        this.forgotPasswordHandle=this.forgotPasswordHandle.bind(this);
    }
    
    forgotPasswordHandle()
    {
      this.setState({
    
        Modal : true,
        modalMessage : 'I cannot help sorry , pls try to remember  :)',
        messageType : 'warning'
      })
    }

    logOutHandle()
    {
     this.setState({
        Modal : true,
        messageType : 'info',
        modalMessage : 'Do you want to logOut vro :(',
     })
    }

    ModalHandle(){
        if(this.state.signUpPage || !this.state.homePage)
        {
            this.setState({
                Modal : false});
        }
        else
        {
      this.setState({
          Modal : false,
          modalOKtoggleButton : !this.state.modalOKtoggleButton
        });
    }
    }

    cancelModalHandleDuringLogginOut()
    {
        this.setState({
            Modal : false
          });
    }

    ModalHandleDuringLogginOut()
    {
        this.setState({loader : true})
        setTimeout(() => {
            this.setState({
                loader : false,  
                homePage : false,
                isSigninpage : true,
                messageType : 'success',
                modalMessage : 'You are successfully signed out Vro',
                modalOKtoggleButton : !this.state.modalOKtoggleButton,
                Modal : true,
                email : '',
                password : '',
        
              });
          }, 700);
    }
    signUpStateChangeHandle(e)
    {
     this.setState({[e.target.name] : e.target.value});
    }

    signInStateChangeHandle(e)
    {
     this.setState({[e.target.name] : e.target.value});
    }

    handleSignIn(e)
    {
        e.preventDefault();
        this.setState({loader : true});
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((u) =>{
            console.log(u);
            this.setState({
                loader : false,
                isSigninpage : false,
                messageType : 'success',
                modalMessage : 'You are successfully signed in Vro :)',
                Modal : true,
                homePage : true
            });

         })
        .catch((err) =>{
            this.setState({
                loader : false,
                isSigninpage : true,
                messageType : 'error',
                modalMessage : err['code']+"    , Try again vro :(",
                Modal : true,
                homePage : false
            });
            
        });
    }

    handleSignUp(e)
    {
        e.preventDefault();
        var today = new Date(),
        time = today.getDate()+'/'+today.getMonth()+'/'+today.getFullYear();

        this.setState({loader : true})
        setTimeout(() => {
            this.setState({loader : false});
          }, 300);
       fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
       .then((u) =>{
        console.log(u);
        fire.firestore().collection("users").doc(this.state.email).set({
            username : this.state.username,
            info : this.state.info,
            dateOfSignUp : time
        }).then(() => {
            console.log("Document successfully written!");
            this.setState({
                isSigninpage : true,
                messageType : 'success',
                modalMessage : 'You are successfully signed Up Vro :) Now Sign In again',
                Modal : true,
                signUpPage : false
            }); 
        })
        .catch((err)=>{
            console.log(err);
            this.setState({
                loader : false,
                messageType : 'error',
                modalMessage : "Something wrong happended in uploading username to firebase firestore",
                Modal : true
            });
        });
    

     })
       .catch((err) =>{
           console.log(err);
           this.setState({
            loader : false,
            messageType : 'error',
            modalMessage : err['code']+"    , Try again vro :(",
            Modal : true
        });
       });
    }

    shiftChangeHandle()
    {
        this.setState({loader : true})
        setTimeout(() => {
            this.setState({loader : false});
          }, 700);
     this.setState({
         isSigninpage : !this.state.isSigninpage,
         email : '',
         password : '',
         signUpPage : !this.state.signUpPage
        });

    }

    render()
    {
        
        const LoginPage=(this.state.isSigninpage ? 
            <SignInPage 
            shiftToSignUp={this.shiftChangeHandle}
            signInStateChangeHandle={this.signInStateChangeHandle}
            handleSignIn={this.handleSignIn}
            forgotPasswordHandle={this.forgotPasswordHandle}
            /> : 
            <SignUpPage 
            shiftToSignIn={this.shiftChangeHandle} 
            handleSignUp={this.handleSignUp}
            signUpStateChangeHandle={this.signUpStateChangeHandle}
            />);

            const LOADER= <Loader />
            const homePage=(this.state.homePage ? 
            <Home logOutHandle={this.logOutHandle} email={this.state.email}/> : LoginPage);

        return (
            <div>
                {this.state.Modal ? 
                <Modal ModalHandle={this.ModalHandle} 
                modalMessage={this.state.modalMessage} 
                modalOKtoggleButton={this.state.modalOKtoggleButton}
                cancelModalHandleDuringLogginOut={this.cancelModalHandleDuringLogginOut}
                ModalHandleDuringLogginOut={this.ModalHandleDuringLogginOut}
                messageType={this.state.messageType}
                /> : null}
                {this.state.loader ? LOADER : homePage}
            </div>

        );
    }
};

export default Layout;