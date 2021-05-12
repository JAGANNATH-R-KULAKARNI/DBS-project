import React,{Component} from 'react';
import LogOutButton from '../LogOut/LogOutButton';
import HomePageUI from './HomePageUI';
import Body from './Body2/body2';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

class Home extends Component
{

    render()
    {
       // const logOutButton= <LogOutButton buttonMessage="LogOut"/>;
        const body=<Body email={this.props.email} password={this.props.password}/>;
        const homepage=<HomePageUI logOutHandle={this.props.logOutHandle} body={body} />;

        return (
            <div>
               {homepage}
             </div>   
        );
    }
};

export default Home;