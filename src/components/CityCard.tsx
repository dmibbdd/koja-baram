import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import type { City } from '../data/destinations';

interface CityCardProps {
  city: City;
  variant?: 'default' | 'compact' | 'featured';
}

export default function CityCard({ city, variant = 'default' }: CityCardProps) {
  const { lang, t, toggleSaved, isSaved } = useApp();
  const saved = isSaved(city.id);
  const name = lang === 'fa' ? city.nameFa : city.name;
  const country = lang === 'fa' ? city.countryFa : city.country;
  const tagline = lang === 'fa' ? city.taglineFa : city.tagline;

  if (variant === 'compact') {
    return (
      <Link to={`/${city.countrySlug}/${city.slug}`} className="field-card group flex gap-3 p-3 hover:border-[#4A6741] transition-all">
        <div className="w-16 h-16 shrink-0 overflow-hidden bg-[#C8B99A]" style={{ borderRadius: 4 }}>
          <img src={city.heroImage} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-90" />
        </div>
        <div className="min-w-0">
          <p className="font-serif text-[#1A1A18] font-bold text-sm leading-tight truncate">{name}</p>
          <p className="font-mono text-[#4A6741] text-[10px] mt-0.5">{country}</p>
          <p className="text-xs text-[#5A5A58] mt-1 line-clamp-1">{tagline}</p>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link to={`/${city.countrySlug}/${city.slug}`} className="group relative overflow-hidden bg-[#1D2E44] block" style={{ borderRadius: 4 }}>
        <div className="aspect-[4/3] overflow-hidden">
          <img src={city.heroImage} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-90 brightness-75" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-[#0D1C2A]/80 via-transparent to-transparent">
          <div className="font-mono text-[#7A9E6B] text-[10px] mb-1 tracking-wider">
            {city.coordinates.lat.toFixed(4)}°N {Math.abs(city.coordinates.lng).toFixed(4)}°{city.coordinates.lng > 0 ? 'E' : 'W'}
          </div>
          <h3 className="font-serif text-[#F5F1E9] text-xl font-bold leading-tight">{name}</h3>
          <p className="text-[#C8B99A] text-xs mt-1 font-mono">{country}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {city.topCategories.slice(0, 3).map(cat => (
              <span key={cat} className="font-mono text-[10px] bg-[#23412F]/80 text-[#7A9E6B] border border-[#4A6741]/60 px-2 py-0.5" style={{ borderRadius: 2 }}>
                {cat}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={e => { e.preventDefault(); toggleSaved(city.id); }}
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center bg-[#1D2E44]/80 border border-[#2A3F5C] hover:border-[#4A6741] transition-colors"
          style={{ borderRadius: 4 }}
          aria-label={saved ? t.saved_label : t.savePlace}
        >
          <svg width="12" height="12" fill={saved ? '#23412F' : 'none'} stroke={saved ? '#7A9E6B' : '#C8B99A'} strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </Link>
    );
  }

  return (
    <Link to={`/${city.countrySlug}/${city.slug}`} className="field-card group block hover:border-[#4A6741] transition-all hover:shadow-md">
      <div className="aspect-[3/2] overflow-hidden bg-[#C8B99A]" style={{ borderRadius: '4px 4px 0 0' }}>
        <img src={city.heroImage} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-90" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-serif text-[#1A1A18] font-bold text-lg leading-tight">{name}</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <svg width="10" height="10" fill="none" stroke="#4A6741" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="font-mono text-[10px] text-[#4A6741]">{country}</span>
            </div>
          </div>
          <button
            onClick={e => { e.preventDefault(); toggleSaved(city.id); }}
            className="shrink-0 w-8 h-8 flex items-center justify-center border border-[#C8B99A] hover:border-[#23412F] transition-colors"
            style={{ borderRadius: 4 }}
          >
            <svg width="13" height="13" fill={saved ? '#23412F' : 'none'} stroke={saved ? '#23412F' : '#3A3A38'} strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
        </div>
        <p className="text-sm text-[#5A5A58] leading-relaxed line-clamp-2 mb-3">{tagline}</p>
        <div className="flex items-center justify-between">
          <div className="font-mono text-[10px] text-[#7A9E6B]">
            {city.coordinates.lat.toFixed(2)}°N, {Math.abs(city.coordinates.lng).toFixed(2)}°{city.coordinates.lng > 0 ? 'E' : 'W'}
          </div>
          <div className="flex flex-wrap gap-1">
            {city.topCategories.slice(0, 2).map(cat => (
              <span key={cat} className="font-mono text-[9px] bg-[#E0D9C8] text-[#3A3A38] px-1.5 py-0.5" style={{ borderRadius: 2 }}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
