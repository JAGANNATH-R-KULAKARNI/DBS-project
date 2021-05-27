import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ButtonOK from './Button';
import useFitText from './useFitText';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  const { fontSize, ref } = useFitText();


  const DATEOFSIGNUP="Joined on  "+props.dateOfSignUp;
  const SUBHEADER=(
    <div>
{DATEOFSIGNUP}
<br />
{props.location}
    </div>
  );
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.label[0]}
          </Avatar>
        }
        title={props.label}
        subheader={SUBHEADER}
      />
     {props.url !== '' ?  <CardMedia
        className={classes.media}
        image={props.url}
        title="info"
      /> : null
     }
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <div ref={ref} style={{ fontSize}}>
        {props.info}
        </div>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        <ButtonOK  profileModalHandlerAfterOKClicked={props.profileModalHandlerAfterOKClicked}
        />
        </Typography>
      </CardContent>
    </Card>
  );
}
