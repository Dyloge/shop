import {
  AppBar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import logo from '../../assets/logo.png';
import React from 'react';
import useStyles from './navbarStyles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar
        position='fixed'
        className={CallMissedSharp.appBar}
        color='inherit'>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            className={classes.title}
            color='inherit'>
            <img
              component={Link}
              src={logo}
              alt='DylogeShop'
              height='25px'
              className={mergeClasses.image}
            />
            Dyloge Shop
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to='/cart'
                aria-label='Show cart items'
                color='inherit'>
                <Badge badgeContent={totalItems} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
