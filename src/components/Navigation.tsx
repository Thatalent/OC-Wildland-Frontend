import { AppBar, Box, Toolbar, Typography, Button, Menu, MenuItem, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface NavigationProps {
  assets: Record<string, string>;
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

function Navigation({ assets }: NavigationProps) {
  const [cartCount, setCartCount] = useState<number>(1);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [menuName, setMenuName] = useState<string | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const navItems = [
    { name: 'About', link: '/About' },
    {
      name: 'Training', link: '/Training', submenu: [
        { name: 'All Training', link: '/Training' },
        { name: 'Wildfire Training', link: '/WildlandsTraining' },
        { name: 'CPR & First Aid', link: '/CPR' },
        { name: 'Custom & Group Training', link: '/CustomTraining' },
      ]
    },
    { name: 'Store', link: '/Store' },
    { name: 'Cart', link: '/Store' },
    {
      name: 'Contact', link: '/Contact', submenu: [
        { name: 'Contact Us', link: '/Contact' },
        { name: 'Consultations', link: '/Consultation' },
        { name: 'FAQs', link: '/FAQ' },
      ]
    },
  ];

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
      <Toolbar className="flex justify-between items-center" sx={{ px: { xs: "16px", md: "112px" }, py: "10px" }}>
        <Box display="flex" alignItems="center">
          <Link to="/">
            <img src={assets["OC Wildland Navbar Logo"]} alt="OC-Wildland Logo" style={{ width: "174", height: "44" }} />
          </Link>
        </Box>
        <Box display={{ xs: "none", md: "flex" }} sx={{ gap: "32px", alignItems: "center", justifyContent: "center" }}>
          <Typography
            component={Link}
            to="/About"
            variant="h6"
            sx={{ flexGrow: 1, '&:hover': { color: '#F34E1B' } }}
            className="no-underline text-gray-800"
          >
            About
          </Typography>
          <Button sx={{ '&:hover': { color: '#F34E1B' }, display: 'flex', alignItems: 'center', gap: '4px' }} onClick={(e) => handleMenuOpen(e, "resources")}>
            Training <KeyboardArrowDownIcon sx={{ fontSize: "medium" }} />
          </Button>

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
            sx={{ flexGrow: 1, '&:hover': { color: '#F34E1B' } }}
            className="no-underline text-gray-800"
          >
            Store
          </Typography>
          <Button sx={{ '&:hover': { color: '#F34E1B' }, display: 'flex', alignItems: 'center', gap: '4px' }} onClick={(e) => handleMenuOpen(e, "contact")}>
            Contact <KeyboardArrowDownIcon sx={{ fontSize: "medium" }} />
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
        <Box display="flex" alignItems="center" sx={{ gap: { xs: "8px", md: "16px" } }}>
          <Button component={Link} to="/Store" sx={{ minWidth: "40px", padding: "0", width: "40px", height: "40px", borderRadius: "6px", transition: "background-color 0.3s ease", "&:hover": { backgroundColor: "rgb(249, 107, 6)", "& img": { filter: "invert(1) brightness(2)" } } }}>
            <Badge badgeContent={cartCount} overlap="circular" anchorOrigin={{ vertical: "top", horizontal: "right" }} sx={{ "& .MuiBadge-badge": { backgroundColor: "#f34e1b", color: "#fff", minWidth: "12px", height: "12px", padding: "0", borderRadius: "50%", fontSize: "10px", fontWeight: "600", lineHeight: "20px", alignItems: "center", justifyContent: "center" } }}>
              <img className="w-4 h-4" src={assets["Cart Icon"]} alt="Shopping Cart Icon" />
            </Badge>
          </Button>
          <Button sx={{ display: { xs: "none", md: "flex" }, padding: "0", minWidth: "40px", width: "40px", height: "40px", borderRadius: "6px", transition: "background-color 0.3s ease", "&:hover": { backgroundColor: "rgb(249, 107, 6)", "& img": { filter: "invert(1) brightness(2)" } } }}>
            <img className="w-4 h-4" src={assets["Search Icon"]} alt="Search Icon" />
          </Button>
          <Button variant="gradient" sx={{ display: { xs: "none", md: "flex" }, color: "rgb(255,255,255)", width: "96px", height: "36px", padding: "0", background: "primary", boxShadow: "0px 10px 30px -10px rgba(243, 78, 27, 0.3)" }}>
            Enroll now
          </Button>
          <Button sx={{ display: { md: "none" }, padding: "0", minWidth: "40px", width: "40px", height: "40px", borderRadius: "6px" }} onClick={handleDrawerToggle}>
            {mobileOpen ? <CloseIcon sx={{ fontSize: "medium" }} /> : <MenuIcon sx={{ fontSize: "large" }} />}
          </Button>
        </Box>
      </Toolbar>
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { width: "100%", px: "16px", backgroundColor: "rgba(243, 243, 243, 1)" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: "10px" }}>
          <img
            src={assets["OC Wildland Navbar Logo"]}
            alt="OC-Wildland Logo"
            style={{ width: "150px", height: "40px" }}
          />
          <CloseIcon sx={{ cursor: "pointer" }} onClick={handleDrawerToggle} />
        </Box>
        <Box sx={{ borderTop: "1px solid #e1e7ef", pt: "17px" }}>
          <List disablePadding>
            {navItems.map((item) => (
              <Box key={item.name} >
                {item.submenu ? (
                  <>
                    <Typography sx={{ lineHeight: "20px", fontWeight: 500, color: "#1f262e", fontSize: "13.78px" }}>
                      {item.name}
                    </Typography>
                    {item.submenu.map((subItem) => (
                      <ListItemButton key={subItem.name} component={Link} to={subItem.link} onClick={handleDrawerToggle} sx={{ padding: "8px 0 8px 16px" }}>
                        <ListItemText primary={subItem.name} primaryTypographyProps={{ fontWeight: 400, fontSize: "13.78px", color: "#1f262e", lineHeight: "20px" }} />
                      </ListItemButton>
                    ))}
                  </>
                ) : (
                  <ListItemButton component={Link} to={item.link} onClick={handleDrawerToggle} sx={{ padding: "0 0 16px 0" }}>
                    <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 500, fontSize: "13.78px", color: "#1f262e", lineHeight: "20px" }} />
                  </ListItemButton>
                )}
              </Box>
            ))}
          </List>
        </Box>
        <Box sx={{ mb: "34px", mt: "16px" }}>
          <Button
            sx={{
              color: "rgb(255,255,255)",
              width: "120px",
              height: "40px",
              background:
                "primary",
              boxShadow: "0px 10px 30px -10px rgba(243, 78, 27, 0.3)",
            }}
          >
            Enroll now
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navigation;
