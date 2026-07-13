import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/v2/HomePage';
import AboutPage from './pages/v2/AboutPage';
import AcademicsPage from './pages/v2/AcademicsPage';
import GalleryPage from './pages/v2/GalleryPage';
import EventsPage from './pages/v2/EventsPage';
import ContactPage from './pages/v2/ContactPage';
import AdmissionsPage from './pages/v2/AdmissionsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;