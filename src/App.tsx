import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import CountryPage from './pages/CountryPage';
import CityPage from './pages/CityPage';
import AttractionPage from './pages/AttractionPage';
import AIPlanner from './pages/AIPlanner';
import SearchPage from './pages/SearchPage';
import AuthPage from './pages/AuthPage';
import TripDashboard from './pages/TripDashboard';
import GuidesPage from './pages/GuidesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <div className="font-mono text-[#4A6741] text-xs tracking-widest uppercase mb-4">404 — DESTINATION NOT FOUND</div>
      <h1 className="font-serif text-[#1A1A18] text-4xl font-bold mb-4">This page doesn't exist</h1>
      <p className="text-[#5A5A58] mb-8">We never show placeholder data — if we don't have it, we say so.</p>
      <a href="/" className="bg-[#23412F] text-[#E6DDCB] font-mono text-xs px-8 py-3 hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>← Back to Home</a>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Auth — no layout wrapper (full-screen) */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Dashboard — no footer */}
          <Route path="/dashboard" element={<Layout withFooter={false}><TripDashboard /></Layout>} />

          {/* Main routes with layout */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/explore" element={<Layout><ExplorePage /></Layout>} />
          <Route path="/search" element={<Layout><SearchPage /></Layout>} />
          <Route path="/ai-planner" element={<Layout><AIPlanner /></Layout>} />
          <Route path="/guides" element={<Layout><GuidesPage /></Layout>} />
          <Route path="/privacy" element={<Layout><PrivacyPolicyPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

          {/* Destination hierarchy */}
          <Route path="/:countrySlug" element={<Layout><CountryPage /></Layout>} />
          <Route path="/:countrySlug/:citySlug" element={<Layout><CityPage /></Layout>} />
          <Route path="/:countrySlug/:citySlug/:attractionSlug" element={<Layout><AttractionPage /></Layout>} />

          {/* 404 */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
