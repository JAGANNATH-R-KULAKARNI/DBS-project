import React,{Component} from 'react';
import LogOutButton from '../LogOut/LogOutButton';
import HomePageUI from './HomePageUI';
import Body from './Body2/body2';

class Home extends Component
{

    render()
    {
        const logOutButton= <LogOutButton buttonMessage="LogOut"/>;
        const body=<Body email={this.props.email}/>
        return (
            <div>
                <HomePageUI logOutHandle={this.props.logOutHandle} logOutButton={logOutButton} body={body} />
             </div>   
        );
    }
};

export default Home;