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
import { CareerDevelopment } from './pages/CareerDevelopment';
import { Books } from './pages/Books';
import { Impact } from './pages/Impact';
import { Media } from './pages/Media';
import { Events } from './pages/Events';
import { ServicesPage } from './pages/Services';
import { InsightsPage } from './pages/Insights';
import { ArticleDetail } from './pages/ArticleDetail';
import { StartConversation } from './pages/StartConversation';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

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
              <Route path="/career-development" element={<CareerDevelopment />} />
              <Route path="/books" element={<Books />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/insights/:slug" element={<ArticleDetail />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/media" element={<Media />} />
              <Route path="/events" element={<Events />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<StartConversation />} />
              <Route path="/start-a-conversation" element={<StartConversation />} />
              <Route path="/book-keatlegile" element={<StartConversation />} />
              <Route path="/request-consultation" element={<StartConversation />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
