import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { attractions, cities } from '../data/destinations';
import Breadcrumb from '../components/Breadcrumb';
import AdSlot from '../components/AdSlot';

export default function AttractionPage() {
  const { countrySlug, citySlug, attractionSlug } = useParams<{ countrySlug: string; citySlug: string; attractionSlug: string }>();
  const { t, lang, toggleSaved, isSaved } = useApp();

  const attraction = attractionSlug ? attractions[attractionSlug] : undefined;
  const city = citySlug ? cities[citySlug] : undefined;

  if (!attraction || !city || attraction.citySlug !== citySlug || city.countrySlug !== countrySlug) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <div className="font-mono text-[#4A6741] text-xs tracking-widest uppercase mb-4">404 — NOT FOUND</div>
        <h1 className="font-serif text-[#1A1A18] text-3xl font-bold mb-4">Attraction Not Found</h1>
        <p className="text-[#5A5A58] mb-8">This attraction doesn't exist or isn't associated with the requested city. Data integrity is guaranteed.</p>
        <Link to="/" className="bg-[#23412F] text-[#E6DDCB] font-mono text-xs px-6 py-3 hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>{t.back} to Home</Link>
      </div>
    );
  }

  const saved = isSaved(attraction.id);
  const name = lang === 'fa' ? attraction.nameFa : attraction.name;
  const cityName = lang === 'fa' ? city.nameFa : city.name;
  const countryName = lang === 'fa' ? city.countryFa : city.country;
  const desc = lang === 'fa' ? attraction.descriptionFa : attraction.description;

  const nearbyAttractions = city.attractions.filter(a => a.id !== attraction.id);

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <div className="relative h-[480px] bg-[#1D2E44] overflow-hidden">
        <img src={attraction.imageUrl} alt={name} className="w-full h-full object-cover saturate-90 brightness-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1520]/90 via-transparent to-transparent"/>
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <Breadcrumb items={[
            { label: t.home_bc, path: '/' },
            { label: countryName, path: `/${countrySlug}` },
            { label: cityName, path: `/${countrySlug}/${citySlug}` },
            { label: name },
          ]} />
          <div className="mt-3">
            <span className="font-mono text-[9px] bg-[#23412F]/80 text-[#7A9E6B] border border-[#4A6741]/60 px-2 py-1 mr-2" style={{ borderRadius: 2 }}>{attraction.category}</span>
          </div>
          <h1 className="font-serif text-[#F5F1E9] font-bold mt-2 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{name}</h1>
          <div className="font-mono text-[#7A9E6B] text-xs mt-2">
            {attraction.coordinates.lat.toFixed(4)}° N &nbsp; {Math.abs(attraction.coordinates.lng).toFixed(4)}° {attraction.coordinates.lng > 0 ? 'E' : 'W'}
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="bg-[#F5F1E9] border-b border-[#C8B99A]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-2">
          <button
            onClick={() => toggleSaved(attraction.id)}
            className={`flex items-center gap-1.5 font-mono text-xs px-4 py-2 border transition-colors ${saved ? 'bg-[#23412F] border-[#4A6741] text-[#7A9E6B]' : 'border-[#C8B99A] text-[#5A5A58] hover:border-[#23412F]'}`}
            style={{ borderRadius: 4 }}
          >
            <svg width="11" height="11" fill={saved ? '#7A9E6B' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            {saved ? t.saved_label : t.savePlace}
          </button>
          <Link to="/ai-planner" className="flex items-center gap-1.5 font-mono text-xs px-4 py-2 border border-[#C8B99A] text-[#5A5A58] hover:border-[#23412F] transition-colors" style={{ borderRadius: 4 }}>
            + {t.addToTrip}
          </Link>
          <button className="flex items-center gap-1.5 font-mono text-xs px-4 py-2 border border-[#C8B99A] text-[#5A5A58] hover:border-[#23412F] transition-colors" style={{ borderRadius: 4 }}>
            ↗ {t.share}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" fill={i < Math.round(attraction.rating) ? '#C87941' : 'none'} stroke="#C87941" strokeWidth="2" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <span className="font-serif font-bold text-[#1A1A18]">{attraction.rating}</span>
              <span className="font-mono text-xs text-[#7A8575]">({attraction.reviewCount.toLocaleString()} reviews)</span>
            </div>

            {/* Description */}
            <div>
              <p className="text-[#3A3A38] leading-relaxed text-base">{desc}</p>
            </div>

            {/* Ad Slot */}
            <AdSlot variant="in-feed" slot="3333333333" />

            {/* Key details grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: t.openingHours, value: attraction.openingHours, icon: '⏰' },
                { label: t.ticketPrice, value: attraction.ticketPrice, icon: '🎫' },
                { label: t.duration, value: attraction.duration, icon: '⏱' },
                { label: t.coordinates, value: `${attraction.coordinates.lat.toFixed(2)}°N ${Math.abs(attraction.coordinates.lng).toFixed(2)}°${attraction.coordinates.lng > 0 ? 'E' : 'W'}`, icon: '📍' },
              ].map(({ label, value, icon }) => (
                <div key={label} className="field-card p-3">
                  <div className="text-lg mb-1">{icon}</div>
                  <div className="font-mono text-[9px] text-[#7A9E6B] uppercase tracking-wider mb-1">{label}</div>
                  <div className="text-sm text-[#3A3A38] font-medium">{value}</div>
                </div>
              ))}
            </div>

            {/* Reviews placeholder */}
            <div>
              <h3 className="font-serif text-[#1A1A18] font-bold text-xl mb-4">{t.reviews}</h3>
              <div className="space-y-4">
                {[
                  { author: 'Sarah M.', rating: 5, date: 'Jan 2026', text: `${name} exceeded all my expectations. The experience was truly unforgettable and well worth the visit.` },
                  { author: 'Kenji T.', rating: 4, date: 'Dec 2025', text: `One of the highlights of my entire trip. Would strongly recommend booking tickets in advance.` },
                  { author: 'Fatima A.', rating: 5, date: 'Nov 2025', text: `Absolutely stunning. The history and atmosphere here is unlike anything I've ever experienced.` },
                ].map((review, i) => (
                  <div key={i} className="field-card p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="font-serif font-bold text-[#1A1A18] text-sm">{review.author}</span>
                        <span className="font-mono text-[#C8B99A] text-xs ml-2">{review.date}</span>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <svg key={j} width="10" height="10" fill={j < review.rating ? '#C87941' : 'none'} stroke="#C87941" strokeWidth="2" viewBox="0 0 24 24">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-[#5A5A58] leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Map */}
            <div className="field-card overflow-hidden">
              <div className="aspect-square bg-[#1D2E44] flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `linear-gradient(#4A6741 1px, transparent 1px), linear-gradient(90deg, #4A6741 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}/>
                <div className="relative text-center">
                  <div className="w-5 h-5 bg-[#C87941] rounded-full mx-auto mb-2 relative">
                    <div className="absolute inset-0 bg-[#C87941] rounded-full animate-ping opacity-50"/>
                  </div>
                  <div className="font-mono text-[#7A9E6B] text-xs leading-relaxed">
                    {attraction.coordinates.lat.toFixed(6)}° N<br/>
                    {Math.abs(attraction.coordinates.lng).toFixed(6)}°<br/>
                    {attraction.coordinates.lng > 0 ? 'E' : 'W'}
                  </div>
                </div>
              </div>
              <div className="p-3 flex gap-2">
                <a href={`https://maps.google.com/?q=${attraction.coordinates.lat},${attraction.coordinates.lng}`} target="_blank" rel="noopener noreferrer"
                  className="flex-1 bg-[#23412F] text-[#E6DDCB] font-mono text-xs px-3 py-2 text-center hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>
                  {t.getDirections}
                </a>
                <button className="border border-[#C8B99A] text-[#5A5A58] font-mono text-xs px-3 py-2 hover:border-[#23412F] transition-colors" style={{ borderRadius: 4 }}>
                  {t.viewOnMap}
                </button>
              </div>
            </div>

            {/* Nearby */}
            {nearbyAttractions.length > 0 && (
              <div className="field-card p-4">
                <h3 className="font-mono text-xs text-[#4A6741] uppercase tracking-widest mb-3">{t.nearbyAttractions}</h3>
                <div className="space-y-3">
                  {nearbyAttractions.map(a => (
                    <Link key={a.id} to={`/${countrySlug}/${citySlug}/${a.slug}`} className="flex gap-3 group">
                      <div className="w-14 h-10 overflow-hidden bg-[#C8B99A] shrink-0" style={{ borderRadius: 4 }}>
                        <img src={a.imageUrl} alt={lang === 'fa' ? a.nameFa : a.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform saturate-90" />
                      </div>
                      <div>
                        <p className="font-serif text-[#1A1A18] text-sm font-bold group-hover:text-[#23412F] transition-colors">{lang === 'fa' ? a.nameFa : a.name}</p>
                        <p className="font-mono text-[9px] text-[#7A8575]">{a.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to city */}
            <Link to={`/${countrySlug}/${citySlug}`} className="field-card flex items-center justify-between p-4 hover:border-[#23412F] transition-all group">
              <div>
                <div className="font-mono text-[9px] text-[#7A9E6B] uppercase tracking-wider mb-0.5">Back to city</div>
                <div className="font-serif text-[#1A1A18] font-bold">{cityName}</div>
              </div>
              <svg width="14" height="14" fill="none" stroke="#C8B99A" strokeWidth="2" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
