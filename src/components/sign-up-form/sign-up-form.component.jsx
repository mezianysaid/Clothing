import { Box, Button, Card, TextField, Divider, Grid } from "@mui/material";
import React, { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-up.styles.scss";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { currentUser } = useContext(UserContext);
  console.log("hit", currentUser ? currentUser.email : null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("the passwords do not match!!");
      return;
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        // setCurrentUser(user);
        await createUserDocumentFromAuth(user, { displayName });
        setFormFields(defaultFormFields);
        alert("the user created successfully >>");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("can not create user, email already in use");
        }
        alert("Error:" + error.message);
      }
    }
  };
  const handleChnage = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    // console.log(formFields);
  };
  return (
    <Box>
      <Card
        elevation={8}
        sx={{
          marginTop: 5,
          width: "80%",
          borderTopRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
      >
        <h2 style={{ margin: 14, color: "#4dd8b8", fontFamily: "cursive" }}>
          I Don't have an account :
        </h2>
        <p style={{ color: "grey", padding: 2, marginBottom: 0 }}>
          Sign up with your email and password :
        </p>
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
            id="outlined-req25uired"
            label="User Name"
            name="displayName"
            value={displayName}
            placeholder="your name"
            type="text"
            onChange={handleChnage}
            className="field"
            // error
          ></TextField>
          <TextField
            required
            id="outlined-re12quired"
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
            id="outlined-require2d"
            label="Password"
            name="password"
            type="password"
            value={password}
            // autoComplete="current-password"
            placeholder="your password"
            onChange={handleChnage}
          ></TextField>
          <TextField
            required
            id="outlined-requi1224red"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            // autoComplete="current-password"
            placeholder="confirm your password"
            onChange={handleChnage}
          ></TextField>
          <Box
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              type="cancel"
              variant="outlined"
              sx={{ color: "#4dd8b8" }}
              onClick={() => {
                setFormFields(defaultFormFields);
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#4dd8b8" }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default SignUpForm;
