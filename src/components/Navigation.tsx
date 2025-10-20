import { AppBar, Box, Toolbar, Typography, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import Down from "../assets/DownArrow.svg"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

function Navigation () {
   const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [menuName, setMenuName] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, name: string) => {
    setMenuAnchor(event.currentTarget);
    setMenuName(name);
  };
  const handleMenuClose = () => {
    setMenuAnchor(null);
    setMenuName(null)
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{
    backgroundColor: "rgba(225, 231, 239, 1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  }}>
      <Toolbar className="flex justify-between items-center !px-[112px]">
        <Box display="flex" alignItems="center">
          <img src={Logo} alt="OC-Wildland Logo" style={{width: "174", height: "44"}}/>
        </Box>
        <Box display="flex" sx={{gap: "32px", alignItems: "center", justifyContent: "center"}}>
          <Typography
            component={Link}
            to="/About"
            variant="h6"
            sx={{ flexGrow: 1, '&:hover': {color: '#F34E1B'}}}
            className="no-underline text-gray-800"
          >
            About
          </Typography>
          <Button sx={{'&:hover': {color: '#F34E1B'}, display: 'flex', alignItems: 'center', gap: '4px'}} onClick={(e) => handleMenuOpen(e, "resources")}>Training <img src={Down} alt="Down Arrow"></img></Button>

          <Menu
            anchorEl={menuName === "resources" ? menuAnchor : null}
            open={menuName === "resources"}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/Training" onClick={handleMenuClose}>All Training</MenuItem>
            <MenuItem component={Link} to="/WildlandsTraining" onClick={handleMenuClose}>Wildfire Training</MenuItem>
            <MenuItem component={Link} to="/CPR" onClick={handleMenuClose}>CPR & First Aid</MenuItem>
            <MenuItem component={Link} to="/CustomTraining" onClick={handleMenuClose}>Custom & Group Training</MenuItem>
          </Menu>

          <Typography
            variant="h6"
            component={Link}
            to="/Store"
            sx={{ flexGrow: 1, '&:hover': {color: '#F34E1B'} }}
            className="no-underline text-gray-800"
          >
            Store
          </Typography>
          <Button sx={{'&:hover': {color: '#F34E1B'}, display: 'flex', alignItems: 'center', gap: '4px'}} onClick={(e) => handleMenuOpen(e, "contact")}>
            Contact<img src={Down} alt="Down Arrow"></img>
          </Button>

          <Menu
            anchorEl={menuName === "contact" ? menuAnchor : null}
            open={menuName === "contact"}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/Contact" onClick={handleMenuClose}>Contact Us</MenuItem>
            <MenuItem component={Link} to="/Consultation" onClick={handleMenuClose}>Consultations</MenuItem>
            <MenuItem component={Link} to="/FAQ" onClick={handleMenuClose}>FAQs</MenuItem>
          </Menu>

        </Box>
        <Box display="flex" alignItems="center" sx={{gap: "16px"}}>
          <ShoppingCartIcon></ShoppingCartIcon>
          <SearchIcon></SearchIcon>
          <Button sx={{color: "rgb(255,255,255)", width: "96px", height: "36px", padding: "0", background: "linear-gradient(103.54deg, #EE2B2B 0%, #F34E1B 50%, #F8C630 100%)", boxShadow: "0px 10px 30px -10px rgba(243, 78, 27, 0.3)"}}>
            Enroll now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    );
}

export default Navigation;
