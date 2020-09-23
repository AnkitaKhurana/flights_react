import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { APP_NAME } from '../../constants/flightConstants';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign:"center"
    },
  }),
);

const Header = () =>{
    const classes = useStyles();
    return(
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" className={classes.title}>
        {APP_NAME}
      </Typography>
    </Toolbar>
  </AppBar>);
};

export default Header;