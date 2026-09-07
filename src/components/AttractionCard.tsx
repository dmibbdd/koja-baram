import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import type { Attraction } from '../data/destinations';

interface AttractionCardProps {
  attraction: Attraction;
  countrySlug: string;
}

export default function AttractionCard({ attraction, countrySlug }: AttractionCardProps) {
  const { lang, t, toggleSaved, isSaved } = useApp();
  const saved = isSaved(attraction.id);
  const name = lang === 'fa' ? attraction.nameFa : attraction.name;

  return (
    <Link
      to={`/${countrySlug}/${attraction.citySlug}/${attraction.slug}`}
      className="field-card group block hover:border-[#4A6741] transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#C8B99A]" style={{ borderRadius: '4px 4px 0 0' }}>
        <img src={attraction.imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-90" />
        <div className="absolute top-2 left-2">
          <span className="font-mono text-[9px] bg-[#23412F]/90 text-[#7A9E6B] border border-[#4A6741]/60 px-2 py-0.5" style={{ borderRadius: 2 }}>
            {attraction.category}
          </span>
        </div>
        <button
          onClick={e => { e.preventDefault(); toggleSaved(attraction.id); }}
          className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-[#F5F1E9]/90 border border-[#C8B99A] hover:border-[#23412F] transition-colors"
          style={{ borderRadius: 4 }}
        >
          <svg width="11" height="11" fill={saved ? '#23412F' : 'none'} stroke={saved ? '#23412F' : '#3A3A38'} strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
      <div className="p-3">
        <h4 className="font-serif text-[#1A1A18] font-bold text-base leading-tight mb-1">{name}</h4>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="9" height="9" fill={i < Math.round(attraction.rating) ? '#C87941' : 'none'} stroke="#C87941" strokeWidth="2" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
            <span className="font-mono text-[10px] text-[#5A5A58] ml-1">{attraction.rating} ({(attraction.reviewCount / 1000).toFixed(0)}k)</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-2">
          <div>
            <p className="font-mono text-[9px] text-[#7A9E6B] uppercase tracking-wider">{t.ticketPrice}</p>
            <p className="text-xs text-[#3A3A38] font-medium mt-0.5">{attraction.ticketPrice}</p>
          </div>
          <div>
            <p className="font-mono text-[9px] text-[#7A9E6B] uppercase tracking-wider">{t.duration}</p>
            <p className="text-xs text-[#3A3A38] font-medium mt-0.5">{attraction.duration}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
