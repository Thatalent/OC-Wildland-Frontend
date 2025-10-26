import { Routes, Route } from 'react-router-dom'
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material'
import Home from './pages/Home'
import About from './pages/About'
import Header from './pages/Header'

function App() {
  return (
    <Box className="min-h-screen bg-gray-50">
      <Header />

      <Container maxWidth="lg" className="py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
