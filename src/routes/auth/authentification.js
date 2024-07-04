import { Box, Button, Card, TextField, Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import SignIn from "../sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./auth.styles.scss";
const Authentification = () => {
  return (
    <Box
      className="cardsign-up"
      style={{
        backgroundImage: `url(${"https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740&t=st=1720029608~exp=1720030208~hmac=b80a1654048bc0822a8997a10b46f6584e44b6b057ec663d0a0379728b9d2d18"})`,
      }}
    >
      <Grid container p={5}>
        <Grid
          xs={12}
          md={6}
          lg={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <SignIn />
        </Grid>
        <Grid
          xs={12}
          md={6}
          lg={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <SignUpForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Authentification;
