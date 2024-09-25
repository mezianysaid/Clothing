import { Box, Button, Card, TextField } from "@mui/material";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import "./navigation.styles.scss";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
// import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import ShopIcon from "@mui/icons-material/Shop";
import StoreIcon from "@mui/icons-material/Store";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  width: "100%",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "darkcyan",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

const navigationList = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    name: "SHOP",
    link: "shop/",
    icon: <ShopIcon />,
  },
  {
    name: "Hats",
    link: "shop/hats",
    icon: <StoreIcon />,
  },
  {
    name: "Sneakers",
    link: "shop/sneakers",
    icon: <StoreIcon />,
  },
  {
    name: "Jackets",
    link: "shop/jackets",
    icon: <StoreIcon />,
  },
  {
    name: "Men",
    link: "shop/mens",
    icon: <ManIcon />,
  },
  {
    name: "Women",
    link: "shop/womens",
    icon: <WomanIcon />,
  },
];

const secondNavigationList = [
  {
    id: 1,
    name: "sign in",
    link: "authentification",
    icon: <LoginIcon />,
  },
  {
    id: 2,
    name: "sign up",
    link: "sign-up",
    icon: <AppRegistrationIcon />,
  },
  {
    id: 3,
    name: "sign out",
    link: "/logout",
    icon: <LogoutIcon />,
  },
  {
    id: 4,
    name: "Panier",
    link: "/checkout",
    icon: <ShoppingCartIcon />,
  },
];

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogOut = () => {
    signOutUser();
    navigateTo("/");
  };
  return (
    <Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{ elevation: 9, height: 40 }}
          // elevation={6}
        >
          {/* <Toolbar style={{ m: 0, p: 0 }}> */}
          <Toolbar
            className="navigationBar"
            elevation={6}
            sx={{ backgroundColor: "white" }}
          >
            <IconButton
              color="white"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  marginRight: 5,
                  backgroundColor: "darkcyan",
                },
                open && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>

            <Link className="logo-container" to="/">
              <CrwnLogo className="logo" />
            </Link>
            <Box className="searchBox">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              {/* <TextField className="searchBar" variant="outlined"></TextField> */}
            </Box>

            <Box
              className="nav-links-container"
              sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}
            >
              <Link className="nav-link link" to="/shop">
                <span>Shop</span>
              </Link>
              {currentUser ? (
                <Link
                  className="nav-link link"
                  variant="contained"
                  onClick={signOutUser}
                >
                  <span data-testid="sign-out-button"> sign out</span>
                </Link>
              ) : (
                <Link
                  className="nav-link link"
                  variant="contained"
                  color="primary"
                  to="/authentification"
                >
                  <span data-testid="sign-in-button">sign in</span>
                </Link>
              )}
              {/* <Button variant="outlined" className="links"> */}
              <CartIcon />
              {/* </Button> */}
            </Box>
            {isCartOpen && <CartDropdown />}
          </Toolbar>
          {/* </Toolbar> */}
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose} sx={{ color: "darkcyan" }}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {navigationList.map((item, index) => (
              <ListItem
                key={item.name}
                disablePadding
                onClick={() => navigateTo(item.link)}
                sx={{
                  display: "block",
                  color: "darkcyan",
                }}
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                        color: "darkcyan",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                            textTransform: "uppercase",
                            fontWeight: 800,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {secondNavigationList.map((item) =>
              item.link === "/logout" && !currentUser ? null : (
                <ListItem
                  data-testid={item.id}
                  key={item.id}
                  disablePadding
                  sx={{ display: "block", textTransform: "capitalize" }}
                  onClick={() =>
                    item.link === "/logout"
                      ? handleLogOut()
                      : navigateTo(item.link)
                  }
                >
                  <ListItemButton
                    sx={[
                      {
                        minHeight: 48,
                        px: 2.5,
                        color: "darkcyan",
                      },
                      open
                        ? {
                            justifyContent: "initial",
                          }
                        : {
                            justifyContent: "center",
                          },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: "center",
                          color: "darkcyan",
                        },
                        open
                          ? {
                              mr: 3,
                            }
                          : {
                              mr: "auto",
                            },
                      ]}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={[
                        open
                          ? {
                              opacity: 1,
                            }
                          : {
                              opacity: 0,
                            },
                      ]}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, backgroundColor: "#edede9" }}
        >
          <DrawerHeader />
          {/* where the wholle app will be store */}
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default NavigationBar;
