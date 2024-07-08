import { Box, Button, Card, TextField, Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
      alert("Sign in successfully!!");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Error: Incorrect password or  User not found try again !!");
          break;
        case "auth/user-not-found":
          alert("Error: User not found !!");
          break;
        default:
          console.log(error);
      }
    }
  };
  const handleChnage = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    // console.log(formFields);
  };
  return (
    <>
      <Card
        elevation={8}
        sx={{
          marginTop: 5,
          width: "80%",
          borderTopLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <h2 style={{ margin: 14, color: "#4dd8b8", fontFamily: "cursive" }}>
          I have an account
        </h2>
        <h5 style={{ color: "grey", padding: 2, marginBottom: 0 }}>
          Sign in with your email and password :
        </h5>
        <Divider />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%", p: 2 },
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id="outlined-re12qu3eired"
            label="Email"
            name="email"
            value={email}
            type="email"
            placeholder="your email"
            onChange={handleChnage}
            // error
          ></TextField>
          <TextField
            required
            id="outlined-requireaxd2d"
            label="Password"
            name="password"
            type="password"
            value={password}
            // autoComplete="current-password"
            placeholder="your password"
            onChange={handleChnage}
          ></TextField>

          <Box
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "flex-end",
              justifyItems: "flex-end",
              alignItems: "flex-end",
              spacing: 2,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#4dd8b8", marginLeft: 2 }}
            >
              sign in
            </Button>
            <Button
              variant="contained"
              type="button"
              sx={{ backgroundColor: "#4dd8b8", marginLeft: 2 }}
              onClick={signInWithGoogle}
            >
              sign in with Google
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default SignIn;
