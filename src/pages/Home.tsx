import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material'
import { useQuery, gql } from '@apollo/client'

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
`

function Home() {
  return (
    <Box>
      <Typography variant="h3" component="h1" className="mb-8 text-gray-800 font-bold">
        Welcome to OC Wildland
      </Typography>

      <Typography variant="h6" className="mb-6 text-gray-600">
        Monitoring and managing Orange County's wildland areas
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card className="h-full">
            <CardContent className="p-6">
              <Typography variant="h5" component="h2" className="mb-4 text-gray-800">
                Current Status
              </Typography>
              <Typography variant="body1" className="mb-4 text-gray-600">
                Real-time monitoring of wildland conditions and fire risk assessment.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className="bg-blue-500 hover:bg-blue-600"
              >
                View Dashboard
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="h-full">
            <CardContent className="p-6">
              <Typography variant="h5" component="h2" className="mb-4 text-gray-800">
                Fire Prevention
              </Typography>
              <Typography variant="body1" className="mb-4 text-gray-600">
                Proactive measures and community resources for fire prevention.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                className="border-blue-500 text-blue-500 hover:bg-blue-50"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
