import { CircularProgress, Box, Typography } from '@mui/material'

interface LoadingSpinnerProps {
  message?: string
}

function LoadingSpinner({ message = 'Loading...' }: LoadingSpinnerProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="p-8"
    >
      <CircularProgress size={40} className="mb-4" />
      <Typography variant="body1" color="textSecondary">
        {message}
      </Typography>
    </Box>
  )
}

export default LoadingSpinner
