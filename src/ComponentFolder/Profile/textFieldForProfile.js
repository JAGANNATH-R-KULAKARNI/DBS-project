import React from 'react';
import { withStyles,makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function CustomizedInputs(props) {
  const classes = useStyles();
  const LABEL=props.TYPE !== 'Dp' ? "edit your "+props.TYPE : "Copy and paste the URL"; 
  return (
    <form className={classes.root} noValidate>
      <CssTextField
        className={classes.margin}
        label={LABEL}
        variant="outlined"
        name={props.TYPE}
        onChange={props.editModalTextChangeHandler}
      />

    </form>
  );
}