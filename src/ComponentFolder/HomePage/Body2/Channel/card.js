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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Router>
      <Divider/>
    <Card style={{
        maxWidth: chatSize ? '100%' : '820px',
        backgroundColor : props.color === 'primary' ? '#6495ED' : '#FFFFFF',
        elevation : '10'
      }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor : props.color === 'primary' ? '#6A5ACD' : '#6A5ACD'}}>
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
      <Typography variant="body2" color="textSecondary" component="p">
         {props.text}
       </Typography>
       </CardContent>
    </Card>
    <Divider/>
    </Router>
  );
}
