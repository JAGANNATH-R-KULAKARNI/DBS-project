import React,{Component} from 'react';
import SignInPage from '../SignInPage/SignInPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import fire from '../../Firebase/firebase';
import Home from '../HomePage/HomePage';
import Loader from '../Loader/Loader';

class Layout extends Component
{
    constructor()
    {
        super();
        this.state={
            homePage : false,
            isSigninpage : true,
            email : '',
            password : '',
            loader : false
        };

        this.shiftChangeHandle=this.shiftChangeHandle.bind(this);
        this.handleSignUp=this.handleSignUp.bind(this);
        this.handleSignIn=this.handleSignIn.bind(this);
        this.signUpStateChangeHandle=this.signUpStateChangeHandle.bind(this);
        this.signInStateChangeHandle=this.signInStateChangeHandle.bind(this);
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
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((u) =>{
            console.log(u);
            alert("Successfully signed In vro :)");
            this.setState({homePage : true});
         })
        .catch((err) =>{
            alert(err['code']+"     Try again vro :(");
        });
    }

    handleSignUp(e)
    {
        e.preventDefault();
        
       fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
       .then((u) =>{
        console.log(u);
        alert("Successfully signed up vro :)");
        this.setState({isSigninpage : true});
     })
       .catch((err) =>{
           console.log(err);
       });
    }

    shiftChangeHandle()
    {
        this.setState({loader : true})
        setTimeout(() => {
            this.setState({loader : false});
          }, 300);
     this.setState({
         isSigninpage : !this.state.isSigninpage,
         email : '',
         password : ''
        });

    }

    render()
    {
        
        const LoginPage=(this.state.isSigninpage ? 
            <SignInPage 
            shiftToSignUp={this.shiftChangeHandle}
            signInStateChangeHandle={this.signInStateChangeHandle}
            handleSignIn={this.handleSignIn}
            /> : 
            <SignUpPage 
            shiftToSignIn={this.shiftChangeHandle} 
            handleSignUp={this.handleSignUp}
            signUpStateChangeHandle={this.signUpStateChangeHandle}
            />);

            const LOADER= <Loader />
            const homePage=(this.state.homePage ? <Home /> : LoginPage);

        return (
            <div>
                {this.state.loader ? LOADER : homePage}
            </div>

        );
    }
};

export default Layout;