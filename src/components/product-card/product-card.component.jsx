import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import "./product-card.styles.scss";
// import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <Box className="container-card">
      {/* <Card className="container-cardkmn"> */}
      <img
        className="img"
        src={imageUrl}
        alt={`${name}`}
        width="100%"
        height="90%"
      />
      {/* </Card> */}
      <Box className="footer">
        <span className="label">{name}</span>
        <span className="price">{price}$</span>
      </Box>
      <Button
        className="btn"
        variant="contained"
        color="secondary"
        onClick={addProductToCart}
      >
        Add to card
      </Button>
      {/* </Card> */}
    </Box>
  );
};

export default ProductCard;
