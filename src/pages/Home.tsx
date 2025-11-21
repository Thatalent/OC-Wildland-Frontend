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

// Example GraphQL query - replace with your actual schema
const GET_WILDLAND_DATA = gql`
  query GetWildlandData {
    wildlands {
      id
      name
      location
      status
    }
  }
`;

function Home() {
  return (
    <Box>
      <Hero />
    </Box>
  );
}

export default Home;
