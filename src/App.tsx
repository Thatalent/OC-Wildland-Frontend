import { Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_WILDLAND_IMAGES } from "./graphql/queries";
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
  const { data, loading, error } = useQuery(GET_WILDLAND_IMAGES);
  const assets: Record<string, string> = {};

  if (loading) return null;
  if (error) return <p>Error loading assets</p>;

  data.images.forEach((img: any) => {
    assets[img.name] = img.imageUrl?.url;
  });

  return (
    <Box className="min-h-screen bg-gray-50">
      <Navigation assets={assets}/>

      <Container maxWidth="lg" className="py-8">
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
      </Container>
      <Footer assets={assets}/>
    </Box>
  );
}

export default App;
