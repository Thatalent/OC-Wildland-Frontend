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
import TrainingPrograms from "../components/TrainingPrograms";



function Home() {
  return (
    <Box>
      <Hero backgroundImage="/Section.png" />
      <KPIStats pattern="homepage" />
      <TrainingPrograms />
    </Box>
  );
}

export default Home;
