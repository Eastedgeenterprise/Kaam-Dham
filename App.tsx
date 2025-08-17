
import React from 'https://esm.sh/react@18.2.0';
import { HashRouter, Routes, Route } from 'https://esm.sh/react-router-dom@6.25.1';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import ServiceDetailPage from './pages/ServiceDetailPage.tsx';
import AboutUsPage from './pages/AboutUsPage.tsx';
import ContactPage from './pages/ContactPage.tsx';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceName" element={<ServiceDetailPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;