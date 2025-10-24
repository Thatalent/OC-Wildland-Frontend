import { Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from "@mui/icons-material/YouTube";

interface FooterProps {
  assets: Record<string, string>;
}


function Footer({assets}: FooterProps) {
  return (
    <Box sx={{ backgroundColor: '#1f262e', color: '#fff', py: '48px', px: '80px'}}>
      <Box sx={{ display: 'flex', gap: '32px', mb: '32px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px'}}>
          <Box>
            <img src={assets["OC Wildland Footer Logo"]} alt="OC-Wildland Logo" style={{ width: '260px', height: '45px' }} />
          </Box>
            <Typography variant="h5" sx={{maxWidth: '448px' }}>
              Dedicated to providing the safety and CPR training our community
              needs so that everyone is prepared for emergency response and
              prepared to help others in emergency situations.
            </Typography>
          <Box sx={{display: 'flex', gap: '16px'}}>
            <IconButton sx={{width: '20px', height: '20px'}}>
              <img src={assets["Facebook Logo"]} alt="Facebook Logo" style={{ width: '20px', height: '20px' }} />
            </IconButton>
            <IconButton sx={{width: '20px', height: '20px'}}>
              <img src={assets["X Logo"]} alt="X Logo" style={{ width: '15px', height: '15px' }}/>
            </IconButton>
            <IconButton sx={{width: '20px', height: '20px'}}>
              <img src={assets["Instagram Logo"]} alt="Instagram Logo" style={{ width: '20px', height: '20px' }}/>
            </IconButton>
            <IconButton sx={{width: '20px', height: '20px'}}>
              <img src={assets["YouTube Logo"]} alt="YouTube Logo" style={{ width: '20px', height: '20px' }}/>
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Typography mb="16px">
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography component={Link} to="/About" variant="h5" className="no-underline">About us</Typography>
            <Typography component={Link} to="/Store" variant="h5" className="no-underline">Store</Typography>
            <Typography component={Link} to="/Contact" variant="h5" className="no-underline">Contact</Typography>
            <Typography component={Link} to="/FAQ" variant="h5" className="no-underline">FAQs</Typography>
          </Box>
        </Box>
        <Box>
          <Typography>
            Training
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mt: '16px' }}>
            <Typography component={Link} to="/Training" variant="h5" className="no-underline">Wildland Fire</Typography>
            <Typography component={Link} to="/CPR" variant="h5" className="no-underline">American Heart Association</Typography>
            <Typography component={Link} to="/CustomTraining" variant="h5" className="no-underline">Custom & Group Training</Typography>
          </Box>
        </Box>
      </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", py:"32px", borderTop: "1px solid white", borderBottom: "1px solid white"}}>
          <Typography variant="h5" sx={{color: "rgba(255, 255, 255, .6)"}}>
            © 2025 OC-Wildland Fire & CPR Training. All rights reserved.
          </Typography>
          <Box  sx={{display: "flex", gap: "24px"}}>
            <Typography variant="h5" sx={{color: "rgba(255, 255, 255, .6)"}}>
              (949) 249-1227
            </Typography>
            <Typography variant="h5" sx={{color: "rgba(255, 255, 255, .6)"}}>
              training@ocwildlandfire.com
            </Typography>
            <Typography variant="h5" sx={{color: "rgba(255, 255, 255, .6)"}}>
              Orange County, CA
            </Typography>
          </Box>
        </Box>
        <Box sx={{mt: "17px"}}>
          <Typography variant="h4" sx={{mb: '16px'}}><span className="font-bold">American Heart Association Disclaimer:</span> This organization is an authorized American Heart Association Training Center. The American Heart Association strongly promotes knowledge and proficiency in BLS, ACLS,
            and PALS and has developed instructional materials for this purpose.</Typography>
          <Typography variant="h4"><span className="font-bold">Legal Disclaimer:</span> Training completion does not guarantee employment or certification maintenance. Students are responsible for maintaining current certifications and following all applicable regulations.</Typography>
          <Box sx={{textAlign: "center", mt: "16px"}}>
            <Typography component={Link} to="/PrivacyPolicy" variant="h4" sx={{mr: "16px"}}>
              Privacy Policy
            </Typography>
            <Typography component={Link} to="/Terms" variant="h4">
              Terms and Conditions
            </Typography>
          </Box>
        </Box>
    </Box>
  );
}

export default Footer;
