import { Box, Button, Card } from "@mui/material";
import React, { useContext } from "react";
import "./product-card.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
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
        buttonType="inverted"
        onClick={addProductToCart}
      >
        Add to card
      </Button>
      {/* </Card> */}
    </Box>
  );
};

export default ProductCard;
