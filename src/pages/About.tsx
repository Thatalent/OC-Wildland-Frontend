import { Box, Typography, Card, CardContent } from '@mui/material'

function About() {
  return (
    <Box>
      <Typography variant="h3" component="h1" className="mb-8 text-gray-800 font-bold">
        About OC Wildland
      </Typography>
      <Typography className="bg-blue-500 text-white text-2xl font-bold p-4">
        Tailwind Works 🎉
      </Typography>


      <Card className="mb-6">
        <CardContent className="p-6">
          <Typography variant="h5" component="h2" className="mb-4 text-gray-800">
            Our Mission
          </Typography>
          <Typography variant="body1" className="mb-4 text-gray-600">
            OC Wildland is dedicated to protecting Orange County's natural wildland areas
            through advanced monitoring, fire prevention strategies, and community engagement.
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            We leverage cutting-edge technology and data analytics to provide real-time
            insights into wildland conditions, helping prevent fires and protect our communities.
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <Typography variant="h5" component="h2" className="mb-4 text-gray-800">
            Technology Stack
          </Typography>
          <Typography variant="body1" className="mb-2 text-gray-600">
            This application is built with modern web technologies:
          </Typography>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>React 18 with TypeScript</li>
            <li>Vite for fast development and building</li>
            <li>Material-UI for component library</li>
            <li>Tailwind CSS for utility-first styling</li>
            <li>Apollo Client for GraphQL data management</li>
            <li>React Router for navigation</li>
          </ul>
        </CardContent>
      </Card>
    </Box>
  )
}

export default About
