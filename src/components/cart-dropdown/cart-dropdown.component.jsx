import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import { Box, Button, Card, Divider } from "@mui/material";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Card className="cart-dropdown-container">
      <Box className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </Box>
      <Button variant="contained">go to checkout</Button>
    </Card>
  );
};

export default CartDropdown;
