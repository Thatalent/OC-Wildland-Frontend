import { Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

interface FooterProps {
  assets: Record<string, string>;
}

export default function Footer({ assets }: FooterProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#1F262E",
        color: "#FFFFFF",
        pt: "48px",
        pb: "48px",
        px: { xs: "20px", md: "80px" },
      }}
    >
      {/* TOP SECTION */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: "40px",
          mb: "40px",
        }}
      >
        {/* LEFT COLUMN */}
        <Box sx={{ maxWidth: "500px" }}>
          <img
            src={assets["OC Wildland Footer Logo"]}
            alt="OC-Wildland Logo"
            style={{
              width: "260px",
              height: "auto",
              marginBottom: "20px",
            }}
          />

          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "rgba(255,255,255,0.8)",
              mb: "24px",
              maxWidth: "420px",
            }}
          >
            Dedicated to providing the safety and CPR training our community
            needs so that everyone is prepared for emergency response and able
            to help others in emergency situations.
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: "16px" }}>
            <IconButton>
              <img
                src={assets["Facebook Logo"]}
                width={20}
                height={20}
                alt="Facebook"
              />
            </IconButton>
            <IconButton>
              <img src={assets["X Logo"]} width={20} height={20} alt="X" />
            </IconButton>
            <IconButton>
              <img
                src={assets["Instagram Logo"]}
                width={20}
                height={20}
                alt="Instagram"
              />
            </IconButton>
            <IconButton>
              <img
                src={assets["YouTube Logo"]}
                width={20}
                height={20}
                alt="YouTube"
              />
            </IconButton>
          </Box>
        </Box>

        {/* QUICK LINKS */}
        <Box>
          <Typography sx={{ mb: "16px", fontWeight: 600 }}>
            Quick Links
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Link to="/About" className="no-underline text-white">
              About Us
            </Link>
            <Link to="/Store" className="no-underline text-white">
              Store
            </Link>
            <Link to="/Contact" className="no-underline text-white">
              Contact
            </Link>
            <Link to="/FAQ" className="no-underline text-white">
              FAQs
            </Link>
          </Box>
        </Box>

        {/* TRAINING LINKS */}
        <Box>
          <Typography sx={{ mb: "16px", fontWeight: 600 }}>Training</Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Link to="/Training" className="no-underline text-white">
              Wildland Fire
            </Link>
            <Link to="/CPR" className="no-underline text-white">
              American Heart Association
            </Link>
            <Link to="/CustomTraining" className="no-underline text-white">
              Custom & Group Training
            </Link>
          </Box>
        </Box>
      </Box>

      {/* MIDDLE BAR */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          py: "20px",
          mb: "24px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
          © 2025 OC-Wildland Fire & CPR Training. All rights reserved.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <Typography>(949) 249-1227</Typography>
          <Typography>training@ocwildlandfire.com</Typography>
          <Typography>Orange County, CA</Typography>
        </Box>
      </Box>

      {/* BOTTOM LEGAL SECTION */}
      <Box sx={{ mx: "auto", textAlign: "center" }}>
        <Typography sx={{ mb: "16px", lineHeight: "24px" }}>
          <strong>American Heart Association Disclaimer:</strong> This
          organization is an authorized American Heart Association Training
          Center. The American Heart Association strongly promotes knowledge and
          proficiency in BLS, ACLS, and PALS.
        </Typography>

        <Typography sx={{ lineHeight: "24px" }}>
          <strong>Legal Disclaimer:</strong> Training completion does not
          guarantee employment or certification maintenance. Students are
          responsible for keeping certifications current.
        </Typography>

        {/* Policy Links */}
        <Box
          sx={{
            mt: "24px",
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/PrivacyPolicy" className="no-underline text-white">
            Privacy Policy
          </Link>
          <Link to="/Terms" className="no-underline text-white">
            Terms & Conditions
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
