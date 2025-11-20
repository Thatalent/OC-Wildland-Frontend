import {
  Box,
  Container,
  Typography,
  Button,
  ButtonGroup,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import { gql, useQuery } from "@apollo/client";

// FIXED: Query trainings instead of posts
const GET_CLASSES = gql`
  query GetTrainings {
    trainings {
      id
      title
      description {
        document
      }
      date
      time
      location
      spots
      price
    }
  }
`;

export default function Training() {
  const { data, loading, error } = useQuery(GET_CLASSES);

  if (loading) return <Typography>Loading...</Typography>;
  if (error)
    return <Typography color="error">Error loading classes</Typography>;

  // FIXED: using trainings instead of posts
  const classes = data?.trainings || [];

  return (
    <Box sx={{ bgcolor: "#F7F8FA", py: 12 }}>
      <Container maxWidth="xl">
        {/* HEADER */}
        <Box mb={6}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "44px",
              color: "#111827",
              mb: 3,
            }}
          >
            Featured & Upcoming Classes
          </Typography>

          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={{ md: "center" }}
            justifyContent={{ md: "space-between" }}
            gap={2}
          >
            <ButtonGroup fullWidth variant="outlined">
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#E8EDF9",
                  color: "#1E40AF",
                }}
              >
                Wildland Fire
              </Button>

              <Button fullWidth sx={{ color: "#4B5563" }}>
                CPR & First Aid
              </Button>
            </ButtonGroup>

            <Select
              defaultValue="All Locations"
              size="small"
              sx={{
                bgcolor: "white",
                color: "#4B5563",
                width: { xs: "100%", md: "auto" },
              }}
            >
              <MenuItem value="All Locations">All Locations</MenuItem>
              <MenuItem value="OC Training Center">OC Training Center</MenuItem>
              <MenuItem value="Online">Online</MenuItem>
            </Select>
          </Box>
        </Box>

        {/* CLASS CARDS */}
        <Box display="flex" flexDirection="column" gap={3}>
          {classes.map((cls) => (
            <Paper
              key={cls.id}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                p: 3,
              }}
            >
              {/* LEFT */}
              <Box sx={{ width: { md: "75%" } }}>
                <Typography
                  sx={{
                    color: "#F34E1B",
                    fontWeight: 600,
                    fontSize: "16px",
                    mb: 0.5,
                  }}
                >
                  {cls.title}
                </Typography>

                <Typography sx={{ color: "#4B5563" }}>
                  {cls.description?.document?.[0]?.children?.[0]?.text ||
                    "No description available"}
                </Typography>
              </Box>

              {/* RIGHT */}
              <Box
                sx={{
                  mt: { xs: 2, md: 0 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "flex-start", md: "flex-end" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#111827",
                    mb: 1,
                  }}
                >
                  ${cls.price || "TBD"}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#F34E1B",
                    "&:hover": { bgcolor: "#D94312" },
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
