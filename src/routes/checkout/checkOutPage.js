import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
import { Box, Card, Divider, Grid } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
import CheckOutCard from "../../components/checkout-card/checkout-card.component";

const CheckOutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <Box className="checkout-container">
      <Box className="header">
        <Grid
          className="checkout-header"
          container
          justifyContent="space-between"
        >
          <Grid className="header-block">
            <span>Product</span>
          </Grid>
          <Grid className="header-block">
            <span>Description</span>
          </Grid>
          <Grid className="header-block">
            <span>Quantity</span>
          </Grid>
          <Grid className="header-block">
            <span>Price</span>
          </Grid>
          <Grid className="header-block">
            <span>Remove</span>
          </Grid>
        </Grid>
        <Divider />
      </Box>
      <Box sx={{ mt: 3 }}>
        {cartItems.map((item) => (
          <CheckOutCard item={item} key={item.id} />
        ))}
      </Box>
      <Box className="total-box">
        <Card className="total">
          <span>Total : {cartTotal}$</span>
        </Card>
      </Box>
    </Box>
  );
};

export default CheckOutPage;
