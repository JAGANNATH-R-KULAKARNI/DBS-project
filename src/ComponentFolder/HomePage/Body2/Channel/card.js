import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router,Link} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';

export default function RecipeReviewCard(props) {


  const chatSize=useMediaQuery('max-width: 720px');

   const likeOrDislike=(
   
   <div style={{fontSize: "18px"}}>
     {props.likes}
   &nbsp;
    <ThumbUpRoundedIcon style={{color : props.likeStatus ? 'black' : null}} onClick={props.likeHandler}/>
    &nbsp;
    <ThumbDownRoundedIcon style={{color : props.dislikeStatus ? 'black' : null}} onClick={props.dislikeHandler}/>
    &nbsp;
    {props.dislikes}
    </div>

   );
  return (
    <Router>
      <Divider/>
    <Card style={{
        maxWidth: chatSize ? '100%' : '720px',
        backgroundColor : props.color === 'primary' ? '#E01E5A' : '#FFFFFF',
        elevation : '10'
      }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor : props.color === 'primary' ? '#FF0000' : '#FF0000'}}
          src={props.url}>
            {props.avatar[0]}
          </Avatar>
        }
        action={
          props.encryptionIconANDdeleteIcon
        }
        title={ <Link onClick={(dummy,Email=props.email,Name=props.avatar,DateOfSignUp=props.dateOfSignUp,Info=props.info,Location=props.location,Url=props.url) =>
            props.profileModalHandler(Name,Email,DateOfSignUp,Info,Location,Url)}>~{props.name}</Link>}
        subheader={props.time}
      />
     <CardContent>
      <Typography variant="body2" color="black" component="p">
         {props.text}
         <IconButton
          style={{float : 'right'}}
          aria-label="Like or Dislike"
        >
        
          {props.isDislikesStatusAvailable && props.isLikesStatusAvailable ? likeOrDislike : null}
      </IconButton>
       
       </Typography>
       </CardContent>
    </Card>
    </Router>
  );
}
