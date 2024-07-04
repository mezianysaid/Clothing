import { Box, Button } from "@mui/material";
import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
const NavigationBar = () => {
  return (
    <Fragment>
      <Box className="navigation">
        <Link className="logo-container" to="/">
          <Box>
            <CrwnLogo className="logo" />
          </Box>
        </Link>
        <Box className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <Button variant="outlined" size="medium" className="links">
              <Box className="links">Shop</Box>
            </Button>
          </Link>
          <Link className="nav-link" to="/authentification">
            <Button variant="outlined" className="links">
              Sign In
            </Button>
          </Link>
        </Box>
      </Box>

      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
