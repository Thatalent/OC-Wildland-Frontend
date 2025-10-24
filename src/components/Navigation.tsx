import { AppBar, Box, Toolbar, Typography, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Down from "../assets/DownArrow.svg"

interface NavigationProps {
  assets: Record<string, string>;
}

function Navigation ({assets}: NavigationProps) {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [menuName, setMenuName] = useState<string | null>(null);

  console.log(assets);

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
          <img src={assets["OC Wildland Navbar Logo"]} alt="OC-Wildland Logo" style={{width: "174", height: "44"}}/>
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
          <Button sx={{'&:hover': {color: '#F34E1B', "& img": {filter: "invert(46%) sepia(83%) saturate(3092%) hue-rotate(352deg) brightness(99%) contrast(97%)"}}, display: 'flex', alignItems: 'center', gap: '4px'}} onClick={(e) => handleMenuOpen(e, "resources")}>Training <img src={Down} alt="Down Arrow" className="transition-all duration-200"></img></Button>

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
          <Button sx={{'&:hover': {color: '#F34E1B', "& img": {filter: "invert(46%) sepia(83%) saturate(3092%) hue-rotate(352deg) brightness(99%) contrast(97%)"}}, display: 'flex', alignItems: 'center', gap: '4px'}} onClick={(e) => handleMenuOpen(e, "contact")}>
            Contact<img src={Down} alt="Down Arrow" className="transition-all duration-200"></img>
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
          <Button component={Link} to="/Store" sx={{minWidth:"40px", width: "40px", height: "40px", borderRadius: "6px", transition: "background-color 0.3s ease", "&:hover": {backgroundColor: "rgb(249, 107, 6)", "& img": {filter: "invert(1) brightness(2)"}}}}>
            <img className="w-4 h-4" src={assets["Cart Icon"]} alt="Shopping Cart Icon"/>
          </Button>
          <Button sx={{minWidth:"40px", width: "40px", height: "40px", borderRadius: "6px", transition: "background-color 0.3s ease", "&:hover": {backgroundColor: "rgb(249, 107, 6)", "& img": {filter: "invert(1) brightness(2)"}}}}>
            <img className="w-4 h-4" src={assets["Search Icon"]} alt="Search Icon"/>
          </Button>
          <Button sx={{color: "rgb(255,255,255)", width: "96px", height: "36px", padding: "0", background: "linear-gradient(103.54deg, #EE2B2B 0%, #F34E1B 50%, #F8C630 100%)", boxShadow: "0px 10px 30px -10px rgba(243, 78, 27, 0.3)"}}>
            Enroll now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    );
}

export default Navigation;
