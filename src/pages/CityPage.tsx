import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { cities } from '../data/destinations';
import AttractionCard from '../components/AttractionCard';
import Breadcrumb from '../components/Breadcrumb';
import AdSlot from '../components/AdSlot';

const TABS = ['overview', 'attractions', 'neighborhoods', 'restaurants', 'travelInfo'];

export default function CityPage() {
  const { countrySlug, citySlug } = useParams<{ countrySlug: string; citySlug: string }>();
  const { t, lang, toggleSaved, isSaved } = useApp();
  const [activeTab, setActiveTab] = useState('overview');
  const [galleryIndex, setGalleryIndex] = useState(0);

  const city = citySlug ? cities[citySlug] : undefined;

  if (!city || city.countrySlug !== countrySlug) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <div className="font-mono text-[#4A6741] text-xs tracking-widest uppercase mb-4">404 — NOT FOUND</div>
        <h1 className="font-serif text-[#1A1A18] text-3xl font-bold mb-4">Destination Not Found</h1>
        <p className="text-[#5A5A58] mb-8">The city you're looking for doesn't exist in our database. We never show placeholder data.</p>
        <Link to="/" className="bg-[#23412F] text-[#E6DDCB] font-mono text-xs px-6 py-3 hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>{t.back} to Home</Link>
      </div>
    );
  }

  const saved = isSaved(city.id);
  const name = lang === 'fa' ? city.nameFa : city.name;
  const country = lang === 'fa' ? city.countryFa : city.country;
  const desc = lang === 'fa' ? city.descriptionFa : city.description;
  const tagline = lang === 'fa' ? city.taglineFa : city.tagline;

  const tabLabels: Record<string, string> = {
    overview: t.overview,
    attractions: t.attractions,
    neighborhoods: t.neighborhoods,
    restaurants: t.restaurants,
    travelInfo: t.travelInfo,
  };

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      {/* ── Hero ── */}
      <div className="relative h-[520px] bg-[#1D2E44] overflow-hidden">
        <img
          src={city.heroImage}
          alt={name}
          className="w-full h-full object-cover saturate-90 brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1520]/90 via-[#0A1520]/30 to-transparent"/>

        {/* Map grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(#E6DDCB 1px, transparent 1px), linear-gradient(90deg, #E6DDCB 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}/>

        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <Breadcrumb items={[
            { label: t.home_bc, path: '/' },
            { label: t.countries, path: '/explore' },
            { label: country, path: `/${city.countrySlug}` },
            { label: name },
          ]} />
          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[#7A9E6B] text-xs tracking-wider mb-2">
                {city.coordinates.lat.toFixed(4)}° N &nbsp; {Math.abs(city.coordinates.lng).toFixed(4)}° {city.coordinates.lng > 0 ? 'E' : 'W'}
              </div>
              <h1 className="font-serif text-[#F5F1E9] font-bold leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                {name}
              </h1>
              <p className="text-[#C8B99A] text-lg mt-1">{tagline}</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                onClick={() => toggleSaved(city.id)}
                className={`flex items-center gap-2 border px-4 py-2 text-sm font-mono transition-colors ${saved ? 'bg-[#23412F] border-[#4A6741] text-[#7A9E6B]' : 'border-[#4A6741] text-[#C8B99A] hover:bg-[#1A2F1A]'}`}
                style={{ borderRadius: 4 }}
              >
                <svg width="13" height="13" fill={saved ? '#7A9E6B' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
                {saved ? t.saved_label : t.savePlace}
              </button>
              <Link to="/ai-planner" className="bg-[#23412F] border border-[#4A6741] text-[#E6DDCB] px-4 py-2 text-sm font-mono hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>
                {t.planWithAI}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Quick Info Bar ── */}
      <div className="bg-[#1D2E44] border-b border-[#2A3F5C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#2A3F5C]">
            {[
              { label: 'Currency', value: city.currency },
              { label: 'Language', value: city.language },
              { label: 'Best Time', value: city.bestTimeToVisit },
              { label: 'Timezone', value: city.timezone },
            ].map(({ label, value }) => (
              <div key={label} className="px-5 py-4">
                <div className="font-mono text-[#4A6741] text-[10px] uppercase tracking-wider mb-0.5">{label}</div>
                <div className="text-[#C8B99A] text-sm">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="bg-[#F5F1E9] border-b border-[#C8B99A] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto scrollbar-hidden">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-4 border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'border-[#23412F] text-[#23412F]'
                    : 'border-transparent text-[#7A8575] hover:text-[#23412F]'
                }`}
              >
                {tabLabels[tab]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-4">{t.overview}</h2>
                <p className="text-[#3A3A38] leading-relaxed text-base">{desc}</p>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="font-mono text-xs text-[#4A6741] uppercase tracking-widest mb-3">Gallery</h3>
                <div className="grid grid-cols-3 gap-2">
                  {city.galleryImages.map((img, i) => (
                    <button key={i} onClick={() => setGalleryIndex(i)} className={`relative aspect-[4/3] overflow-hidden bg-[#C8B99A] ${galleryIndex === i ? 'ring-2 ring-[#23412F]' : ''}`} style={{ borderRadius: 4 }}>
                      <img src={img} alt={`${name} gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 saturate-90" />
                    </button>
                  ))}
                </div>
                <div className="mt-2 overflow-hidden" style={{ borderRadius: 4 }}>
                  <img src={city.galleryImages[galleryIndex]} alt={`${name} main`} className="w-full h-64 object-cover saturate-90" />
                </div>
              </div>

              {/* Weather */}
              <div className="field-card p-5">
                <h3 className="font-mono text-xs text-[#4A6741] uppercase tracking-widest mb-4">{t.weather}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(city.weather).map(([season, info]) => (
                    <div key={season} className="text-center">
                      <div className="font-mono text-[10px] text-[#7A9E6B] uppercase mb-1">{season}</div>
                      <div className="text-sm text-[#3A3A38]">{info}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="field-card p-5">
                <h3 className="font-mono text-xs text-[#4A6741] uppercase tracking-widest mb-4">{t.travelInfo}</h3>
                <div className="space-y-3">
                  {[
                    { label: t.bestTime, value: lang === 'fa' ? city.bestTimeToVisitFa : city.bestTimeToVisit },
                    { label: t.transportation, value: lang === 'fa' ? city.transportationFa : city.transportation },
                    { label: 'Currency', value: city.currency },
                    { label: 'Language', value: city.language },
                    { label: 'Timezone', value: city.timezone },
                  ].map(({ label, value }) => (
                    <div key={label} className="border-b border-[#E0D9C8] pb-3 last:border-0 last:pb-0">
                      <div className="font-mono text-[10px] text-[#7A9E6B] uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="text-sm text-[#3A3A38]">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="field-card p-5">
                <h3 className="font-mono text-xs text-[#4A6741] uppercase tracking-widest mb-4">{t.travelTips}</h3>
                <ul className="space-y-2">
                  {(lang === 'fa' ? city.travelTipsFa : city.travelTips).map((tip, i) => (
                    <li key={i} className="flex gap-2 text-sm text-[#3A3A38]">
                      <span className="font-mono text-[#C8B99A] shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="field-card overflow-hidden">
                <div className="aspect-video bg-[#1D2E44] flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `linear-gradient(#4A6741 1px, transparent 1px), linear-gradient(90deg, #4A6741 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }}/>
                  <div className="relative text-center">
                    <div className="w-4 h-4 bg-[#C87941] rounded-full mx-auto mb-2 animate-pulse"/>
                    <div className="font-mono text-[#7A9E6B] text-xs">
                      {city.coordinates.lat.toFixed(4)}° N<br/>
                      {Math.abs(city.coordinates.lng).toFixed(4)}° {city.coordinates.lng > 0 ? 'E' : 'W'}
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-[#F5F1E9]">
                  <p className="font-mono text-xs text-[#7A8575] text-center">{name} — {country}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Attractions */}
        {activeTab === 'attractions' && (
          <div>
            <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-6">{t.attractions} in {name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {city.attractions.map(attr => (
                <AttractionCard key={attr.id} attraction={attr} countrySlug={city.countrySlug} />
              ))}
            </div>
            <div className="mt-6">
              <AdSlot variant="leaderboard" slot="4444444444" />
            </div>
          </div>
        )}

        {/* Neighborhoods */}
        {activeTab === 'neighborhoods' && (
          <div>
            <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-6">{t.neighborhoods} of {name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {city.neighborhoods.map(n => (
                <div key={n.id} className="field-card overflow-hidden group">
                  <div className="aspect-[4/3] overflow-hidden bg-[#C8B99A]">
                    <img src={n.imageUrl} alt={n.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-90"/>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-serif text-[#1A1A18] font-bold text-base">{lang === 'fa' ? n.nameFa : n.name}</h3>
                      <span className="font-mono text-[9px] bg-[#E0D9C8] text-[#5A5A58] px-2 py-0.5 shrink-0" style={{ borderRadius: 2 }}>{n.vibe}</span>
                    </div>
                    <p className="text-sm text-[#5A5A58] leading-relaxed">
                      {lang === 'fa' ? n.descriptionFa : n.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Restaurants */}
        {activeTab === 'restaurants' && (
          <div>
            <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-6">{t.restaurants} in {name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {city.restaurants.map(r => (
                <div key={r.id} className="field-card group overflow-hidden hover:border-[#4A6741] transition-all">
                  <div className="aspect-[16/9] overflow-hidden bg-[#C8B99A]">
                    <img src={r.imageUrl} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-90"/>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-serif text-[#1A1A18] font-bold">{lang === 'fa' ? r.nameFa : r.name}</h3>
                      <span className="font-mono text-xs text-[#C87941] shrink-0">{r.priceRange}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] bg-[#E0D9C8] text-[#5A5A58] px-1.5 py-0.5" style={{ borderRadius: 2 }}>{r.cuisine}</span>
                      <span className="font-mono text-[10px] text-[#4A6741]">★ {r.rating}</span>
                    </div>
                    <p className="text-sm text-[#5A5A58]">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Travel Info */}
        {activeTab === 'travelInfo' && (
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            <div className="field-card p-6">
              <h3 className="font-serif text-[#1A1A18] font-bold text-xl mb-4">{t.bestTime}</h3>
              <p className="text-[#3A3A38]">{lang === 'fa' ? city.bestTimeToVisitFa : city.bestTimeToVisit}</p>
            </div>
            <div className="field-card p-6">
              <h3 className="font-serif text-[#1A1A18] font-bold text-xl mb-4">{t.transportation}</h3>
              <p className="text-[#3A3A38] text-sm leading-relaxed">{lang === 'fa' ? city.transportationFa : city.transportation}</p>
            </div>
            <div className="field-card p-6 md:col-span-2">
              <h3 className="font-serif text-[#1A1A18] font-bold text-xl mb-4">{t.travelTips}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {(lang === 'fa' ? city.travelTipsFa : city.travelTips).map((tip, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-[#F5F1E9] border border-[#E0D9C8]" style={{ borderRadius: 4 }}>
                    <span className="font-mono text-[#C8B99A] text-sm shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm text-[#3A3A38]">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
