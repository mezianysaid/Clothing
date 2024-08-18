import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector";
import "./checkout.styles.scss";
import { Box, Card, Divider, Grid } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
import CheckOutCard from "../../components/checkout-card/checkout-card.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { NoEncryption } from "@mui/icons-material";
const CheckOutPage = () => {
  // const { cartItems, cartTotal } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <Box
      className="checkout-container"
      sx={{
        width: { lg: "70%", md: "80%", sm: "100%", xs: "100%" },
        marginLeft: { lg: "16%", md: "10%", sm: "2%", xs: "1%" },
        overflowX: { lg: "hidden", md: "hidden", sm: "scroll", xs: "scroll" },
      }}
    >
      <Card className="header">
        <Grid
          className="checkout-header"
          container
          justifyContent="space-between"
        >
          <Grid className="header-block pro">
            <span>Product</span>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid className="header-block">
            <span>Description</span>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid className="header-block">
            <span>Quantity</span>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid className="header-block">
            <span>Price</span>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid className="header-block">
            <span>Remove</span>
          </Grid>
        </Grid>
        <Divider />
      </Card>
      <Box sx={{ mt: 1 }}>
        {cartItems.map((item) => (
          <CheckOutCard item={item} key={item.id} />
        ))}
      </Box>
      <Box className="total-box">
        <Card className="total">
          <span>Total : {cartTotal}$</span>
        </Card>
      </Box>

      <PaymentForm />
    </Box>
  );
};

export default CheckOutPage;
