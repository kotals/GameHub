import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import useStyles from './Header.styles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Signin } from '../../redux/actions/userAction';
import {Link} from 'react-router-dom'






function Header() {
  const localSign = localStorage.getItem('signIn')
  const classes = useStyles();
  const dispatch = useDispatch()
  const signCheck = useSelector(state => state.signIn)

  const [sign, setSign] = useState(false)


  const signHandler = () => {
    setSign(!sign)
    dispatch(Signin(sign))
  }


  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6"  noWrap>
               <Link style={{color:'white'}} to='/'>Video-Games</Link>
              
          </Typography>
            <Button className={classes.button} onClick={signHandler} variant="contained" color={signCheck ? 'secondary' : 'primary'} >{ }{signCheck ? 'Выйти' : 'Войти'}</Button>
          </Toolbar>
        </AppBar>

      </div>
      
    </>
  );
}
export default Header
