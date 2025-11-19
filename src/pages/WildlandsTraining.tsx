import { Box } from '@mui/material'

import ProgramFilter from '../components/ProgramFilter'

interface WildlandsTrainingProps {
  assets: Record<string, string>;
}

function WildlandsTraining({assets}:WildlandsTrainingProps) {
  return (
    <Box>
      <ProgramFilter programVariant="wildfire" assets={assets}/>
    </Box>
  )
}

export default WildlandsTraining
