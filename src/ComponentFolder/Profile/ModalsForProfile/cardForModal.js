import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
  
  const CARDMEDIA=( props.updatedDp !== '' ? <CardMedia
  className={classes.media}
  image={props.updatedDp}
  title="Contemplative Reptile"
/> : null);

  return (
    <Card className={classes.root}>
     
      { props.DP ? CARDMEDIA : null}
        <CardContent>
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