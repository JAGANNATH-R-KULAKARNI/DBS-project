import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SecurityIcon from '@material-ui/icons/Security';
import useFitText from '../HomePage/Body2/Profile/ProfileElements/useFitText';

const useStyles = makeStyles({
  root: {
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

export default function OutlinedCard(props) {
  const classes = useStyles();
  const { fontSize, ref } = useFitText();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
         <SecurityIcon/> Security
        </Typography>
        <div ref={ref} style={{ fontSize, maxHeight : '400px'}}>
          <h6>
         {'"'} This app uses a cryptographic library ,which is a JavaScript implementations of standard and secure cryptographic algorithms. 
          This means Connect secures your conversations with End-To-End encryption. Your messages and updates stays inside the app. Connect uses Firebase as its backend.Not Even Firebase
          nor me who created this app can read to them.{'"'} </h6>
          -Jagannath R Kulakarni
        </div>
        <br />
        <Button variant="outlined" color="secondary" onClick={props.closeEditModal} style={{float : 'right',width : '10%'}}>
             Ok
           </Button>
           <br />
      </CardContent>
    </Card>
  );
}
