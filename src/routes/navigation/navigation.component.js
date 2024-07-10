import { Box, Button, Card } from "@mui/material";
import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <Card className="navigation" elevation={6}>
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
          {currentUser ? (
            <Button variant="outlined" className="links" onClick={signOutUser}>
              Sign Out
            </Button>
          ) : (
            <Link className="nav-link" to="/authentification">
              <Button variant="outlined" className="links">
                Sign In
              </Button>
            </Link>
          )}
          {/* <Button variant="outlined" className="links"> */}
          <CartIcon />
          {/* </Button> */}
        </Box>
        {isCartOpen && <CartDropdown />}
      </Card>
      {/* where the wholle app will be store */}
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
