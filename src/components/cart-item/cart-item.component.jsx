import React from "react";
import "./cart-item.styles.scss";
import { Box } from "@mui/material";
const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <Box className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <Box className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} *{price}$
        </span>
      </Box>
    </Box>
  );
};

export default CartItem;
