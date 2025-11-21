import TestimonyCarousel from "../components/TestimonyCarousel"
import { KPIStats } from '../components/KPIStats'
import MeetTheTeam from '../components/MeetTheTeam'
import { Box } from '@mui/material'

function About() {
  return (
    <Box>
      <MeetTheTeam />
      <TestimonyCarousel />
      <KPIStats pattern="about" className="mb-8" />
    </Box>
  )
}

export default About;
