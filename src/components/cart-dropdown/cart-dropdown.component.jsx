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
        {cartItems.length ? (
          cartItems.map((item) => (
            <Box>
              <CartItem key={item.id} cartItem={item} />
              <Divider />
            </Box>
          ))
        ) : (
          <span style={{ padding: 10, color: "gray" }}>Your cart is empty</span>
        )}
      </Box>
      <Button className="button" variant="contained" onClick={goToCheckoutPage}>
        go to checkout
      </Button>
    </Card>
  );
};

export default CartDropdown;
