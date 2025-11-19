import { Box} from '@mui/material'

import ProgramFilter from '../components/ProgramFilter'

interface CPRProps {
  assets: Record<string, string>;
}

function CPR({assets}: CPRProps) {
  return (
    <Box className="p-0">
      <ProgramFilter programVariant="cpr" assets={assets} />
    </Box>
  )
}

export default CPR
