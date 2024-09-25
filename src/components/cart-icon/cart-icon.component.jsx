import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { Box, Button } from "@mui/material";
// import { CartContext } from "../../contexts/cart.context";
import { useLocation } from "react-router-dom";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const location = useLocation();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  useEffect(() => {
    if (location !== "/shop") {
      dispatch(setIsCartOpen(false));
    }
  }, [location]);
  return (
    <Box className="cart-icon-container">
      <Button className="cart-button" onClick={toggleIsCartOpen}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count" data-testid="cartcout">
          {cartCount}
        </span>
      </Button>
    </Box>
  );
};

export default CartIcon;
