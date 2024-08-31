import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { Button, Box, Card, Alert, Divider } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import "./payment-form.styles.scss";

export const MYspinner = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress size={20} sx={{ color: "white" }} />
    </Box>
  );
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [processingPayment, setProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    console.log(currentUser);
    setProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });
    setProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successfull");
      }
    }
  };
  return (
    <Card className="paymentBox" sx={{ p: 4, marginBlock: 3 }}>
      <h3>Credit Card Payment:</h3>
      <Divider />
      <Box
        component="form"
        fullWidth
        onSubmit={paymentHandler}
        autoComplete="off"
      >
        {/* <Box
          sx={{
            padding: 2,
          }}
        > */}
        <CardElement />
        {/* </Box> */}
        <Box
          sx={{
            padding: 2,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button disabled={processingPayment} className="payBtn" type="submit">
            {processingPayment ? <MYspinner /> : "Pay Now"}
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default PaymentForm;
