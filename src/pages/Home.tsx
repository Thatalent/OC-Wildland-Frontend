import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material'
import { useQuery, gql } from '@apollo/client'
import PreFooter from '../components/PreFooter'

// Example GraphQL query - replace with your actual schema
/* const GET_WILDLAND_DATA = gql`
  query GetWildlandData {
    wildlands {
      id
      name
      location
      status
    }
  }
` */

function Home() {
  /* const { loading, error, data } = useQuery(GET_WILDLAND_DATA)

  if (loading) return <Typography>Loading...</Typography>
  if (error) return <Typography color="error">Error: {error.message}</Typography> */

  return (
    <Box>
     {/*  <Typography variant="h3" component="h1" className="mb-8 text-gray-800 font-bold">
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

        {data?.wildlands && (
          <Grid item xs={12}>
            <Card>
              <CardContent className="p-6">
                <Typography variant="h5" component="h2" className="mb-4 text-gray-800">
                  Wildland Areas
                </Typography>
                <Grid container spacing={2}>
                  {data.wildlands.map((wildland: any) => (
                    <Grid item xs={12} sm={6} md={4} key={wildland.id}>
                      <Card variant="outlined">
                        <CardContent>
                          <Typography variant="h6">{wildland.name}</Typography>
                          <Typography color="textSecondary">{wildland.location}</Typography>
                          <Typography variant="body2" className="mt-2">
                            Status: {wildland.status}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid> */}
      <PreFooter />
    </Box>
  )
}

export default Home
