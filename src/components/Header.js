import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  subHeader:{
      backgroundColor:'#353231'
  },
  mainHeader:{
    backgroundColor:'#007fff'
  },
  startTrialButton:{
    backgroundColor:'#353231',
    color:'#fff',
    marginLeft:"30px"
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"  className={props.type==="sub" ? classes.subHeader : classes.mainHeader}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} >
            {props.title}
          </Typography>
             { props.type=="main" && (
                                    <React.Fragment>
                                        <Button color="inherit">Log in</Button>
                                        <Button className={classes.startTrialButton} >Start your free trial</Button>
                                    </React.Fragment>
                                     )
                                }
                
        </Toolbar>
      </AppBar>
    </div>
  );
}



Header.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string
  }
  

  