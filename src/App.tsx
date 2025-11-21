import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Consultation from "./pages/Consultation";
import Contact from "./pages/Contact";
import CPR from "./pages/CPR";
import CustomTraining from "./pages/CustomTraining";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Store from "./pages/Store";
import Training from "./pages/Training";
import Terms from "./pages/Terms";
import WildlandsTraining from "./pages/WildlandsTraining";
import Footer from "./components/Footer";

function App() {
  // SAFE FALLBACK ASSETS (no GraphQL needed)
  const assets = {
    "OC Wildland Navbar Logo": "/logo_OC.png",
    "OC Wildland Footer Logo": "/FooterLogo.png",
    "Cart Icon": "/shoppingcart.png",
    "Search Icon": "/glass.png",
    "X Logo": "/x.png",
    "Facebook Logo": "/fb.png",
    "Instagram Logo": "/IG.png",
    "YouTube Logo": "/youtube.png"
  };

  return (
    <Box className="min-h-screen bg-gray-50">
      <Navigation assets={assets} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cpr" element={<CPR />} />
        <Route path="/customtraining" element={<CustomTraining />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/store" element={<Store />} />
        <Route path="/training" element={<Training />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/wildlandstraining" element={<WildlandsTraining />} />
      </Routes>

      <Footer assets={assets} />
    </Box>
  );
}

export default App;
