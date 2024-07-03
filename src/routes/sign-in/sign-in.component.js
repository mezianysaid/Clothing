import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { Button } from "@mui/material";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>Sign in Page</h1>
      <Button variant="outlined" onClick={logGoogleUser}>
        {" "}
        Sign in with Google
      </Button>
    </>
  );
};

export default SignIn;
