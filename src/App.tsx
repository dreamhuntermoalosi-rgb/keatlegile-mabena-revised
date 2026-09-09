import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { WhatsAppModalProvider } from './context/WhatsAppModalContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Speaking } from './pages/Speaking';
import { Mentorship } from './pages/Mentorship';
import { Books } from './pages/Books';
import { Impact } from './pages/Impact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { BookKeatlegile } from './pages/BookKeatlegile';

export default function App() {
  return (
    <BrowserRouter>
      <WhatsAppModalProvider>
        <div className="min-h-screen flex flex-col bg-white text-[#1C1C1C]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/career-development" element={<Navigate to="/mentorship" replace />} />
              <Route path="/books" element={<Books />} />
              <Route path="/insights" element={<Navigate to="/" replace />} />
              <Route path="/insights/:slug" element={<Navigate to="/" replace />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/media" element={<Navigate to="/" replace />} />
              <Route path="/events" element={<Navigate to="/" replace />} />
              <Route path="/services" element={<Navigate to="/speaking" replace />} />
              <Route path="/governance-compliance" element={<Navigate to="/speaking" replace />} />
              <Route path="/contact" element={<Navigate to="/book-keatlegile" replace />} />
              <Route path="/start-a-conversation" element={<Navigate to="/book-keatlegile" replace />} />
              <Route path="/book-keatlegile" element={<BookKeatlegile />} />
              <Route path="/booking" element={<BookKeatlegile />} />
              <Route path="/request-consultation" element={<BookKeatlegile />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloatingButton />
        </div>
      </WhatsAppModalProvider>
    </BrowserRouter>
  );
}
