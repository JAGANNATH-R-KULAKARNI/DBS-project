import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    backgroundColor : '#98FB98',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const chatSize=useMediaQuery('max-width: 720px');
  //const 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Router>
      <Divider/>
    <Card style={{
        maxWidth: chatSize ? '100%' : '720px',
        backgroundColor : props.color === 'primary' ? '#00BFFF' : '#FFFFFF',
        elevation : '10'
      }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor : props.color === 'primary' ? '#FF0000' : '#FF0000'}}
          src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'>
            {props.avatar[0]}
          </Avatar>
        }
        action={
          props.encryptionIconANDdeleteIcon
        }
        title={ <Link onClick={(dummy,Email=props.email,Name=props.avatar,DateOfSignUp=props.dateOfSignUp,Info=props.info) =>
            props.profileModalHandler(Name,Email,DateOfSignUp,Info)}>~{props.name}</Link>}
        subheader={props.time}
      />
     <CardContent>
      <Typography variant="body2" color="black" component="p">
         {props.text}
         <Tooltip title="Comments">
         <IconButton
          style={{float : 'right'}}
          onClick={handleExpandClick}
          aria-label="Comments"
        >
          <InsertCommentIcon />
        </IconButton>
        </Tooltip>
       </Typography>
       </CardContent>
    </Card>
    </Router>
  );
}
