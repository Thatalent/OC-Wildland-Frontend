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

// Correct GraphQL query
const GET_CLASSES = gql`
  query {
    posts {
      id
      title
      content {
        document
      }
    }
  }
`;

function Training() {
  const { data, loading, error } = useQuery(GET_CLASSES);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error loading classes</Typography>;

  const classes = data?.posts || [];

  return (
    <Box sx={{ bgcolor: "#F7F8FA", py: 12, fontWeight: 400, color: "#1F2937" }}>
      <Container maxWidth="xl">
        {/* PAGE HEADER */}
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
            {/* CATEGORY BUTTONS */}
            <ButtonGroup
              variant="outlined"
              fullWidth
              sx={{
                bgcolor: "white",
                borderColor: "#E5E7EB",
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#E8EDF9",
                  color: "#1E40AF",
                  textTransform: "none",
                  "&:hover": { bgcolor: "#dce4f8" },
                }}
              >
                Wildland Fire
              </Button>

              <Button
                fullWidth
                sx={{
                  color: "#4B5563",
                  textTransform: "none",
                  "&:hover": { color: "#1E40AF", bgcolor: "transparent" },
                }}
              >
                CPR & First Aid
              </Button>
            </ButtonGroup>

            {/* LOCATION DROPDOWN */}
            <Select
              defaultValue="All Locations"
              size="small"
              sx={{
                bgcolor: "white",
                color: "#4B5563",
                borderColor: "#D1D5DB",
                width: { xs: "100%", md: "auto" },
                "& .MuiSelect-select": { py: 1, px: 2 },
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
              elevation={1}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { md: "flex-start" },
                p: 3,
                border: "1px solid #E5E7EB",
                borderRadius: 2,
              }}
            >
              {/* LEFT SIDE */}
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

                <Typography sx={{ color: "#4B5563", mb: 1.5, fontSize: "15px" }}>
                  {cls.content?.document?.[0]?.children?.[0]?.text ||
                    "No description available"}
                </Typography>
              </Box>

              {/* RIGHT SIDE */}
              <Box
                sx={{
                  mt: { xs: 2, md: 0 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "flex-start", md: "flex-end" },
                  width: { md: "25%" },
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
                  Price TBD
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#F34E1B",
                    "&:hover": { bgcolor: "#D94312" },
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                    borderRadius: 1,
                    px: 3,
                    py: 1,
                    boxShadow: 1,
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* VIEW ALL BUTTON */}
        <Box mt={8} display="flex" justifyContent="center">
          <Button
            variant="outlined"
            sx={{
              borderColor: "#D1D5DB",
              color: "#1F2937",
              textTransform: "none",
              fontSize: "15px",
              fontWeight: 500,
              px: 4,
              py: 1.5,
              "&:hover": { bgcolor: "#F9FAFB" },
            }}
          >
            View All Wildfire Courses
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Training;
