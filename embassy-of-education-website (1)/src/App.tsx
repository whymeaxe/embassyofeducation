import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalBackground } from './components/GlobalBackground';
import { PremiumCursor } from './components/PremiumCursor';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

// Route Pages
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Visas } from './pages/Visas';
import { Financing } from './pages/Financing';
import { WhyUs } from './pages/WhyUs';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between relative selection:bg-purple-600/30 selection:text-white overflow-x-hidden">
        
        {/* Full Screen Initial Veil */}
        <PageLoader />

        {/* Ambient Infinite Canvas */}
        <GlobalBackground />

        {/* Custom Gold/Purple Cursor Ring */}
        <PremiumCursor />

        {/* Dynamic Navigation Architecture */}
        <Navbar />

        {/* Primary Route Mapping */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/visas" element={<Visas />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Actions */}
        <WhatsAppFloat />

      </div>
    </Router>
  );
}
