import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
     
      { props.DP ? <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            {"Edit your "+props.TYPE}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.TEXTFIELD}
          </Typography>
        </CardContent>
    
      <CardActions>
        <Button size="small" color="secondary" onClick={props.closeModal}>
          Discard
        </Button>
        <Button size="small" color="primary" onClick={props.editHandler}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
}
