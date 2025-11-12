import { Box } from '@mui/material'
import ProgramsGrid from '../components/ProgramsGrid'

function Training() {
  return (
    <Box>
      {/* Example: All Training Programs page */}
      <ProgramsGrid
        title="All Wildland Fire Classes"
        description="Browse our complete catalog of wildland fire training courses."
        limit={12}
        buttonText="Learn more"
        buttonLink={(slug) => `/programs/${slug}`}
        centered={false}
      />
    </Box>
  )
}

export default Training
