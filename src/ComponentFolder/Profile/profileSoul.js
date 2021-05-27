import React from 'react';
import Card from './cardForProfile';
import CardForImage from './cardForImage';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

const Profile = (props) =>
{
     const MORE=(<Button color="secondary" size="small" onClick={props.openEditModalSecurity}>
     More</Button>);
     
        return (
            <div style={{textAlign : 'center'}}>
                <br />
                <br />
                <br />
                <br />
         <CardForImage type={<Button onClick={props.openEditModalDp}><EditIcon/></Button>} item={props.updatedDp}/>
         <br />
                <br />
                <br />
         <Card type={<Button onClick={props.openEditModalUsername}><EditIcon/></Button>} item={props.updatedUsername} />
                <br />
                <br />
         <Card type={<Button onClick={props.openEditModalBio}><EditIcon/></Button>}  item={props.updatedBio} />
                <br />
                <br />
         <Card type={<Button onClick={props.openEditModalLocation}><EditIcon/></Button>} item={props.updatedLocation === '' ? 'Choose your location' : props.updatedLocation} />
                <br />
                <br />
        <Card type={MORE} item='Security'/>
        <br />
                <br />
                
            </div>
        );
    
};

export default Profile;