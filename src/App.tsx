import { Routes, Route } from 'react-router-dom'
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material'
import Home from './pages/Home'
import About from './pages/About'
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from './lib/apollo'


function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Box className="min-h-screen bg-gray-50">
        <AppBar position="static" elevation={0} className="bg-white shadow-sm">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="text-gray-800">
              OC Wildland
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" className="py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </Box>
    </ApolloProvider>
  )
}

export default App
