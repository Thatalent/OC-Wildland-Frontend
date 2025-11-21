import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import Hero from "../components/Hero";
import { KPIStats } from '../components/KPIStats'




function Home() {
  return (
    <Box>
      <Hero />
      <KPIStats pattern="homepage" />
    </Box>
  );
}

export default Home;
