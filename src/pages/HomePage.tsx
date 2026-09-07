import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { trendingDestinations, allCitiesList, allCountriesList, allAttractionsList } from '../data/destinations';
import CityCard from '../components/CityCard';
import AttractionCard from '../components/AttractionCard';
import TopoHero from '../components/TopoHero';
import AdSlot from '../components/AdSlot';

const GUIDE_ARTICLES = [
  { id: 1, title: '10 Days in Japan: The Complete Itinerary', titleFa: '۱۰ روز در ژاپن: راهنمای کامل', city: 'Tokyo', readTime: '12 min', imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop', tag: 'Itinerary' },
  { id: 2, title: 'Hidden Gems of Istanbul\'s Old City', titleFa: 'گنجینه‌های پنهان شهر قدیمی استانبول', city: 'Istanbul', readTime: '8 min', imageUrl: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&h=400&fit=crop', tag: 'Guide' },
  { id: 3, title: 'Paris in 3 Days: Art, Food & Neighborhoods', titleFa: 'پاریس در ۳ روز: هنر، غذا و محله‌ها', city: 'Paris', readTime: '10 min', imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop', tag: 'Guide' },
];

export default function HomePage() {
  const { t, lang } = useApp();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const categories = ['All', 'Europe', 'Asia', 'Americas', 'Middle East', 'Nature', 'City'];

  const filteredCities = activeFilter === 'All' ? allCitiesList :
    activeFilter === 'Europe' ? allCitiesList.filter(c => ['france', 'uk', 'italy', 'spain'].includes(c.countrySlug)) :
    activeFilter === 'Asia' ? allCitiesList.filter(c => ['japan', 'turkey', 'uae'].includes(c.countrySlug)) :
    activeFilter === 'Americas' ? allCitiesList.filter(c => c.countrySlug === 'usa') :
    activeFilter === 'Middle East' ? allCitiesList.filter(c => c.countrySlug === 'uae') :
    allCitiesList;

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      {/* ── Hero ── */}
      <TopoHero>
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24">
          <div className={`max-w-2xl transition-all duration-700 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Coordinate indicator */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#4A6741]"/>
              <span className="font-mono text-[#7A9E6B] text-xs tracking-widest uppercase">Global Travel Intelligence</span>
            </div>

            <h1 className="font-serif text-[#F5F1E9] font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {t.heroTitle}
            </h1>

            <p className="text-[#9BAEC4] text-lg leading-relaxed mb-10 max-w-xl">
              {t.heroSubtitle}
            </p>

            {/* Search */}
            <form onSubmit={handleSearch} className="flex gap-0 mb-8">
              <div className="relative flex-1">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A6741] pointer-events-none" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-[#F5F1E9] text-[#1A1A18] placeholder-[#7A8575] text-base px-4 py-4 pl-11 focus:outline-none focus:ring-2 focus:ring-[#4A6741]"
                  style={{ borderRadius: '4px 0 0 4px' }}
                  dir={lang === 'fa' ? 'rtl' : 'ltr'}
                />
              </div>
              <button
                type="submit"
                className="bg-[#E6DDCB] text-[#23412F] font-serif font-bold px-6 hover:bg-[#F5F1E9] transition-colors whitespace-nowrap"
                style={{ borderRadius: '0 4px 4px 0' }}
              >
                {lang === 'en' ? 'Search' : 'جستجو'}
              </button>
            </form>

            {/* Quick actions */}
            <div className="flex flex-wrap gap-3">
              <Link to="/explore" className="flex items-center gap-2 bg-[#23412F] border border-[#4A6741] text-[#E6DDCB] text-sm font-medium px-5 py-2.5 hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                {t.exploreDestinations}
              </Link>
              <Link to="/ai-planner" className="flex items-center gap-2 border border-[#4A6741] text-[#7A9E6B] text-sm font-medium px-5 py-2.5 hover:bg-[#1A2F1A] transition-colors" style={{ borderRadius: 4 }}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                {t.planWithAI}
              </Link>
              <button
                onClick={() => {
                  const rand = allCitiesList[Math.floor(Math.random() * allCitiesList.length)];
                  navigate(`/${rand.countrySlug}/${rand.slug}`);
                }}
                className="flex items-center gap-2 border border-[#4A6741]/50 text-[#9BAEC4] text-sm px-5 py-2.5 hover:border-[#4A6741] hover:text-[#7A9E6B] transition-colors" style={{ borderRadius: 4 }}>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {t.notSureWhere}
              </button>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 pt-8 border-t border-[#2A3F5C]/60 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            {[
              { value: '190+', label: 'Countries' },
              { value: '2,400+', label: 'Cities' },
              { value: '48K+', label: 'Attractions' },
              { value: '2', label: 'Languages' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-serif text-[#E6DDCB] font-bold text-2xl">{value}</div>
                <div className="font-mono text-[#4A6741] text-xs mt-0.5 tracking-wider">{label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </TopoHero>

      {/* ── Trending Destinations ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="font-mono text-[#4A6741] text-xs tracking-widest uppercase mb-2">↑ Most Visited 2026</div>
            <h2 className="font-serif text-[#1A1A18] font-bold text-3xl">{t.trendingDestinations}</h2>
          </div>
          <Link to="/explore" className="font-mono text-xs text-[#23412F] border border-[#C8B99A] hover:border-[#23412F] px-3 py-1.5 transition-colors hidden sm:block" style={{ borderRadius: 4 }}>
            {t.viewAll} →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingDestinations.slice(0, 6).map(({ city, rank, trend }) => (
            <div key={city.id} className="relative">
              <CityCard city={city} variant="featured" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="font-mono text-[10px] bg-[#1D2E44]/80 border border-[#2A3F5C] text-[#9BAEC4] px-2 py-0.5" style={{ borderRadius: 2 }}>
                  #{rank}
                </span>
                <span className="font-mono text-[10px] text-[#7A9E6B]">{trend}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ad Slot ── */}
      <div className="max-w-7xl mx-auto px-6">
        <AdSlot variant="leaderboard" slot="1111111111" />
      </div>

      {/* ── Explore by Region ── */}
      <section className="bg-[#F5F1E9] border-y border-[#C8B99A] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="font-mono text-[#4A6741] text-xs tracking-widest uppercase mb-2">Filter by Region</div>
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-[#1A1A18] font-bold text-3xl">{t.popularCities}</h2>
              <div className="hidden md:flex gap-1.5">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`font-mono text-xs px-3 py-1.5 border transition-colors ${
                      activeFilter === cat
                        ? 'bg-[#23412F] text-[#E6DDCB] border-[#23412F]'
                        : 'text-[#5A5A58] border-[#C8B99A] hover:border-[#23412F] bg-transparent'
                    }`}
                    style={{ borderRadius: 4 }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredCities.slice(0, 8).map(city => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Attractions ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="font-mono text-[#4A6741] text-xs tracking-widest uppercase mb-2">Landmarks & Sites</div>
            <h2 className="font-serif text-[#1A1A18] font-bold text-3xl">{t.attractions}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {allAttractionsList.slice(0, 8).map(attr => {
            const city = allCitiesList.find(c => c.slug === attr.citySlug);
            return city ? (
              <AttractionCard key={attr.id} attraction={attr} countrySlug={city.countrySlug} />
            ) : null;
          })}
        </div>
      </section>

      {/* ── Ad Slot ── */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <AdSlot variant="leaderboard" slot="2222222222" />
      </div>

      {/* ── AI Planner CTA ── */}
      <TopoHero dark>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-mono text-[#7A9E6B] text-xs tracking-widest uppercase mb-4">Powered by AI</div>
              <h2 className="font-serif text-[#F5F1E9] font-bold text-4xl leading-tight mb-4">{t.aiPlannerTitle}</h2>
              <p className="text-[#9BAEC4] leading-relaxed mb-8">{t.aiPlannerSubtitle}</p>
              <div className="flex gap-3">
                <Link to="/ai-planner" className="bg-[#23412F] border border-[#4A6741] text-[#E6DDCB] font-serif font-bold px-8 py-3 hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>
                  {t.planWithAI}
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { step: '01', label: 'Choose your destination', icon: '📍' },
                { step: '02', label: 'Tell us your interests & pace', icon: '🎯' },
                { step: '03', label: 'Get a smart day-by-day itinerary', icon: '📋' },
                { step: '04', label: 'Edit, save & navigate', icon: '✈️' },
              ].map(({ step, label, icon }) => (
                <div key={step} className="flex items-center gap-4 bg-[#253B55] border border-[#2A3F5C] p-4" style={{ borderRadius: 4 }}>
                  <span className="font-mono text-[#4A6741] text-xs w-5 shrink-0">{step}</span>
                  <span className="text-lg">{icon}</span>
                  <span className="text-[#C8B99A] text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TopoHero>

      {/* ── Travel Guides ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="font-mono text-[#4A6741] text-xs tracking-widest uppercase mb-2">Editorial</div>
            <h2 className="font-serif text-[#1A1A18] font-bold text-3xl">{t.travelGuides}</h2>
          </div>
          <Link to="/guides" className="font-mono text-xs text-[#23412F] border border-[#C8B99A] hover:border-[#23412F] px-3 py-1.5 transition-colors hidden sm:block" style={{ borderRadius: 4 }}>
            {t.viewAll} →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIDE_ARTICLES.map(article => (
            <Link key={article.id} to="/guides" className="field-card group block hover:border-[#4A6741] transition-all">
              <div className="aspect-[16/9] overflow-hidden bg-[#C8B99A]" style={{ borderRadius: '4px 4px 0 0' }}>
                <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-90" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[9px] bg-[#23412F] text-[#7A9E6B] px-2 py-0.5" style={{ borderRadius: 2 }}>{article.tag}</span>
                  <span className="font-mono text-[10px] text-[#7A9E6B]">{article.city}</span>
                  <span className="font-mono text-[10px] text-[#C8B99A] ml-auto">{article.readTime} read</span>
                </div>
                <h3 className="font-serif text-[#1A1A18] font-bold leading-snug group-hover:text-[#23412F] transition-colors">
                  {lang === 'fa' ? article.titleFa : article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Countries ── */}
      <section className="bg-[#1D2E44] border-y border-[#2A3F5C] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="font-mono text-[#4A6741] text-xs tracking-widest uppercase mb-2">Browse by Country</div>
            <h2 className="font-serif text-[#F5F1E9] font-bold text-3xl">{t.exploreWorld}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {allCountriesList.map(country => (
              <Link
                key={country.id}
                to={`/${country.slug}`}
                className="field-card group bg-[#253B55] border-[#2A3F5C] hover:border-[#4A6741] flex flex-col items-center p-3 text-center transition-all"
              >
                <div className="w-12 h-8 overflow-hidden bg-[#1D2E44] mb-2" style={{ borderRadius: 2 }}>
                  <img src={country.heroImage} alt={country.name} className="w-full h-full object-cover saturate-75" />
                </div>
                <p className="font-serif text-[#C8B99A] text-xs font-bold leading-tight">{lang === 'fa' ? country.nameFa : country.name}</p>
                <p className="font-mono text-[9px] text-[#4A6741] mt-0.5">{country.continent}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
