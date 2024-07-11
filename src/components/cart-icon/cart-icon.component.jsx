import React, { useContext, useEffect } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { Box } from "@mui/material";
import { CartContext } from "../../contexts/cart.context";
import { useLocation } from "react-router-dom";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const location = useLocation();
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  useEffect(() => {
    if (location !== "/shop") {
      setIsCartOpen(false);
    }
  }, [location]);
  return (
    <Box className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </Box>
  );
};

export default CartIcon;
