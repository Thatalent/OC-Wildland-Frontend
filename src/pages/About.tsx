import { Box, Typography, Card, CardContent } from '@mui/material'
import { KPIStats } from '../components/KPIStats'

function About() {
  return (
    <div>
      <TestimonyCarousel />
      <KPIStats pattern="about" className="mb-8" />
    </div>
  )
}

export default About;
