// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Spacecrafts from '../pages/Spacecrafts';
import SpacecraftDetail from '../pages/SpacecraftDetail';
import Planets from '../pages/Planets';
import Navbar from '../components/Navbar';
import { SpacecraftProvider } from '../context/SpacecraftContext';

export default function AppRouter() {
  return (
    <SpacecraftProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spacecrafts" element={<Spacecrafts />} />
          <Route path="/spacecrafts/:id" element={<SpacecraftDetail />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </SpacecraftProvider>
  );
}
