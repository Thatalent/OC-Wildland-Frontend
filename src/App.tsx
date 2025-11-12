import { Routes, Route } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import Home from './pages/Home'
import About from './pages/About'
import Training from './pages/Training'
import Header from './pages/Header'
import ProgramDetail from './pages/ProgramDetail'

function App() {
  return (
    <Box className="min-h-screen bg-gray-50">
      <Header />

      <Container maxWidth="lg" className="py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/wildlandstraining/:slug" element={<ProgramDetail />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
