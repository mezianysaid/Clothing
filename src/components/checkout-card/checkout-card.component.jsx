import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Card, Grid, IconButton } from "@mui/material";
import { AddCircle, RemoveCircle, DeleteForever } from "@mui/icons-material";
// import PaymentForm from "../payment-form/payment-form.component";
import {
  addItemToCart,
  DecrementItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";
// import { selectCartItems } from "../../store/cart/cart.selector";

import "./checkout-card.styles.scss";

const CheckOutCard = memo(({ item }) => {
  const { id, name, imageUrl, quantity, price } = item;
  const dispatch = useDispatch();
  // const cartItems = useSelector(selectCartItems);

  // const { addItemToCart, DecrementItemFromCart, clearItemFromCart } =
  //   useContext(CartContext);

  const decrementItem = () => dispatch(DecrementItemFromCart(item));
  const incrementItem = () => dispatch(addItemToCart(item));
  const ClearItem = () => dispatch(removeItemFromCart(item));
  return (
    <Card key={id} className="card-container">
      <Grid
        className="checkout-header"
        container
        justifyContent="space-between"
      >
        <Grid className="imag-container">
          <img src={imageUrl} alt={`${name}`} className="img" />
        </Grid>
        <Grid className="header-block">
          <span>{name}</span>
        </Grid>
        <Grid className="header-block">
          <IconButton aria-label="delete" size="medium" onClick={decrementItem}>
            <RemoveCircle fontSize="inherit" />
          </IconButton>
          <span>{quantity}</span>

          <IconButton aria-label="delete" size="medium" onClick={incrementItem}>
            <AddCircle fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid className="header-block">
          <span style={{ fontWeight: "800" }}>{price}$</span>
        </Grid>
        <Grid className="header-block">
          <IconButton aria-label="delete" size="medium" onClick={ClearItem}>
            <DeleteForever fontSize="inherit" color="error" />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
});

export default CheckOutCard;
