import React, { Component } from 'react';
import In from '../SignInPage/SignInPage';
import Up from '../SignUpPage/SignUpPage';
import Home from '../HomePage/HomePage';

class Layout extends Component
{
    
    render()
    {
        return(
            <div>
                <In />
            </div>
        );
    }
}

export default Layout;