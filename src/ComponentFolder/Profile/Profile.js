import React,{Component} from 'react';
import Card from './cardForProfile';

class Profile extends Component
{
    
    render()
    {
       const image=( <div style={{
        textAlign: 'center'
        }}>           
<img src='https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="Profile Image"
style={{
height: '100%',
width: '100%',
objectFit : 'contain'
}}/>
</div>);
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
         <Card type="Profile Image" item={image}/>
         <Card type="userName"item="Jagannath R Kulakarni"/>
         <Card type="Bio"item="#Awesome"/>
         <Card type="Place"item="Mysore"/>
            </div>
        );
    }
};

export default Profile;