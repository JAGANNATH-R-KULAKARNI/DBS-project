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
import Grid from '@material-ui/core/Grid';

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
    props.closeHandler();
  };

  const handleCloseForSave = ()=>{
    setOpen(false);
    props.saveHandler();
  }

  const handleCloseForDelete = () =>{
    setOpen(false);
    props.deleteHandler();
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
          {props.deleteButtonStatus ?  <Button   onClick={handleCloseForDelete}> Delete</Button> : null}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCloseForSave}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
   >
    <Grid item xs={0}>
        <List>
          {props.deleteButtonStatus ? null :
          <div>
        <ListItem>
            <ButtonForEdit label='Name' name='name' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          </div>
}
          <ListItem>
            <ButtonForEdit label='Architect' name='architect' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Establishment' name='establishment' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Location' name='location' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='MaxCapacity' name='maxCapacity' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Operator' name='operator' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Owner' name='owner' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
          <Divider />
          <ListItem>
            <ButtonForEdit label='Photo' name='image' textChangeHandler={props.textChangeHandler}/>
          </ListItem>
         <Divider />
        </List>
        </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
