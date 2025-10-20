import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from "@mui/icons-material/YouTube";


function Footer() {
  return (
    <Box sx={{ backgroundColor: '#1f262e', color: '#fff', py: '48px', px: '80px'}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px', pb: '32px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px'}}>
          <Box>
            <img src={Logo} alt="OC-Wildland Logo" style={{ width: '174px', height: '44px' }} />
          </Box>
            <Typography variant="body2" sx={{maxWidth: '448px' }}>
              Dedicated to providing the safety and CPR training our community
              needs so that everyone is prepared for emergency response and
              prepared to help others in emergency situations.
            </Typography>
          <Box sx={{display: 'flex', gap: '16px'}}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </Box>
        </Box>
        <Box>
          <Typography mb="16px">
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link to="/About" className="no-underline text-white-600">About Us</Link>
            <Link to="/Store" className="no-underline">Store</Link>
            <Link to="/Contact" className="no-underline">Contact</Link>
            <Link to="/FAQ" className="no-underline">FAQs</Link>
          </Box>
        </Box>
        <Box>
          <Typography>
            Training
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mt: '16px' }}>
            <Link to="/Training" className="no-underline text-white-600">WildLand Fire</Link>
            <Link to="/CPR" className="no-underline">American Heart Association</Link>
            <Link to="/CustomTraining" className="no-underline">Custom & Group Training</Link>
          </Box>
        </Box>
      </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", py:"32px", borderTop: "1px solid white", borderBottom: "1px solid white"}}>
          <Typography>
            © 2025 OC-Wildland Fire & CPR Training. All rights reserved.
          </Typography>
          <Typography>
            (949) 249-1227 training@ocwildlandfire.com Orange County, CA
          </Typography>
        </Box>
        <Box sx={{mt: "17px"}}>
          <Typography sx={{mb: '16px'}}>American Heart Association Disclaimer: This organization is an authorized American Heart Association Training Center. The American Heart Association strongly promotes knowledge and proficiency in BLS, ACLS,
and PALS and has developed instructional materials for this purpose.</Typography>
          <Typography>Legal Disclaimer: Training completion does not guarantee employment or certification maintenance. Students are responsible for maintaining current certifications and following all applicable regulations.</Typography>
          <Box sx={{textAlign: "center", mt: "16px"}}>
            <Link to="/PrivacyPolicy" className="text-white-600">Privacy Policy</Link>
            <Link to="/Terms" className="text-white-600"> Terms and Conditions</Link>
          </Box>
        </Box>
    </Box>
  );
}

export default Footer;
