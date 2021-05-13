import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SecurityIcon from '@material-ui/icons/Security';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
         <SecurityIcon/> Secuity
        </Typography>
        <Typography variant="body2" component="p">
          This app uses crypto.js library ,which is a JavaScript implementations of standard and secure cryptographic algorithms. 
          This means 
          {'"Connect"'} secures your conversations with End-To-End encryption. Your messages and 
          updates stay between you and the people you choose. Connect uses Firebase as its backend.Not Even Firebase
          nor me who created this app can read to them. 
          <br />
          -Jagannath R Kulakarni
        </Typography>
      </CardContent>
    </Card>
  );
}
