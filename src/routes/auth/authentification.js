import { Box, Grid } from "@mui/material";
import React from "react";
import SignIn from "../sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./auth.styles.scss";
const Authentification = () => {
  return (
    <Box className="cardsign-up">
      <Grid container>
        <Grid
          item={true}
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <SignIn />
        </Grid>
        <Grid
          item={true}
          xs={12}
          sm={12}
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
