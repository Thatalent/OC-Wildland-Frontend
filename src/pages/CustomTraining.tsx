import { Box, Typography, Card, CardContent } from '@mui/material'
import { KPIStats } from '../components/KPIStats'

function CustomTraining() {
  return (
    <Box>
      <Typography variant="h3" component="h1" className="mb-8 text-gray-800 font-bold">
        Custom Training Programs
      </Typography>

      <KPIStats pattern="customTraining" className="mb-8" />

      <Card className="mb-6">
        <CardContent className="p-6">
          <Typography variant="h5" component="h2" className="mb-4 text-gray-800">
            Tailored Training Solutions
          </Typography>
          <Typography variant="body1" className="mb-4 text-gray-600">
            Our custom training programs are designed to meet the specific needs of your organization.
            We provide comprehensive wildland fire training, safety protocols, and emergency response
            procedures tailored to your team's requirements.
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            With years of experience in wildland fire management and training, we deliver
            high-quality educational programs that ensure your team is prepared for any situation.
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <Typography variant="h5" component="h2" className="mb-4 text-gray-800">
            Training Modules
          </Typography>
          <Typography variant="body1" className="mb-2 text-gray-600">
            Our comprehensive training includes:
          </Typography>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Wildland Fire Behavior and Suppression</li>
            <li>Safety Protocols and Risk Assessment</li>
            <li>Equipment Operation and Maintenance</li>
            <li>Emergency Response Procedures</li>
            <li>Leadership and Team Coordination</li>
            <li>Post-Fire Recovery and Rehabilitation</li>
          </ul>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CustomTraining
