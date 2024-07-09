import React, { useContext } from "react";
import { Box, Button, Card, Grid, IconButton } from "@mui/material";

import { AddCircle, RemoveCircle, DeleteForever } from "@mui/icons-material";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-card.styles.scss";
const CheckOutCard = ({ item }) => {
  const { id, name, imageUrl, quantity, price } = item;
  const { addItemToCart, DecrementItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const decrementItem = () => DecrementItemFromCart(item);
  const incrementItem = () => addItemToCart(item);
  const ClearItem = () => clearItemFromCart(item);
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
          <span>{price}</span>
        </Grid>
        <Grid className="header-block">
          <IconButton aria-label="delete" size="medium" onClick={ClearItem}>
            <DeleteForever fontSize="inherit" />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CheckOutCard;
