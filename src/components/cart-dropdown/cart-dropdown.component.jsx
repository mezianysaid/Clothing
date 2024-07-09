import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import { Box, Button, Card, Divider } from "@mui/material";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutPage = () => {
    navigate("/checkout");
  };
  return (
    <Card className="cart-dropdown-container">
      <Box className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </Box>
      <Button variant="contained" onClick={goToCheckoutPage}>
        go to checkout
      </Button>
    </Card>
  );
};

export default CartDropdown;
