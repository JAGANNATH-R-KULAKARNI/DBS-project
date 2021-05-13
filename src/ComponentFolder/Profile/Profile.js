import React,{Component} from 'react';
import Card from './cardForProfile';
import CardForImage from './cardForImage';
import EditIcon from '@material-ui/icons/Edit';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import SecurityIcon from '@material-ui/icons/Security';
import Button from '@material-ui/core/Button';

const Profile = () =>
{

       const image=( <div style={{
        textAlign: 'center'
        }}>           
<img src='https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="Profile Image"
style={{
    objectFit : 'contain'
    }}/>
</div>);

     const MORE=(<Button color="secondary" size="small">
     More
   </Button>
 );
        return (
            <div style={{textAlign : 'center'}}>
                <br />
                <br />
                <br />
                <br />
         <CardForImage item={<AddPhotoAlternateIcon />}/>
         <br />
                <br />
                <br />
         <Card type={<EditIcon />} item="Jagannath R Kulakarni"/>
                <br />
                <br />
         <Card type={<EditIcon />} item="#Awesome"/>
                <br />
                <br />
         <Card type={<EditIcon />} item="Mysore"/>
                <br />
                <br />
        <Card type={MORE} item='Security'/>
        <br />
                <br />
                
            </div>
        );
    
};

export default Profile;