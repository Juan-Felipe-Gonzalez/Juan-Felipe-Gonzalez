import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import DeveloperPage from './pages/DeveloperPage';

function AppContent() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DeveloperPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </Router>
  );
}

export default App;
