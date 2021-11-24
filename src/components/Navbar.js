import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WoodPoint from "../assets/img/WoodPoint.png";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffeb3b",
    },
    secondary: {
      main: "#ffeb3b",
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  // const isMenuListOpen = Boolean(anchorEl1);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenuListOpen = (event) => {
    // setAnchorEl1(event.currentTarget);
  };
  const handleMenuListClose = () => {
    // setAnchorEl1(null);
    //handleMobileMenuClose();
  };

  //   const handleProfileMenuOpen = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // const menuListId = "primary-search-menu-list";
  // const renderMenuList = (
  //   <Menu
  //     anchorEl1={anchorEl1}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "left",
  //     }}
  //     id={menuListId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "left",
  //     }}
  //     open={isMenuListOpen}
  //     onClose={handleMenuListClose}
  //   >
  //     <MenuItem onClick={handleMenuListClose}>Products</MenuItem>
  //     <MenuItem onClick={handleMenuListClose}>Shops</MenuItem>
  //     <MenuItem onClick={handleMenuListClose}>Contact</MenuItem>
  //   </Menu>
  // );

  const menuId = "primary-search-account-menu";
  const categoriesMenuId = "hamburguer-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderCategories = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={categoriesMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Tequeños</MenuItem>
      <MenuItem onClick={handleMenuClose}>Quesos Venezolanos</MenuItem>
      <MenuItem onClick={handleMenuClose}>Rones Venezolanos</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 18 new notifications"
          color="inherit"
        >
          <Badge badgeContent={18} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar display="flex">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Box display="flex">
              <Box
                fontFamily="Secular One"
                textAlign="center"
                mx="auto"
                color="#614325"
                fontSize="3rem"
                fontWeight="bold"
              >
                WOOD POINT
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                width="4rem"
                aria-label="show 18 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error" size="2rem">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      {renderMobileMenu}
      {renderMenu}
      {renderCategories}
    </Box>
  );
}
