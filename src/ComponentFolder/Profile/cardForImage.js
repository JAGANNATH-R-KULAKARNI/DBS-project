import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CARD from './cardForProfile';

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

       { props.item !== '' ? <CardMedia
          className={classes.media}
          image={props.item}
          title="Contemplative Reptile"
        /> : null}
            <CardActionArea>
        <CARD type={props.type} item={props.item === '' ? 'Upload Dp' : ''} />
      </CardActionArea>
    
    </Card>
  );
}