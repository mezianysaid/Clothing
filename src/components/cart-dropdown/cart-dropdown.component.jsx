import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./cart-dropdown.styles.scss";
import { Box, Button, Card, Divider } from "@mui/material";
import CartItem from "../cart-item/cart-item.component";
// import Spinner from "../spinner/spinner.component";
import { selectCartItems } from "../../store/cart/cart.selector";
// import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();
  const goToCheckoutPage = () => {
    navigate("/checkout");
  };
  return (
    <Card className="cart-dropdown-container">
      <Box className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => (
            <Box key={item.id}>
              <CartItem key={item.id} cartItem={item} />
              <Divider />
            </Box>
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 10,
            }}
          >
            <span style={{ color: "gray" }}>Your cart is empty</span>
          </Box>
        )}
      </Box>
      <Button
        className="button"
        // variant="contained"
        // color="inherit"
        onClick={goToCheckoutPage}
      >
        go to checkout
      </Button>
    </Card>
  );
};

export default CartDropdown;
