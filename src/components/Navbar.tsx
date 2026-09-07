import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { t, lang, setLang } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#1D2E44] border-b border-[#2A3F5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-8 h-8 bg-[#23412F] border border-[#4A6741] flex items-center justify-center" style={{ borderRadius: 4 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" stroke="#E6DDCB" strokeWidth="1.5"/>
              <circle cx="8" cy="8" r="6" stroke="#E6DDCB" strokeWidth="0.75" strokeDasharray="2 1.5"/>
              <line x1="8" y1="2" x2="8" y2="4" stroke="#E6DDCB" strokeWidth="1.5"/>
              <line x1="8" y1="12" x2="8" y2="14" stroke="#E6DDCB" strokeWidth="1.5"/>
              <line x1="2" y1="8" x2="4" y2="8" stroke="#E6DDCB" strokeWidth="1.5"/>
              <line x1="12" y1="8" x2="14" y2="8" stroke="#E6DDCB" strokeWidth="1.5"/>
            </svg>
          </div>
          <div>
            <span className="font-serif text-[#E6DDCB] font-bold text-base tracking-wide leading-none block">Where to Go؟</span>
            <span className="font-mono text-[#7A9E6B] text-[9px] tracking-widest leading-none">کجا برم؟</span>
          </div>
        </Link>

        {/* Search bar — desktop */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-[#253B55] border border-[#2A3F5C] text-[#E6DDCB] placeholder-[#6B7F94] text-sm px-4 py-2 pr-10 focus:outline-none focus:border-[#7A9E6B] transition-colors"
              style={{ borderRadius: 4 }}
              dir={lang === 'fa' ? 'rtl' : 'ltr'}
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7F94] hover:text-[#E6DDCB] transition-colors">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>
        </form>

        {/* Nav links — desktop */}
        <nav className="hidden lg:flex items-center gap-1 ml-auto">
          {[
            { path: '/', label: t.home },
            { path: '/explore', label: t.explore },
            { path: '/ai-planner', label: t.aiPlanner },
            { path: '/guides', label: t.travelGuides },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                isActive(path)
                  ? 'text-[#E6DDCB] bg-[#23412F]'
                  : 'text-[#9BAEC4] hover:text-[#E6DDCB]'
              }`}
              style={{ borderRadius: 4 }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2 ml-auto lg:ml-2">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
            className="font-mono text-xs text-[#9BAEC4] hover:text-[#E6DDCB] border border-[#2A3F5C] hover:border-[#4A6741] px-2 py-1 transition-colors"
            style={{ borderRadius: 4 }}
          >
            {lang === 'en' ? 'FA' : 'EN'}
          </button>

          <Link
            to="/dashboard"
            className="hidden sm:flex items-center gap-1.5 text-[#9BAEC4] hover:text-[#E6DDCB] text-sm transition-colors px-2 py-1"
          >
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="font-mono text-xs hidden lg:block">{t.signIn}</span>
          </Link>

          {/* Mobile menu */}
          <button
            className="lg:hidden text-[#9BAEC4] hover:text-[#E6DDCB] p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen
                ? <path d="M18 6 6 18M6 6l12 12"/>
                : <path d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1A2638] border-t border-[#2A3F5C] px-4 py-4 space-y-1">
          <form onSubmit={handleSearch} className="mb-3">
            <div className="relative">
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-[#253B55] border border-[#2A3F5C] text-[#E6DDCB] placeholder-[#6B7F94] text-sm px-4 py-2 focus:outline-none"
                style={{ borderRadius: 4 }}
              />
            </div>
          </form>
          {[
            { path: '/', label: t.home },
            { path: '/explore', label: t.explore },
            { path: '/ai-planner', label: t.aiPlanner },
            { path: '/guides', label: t.travelGuides },
            { path: '/dashboard', label: t.myTrips },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="block px-3 py-2 text-sm text-[#9BAEC4] hover:text-[#E6DDCB] hover:bg-[#253B55] transition-colors"
              style={{ borderRadius: 4 }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
