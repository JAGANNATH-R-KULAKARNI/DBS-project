import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ButtonForEdit from './buttonForEditModal';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.openEditModal();
  };

  const handleCloseForSave = ()=>{
    setOpen(false);
    props.saveEditedTexts();
  }

  const handleCloseForDelete = () =>{
    setOpen(false);
    props.deletePlayerHandler();
  }
  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
          {props.status ?  <Button color="secondary"  onClick={handleCloseForDelete}> Delete this Player Permenentaly</Button> : null}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCloseForSave}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {props.status ? null :
          <div>
        <ListItem>
            <ButtonForEdit label='Name' name='name' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          </div>
}
          <ListItem>
            <ButtonForEdit label='Born' name='Born' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Birth Place' name='Birth_Place' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Age' name='Age' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Country' name='Country' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Cricket Rankings' name='Cricket_Rankings' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='T20 rankings' name='T20_rankings' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='ODI rankings' name='ODI_rankings' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Test rankings' name='Test_rankings' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Batting style' name='Batting_style' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Bowling style' name='Bowling_style' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Jersey Number' name='Jersey_Number' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Total runs' name='Total_runs' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Total wickets' name='Total_wickets' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Photo' name='image' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
        </List>
      </Dialog>
    </div>
  );
}
