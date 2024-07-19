import { Box, Button, Card } from "@mui/material";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./navigation.styles.scss";

import { signOutUser } from "../../utils/firebase/firebase.utils";
// import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
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
            <Button
              size="medium"
              className="links"
              variant="contained"
              color="primary"
            >
              Shop
            </Button>
          </Link>
          {currentUser ? (
            <Button
              className="links"
              variant="contained"
              color="primary"
              onClick={signOutUser}
            >
              Sign Out
            </Button>
          ) : (
            <Link
              className="nav-link"
              variant="contained"
              color="primary"
              to="/authentification"
            >
              <Button className="links">Sign In</Button>
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
