import React,{Component} from 'react';
import HomePageUI from './HomePageUI';
import Body from './Body2/body2';


class Home extends Component
{

    render()
    {
        const body=<Body email={this.props.email} password={this.props.password}/>;
        const homepage=<HomePageUI logOutHandle={this.props.logOutHandle} body={body} email={this.props.email} password={this.props.password}/>;

        return (
            <div>
               {homepage}
             </div>   
        );
    }
};

export default Home;