import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";
// import { selectCartItems } from "../../store/cart/cart.selector";
import "./product-card.styles.scss";
// import { CartContext } from "../../contexts/cart.context";

import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);
  // const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(product));
  return (
    <Box className="container-card">
      {/* <Card className="container-cardkmn"> */}
      <Box
        sx={{
          height: "85%",
          width: "100%",
        }}
      >
        <img
          className="img"
          src={imageUrl}
          alt={`${name}`}
          width="100%"
          height="100%"
        />
      </Box>
      {/* </Card> */}
      <Box className="footer">
        <Grid container>
          <Grid item lg={8} md={6} sm={6} xs={12} className="name">
            {name}
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} className="price">
            <IconButton color="warning">
              <FavoriteIcon />
            </IconButton>

            <span> {price}$</span>
          </Grid>
        </Grid>
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
