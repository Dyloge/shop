import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './cartStyles';
import CartItem from './cartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveCartQty,
  handleEmptyCartQty,
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      You have no items in your cart,
      <Link to='/' className={classes.link}>
        start adding some
      </Link>
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveCartQty={handleRemoveCartQty}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails}>
        <Typography variant='h4'>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            onClick={handleEmptyCartQty}
            className={classes.emptyButton}
            size='large'
            type='button'
            variant='contained'
            color='secondary'>
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size='large'
            type='button'
            variant='contained'
            color='primary'>
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return 'Loading...';

  return (
    <Container>
      <div className={mergeClasses.toolbar} />
      <Typography className={classes.title} variant='h3' gutterBottom>
        Your Shoping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
