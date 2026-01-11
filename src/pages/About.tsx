import TestimonyCarousel from "../components/TestimonyCarousel"
import { KPIStats } from '../components/KPIStats'
import MeetTheTeam from '../components/MeetTheTeam'
import CoreValues from "../components/CoreValues"
import { Box } from '@mui/material'

function About() {
  return (
    <Box>
      <CoreValues />
      <MeetTheTeam />
      <TestimonyCarousel />
      <KPIStats pattern="about" className="mb-8" />
    </Box>
  )
}

export default About;
