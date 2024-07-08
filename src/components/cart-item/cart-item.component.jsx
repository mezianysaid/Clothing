import React from "react";
import "./cart-item.styles.scss";
import { Box, Card } from "@mui/material";
const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <Card className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <Box className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} *{price}$
        </span>
      </Box>
    </Card>
  );
};

export default CartItem;
