import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { allCitiesList, allAttractionsList, allCountriesList } from '../data/destinations';
import CityCard from '../components/CityCard';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, lang } = useApp();
  const query = searchParams.get('q') || '';
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) setSearchParams({ q: inputValue.trim() });
  };

  const q = query.toLowerCase();

  const matchedCities = q ? allCitiesList.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameFa.includes(q) ||
    c.country.toLowerCase().includes(q) ||
    c.tagline.toLowerCase().includes(q) ||
    c.topCategories.some(cat => cat.toLowerCase().includes(q))
  ) : [];

  const matchedAttractions = q ? allAttractionsList.filter(a =>
    a.name.toLowerCase().includes(q) ||
    a.nameFa.includes(q) ||
    a.category.toLowerCase().includes(q) ||
    a.description.toLowerCase().includes(q)
  ) : [];

  const matchedCountries = q ? allCountriesList.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameFa.includes(q) ||
    c.popularFor.some(p => p.toLowerCase().includes(q))
  ) : [];

  const totalResults = matchedCities.length + matchedAttractions.length + matchedCountries.length;

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'} className="max-w-7xl mx-auto px-6 py-8">
      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex gap-0 mb-8 max-w-2xl">
        <div className="relative flex-1">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A6741] pointer-events-none" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-[#F5F1E9] border border-[#C8B99A] text-[#1A1A18] placeholder-[#7A8575] text-base px-4 py-3.5 pl-11 focus:outline-none focus:border-[#23412F]"
            style={{ borderRadius: '4px 0 0 4px' }}
          />
        </div>
        <button type="submit" className="bg-[#23412F] text-[#E6DDCB] font-mono text-xs px-5 hover:bg-[#2D5238] transition-colors" style={{ borderRadius: '0 4px 4px 0' }}>
          {lang === 'en' ? 'Search' : 'جستجو'}
        </button>
      </form>

      {query && (
        <div className="font-mono text-xs text-[#4A6741] mb-6">
          {totalResults} results for "<span className="text-[#23412F]">{query}</span>"
        </div>
      )}

      {!query && (
        <div className="py-24 text-center">
          <div className="font-mono text-[#C8B99A] text-xs mb-3 tracking-widest">GLOBAL SEARCH</div>
          <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-2">Search any destination</h2>
          <p className="text-[#5A5A58]">Try "Paris", "Tokyo", "Eiffel Tower", "Japan", "museums"...</p>
        </div>
      )}

      {query && totalResults === 0 && (
        <div className="py-24 text-center">
          <div className="font-mono text-[#C8B99A] text-xs mb-3 tracking-widest">NO RESULTS</div>
          <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-2">{t.noResults}</h2>
          <p className="text-[#5A5A58]">We don't have data for "{query}" yet. Try "Paris", "Tokyo", "Istanbul".</p>
        </div>
      )}

      {/* Countries */}
      {matchedCountries.length > 0 && (
        <section className="mb-10">
          <div className="font-mono text-xs text-[#4A6741] uppercase tracking-widest mb-4">Countries</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {matchedCountries.map(country => (
              <Link key={country.id} to={`/${country.slug}`} className="field-card group flex gap-3 p-3 hover:border-[#4A6741] transition-all">
                <div className="w-16 h-12 shrink-0 overflow-hidden bg-[#C8B99A]" style={{ borderRadius: 4 }}>
                  <img src={country.heroImage} alt={country.name} className="w-full h-full object-cover saturate-90" />
                </div>
                <div>
                  <p className="font-serif text-[#1A1A18] font-bold">{lang === 'fa' ? country.nameFa : country.name}</p>
                  <p className="font-mono text-[10px] text-[#4A6741]">{country.continent}</p>
                  <p className="text-xs text-[#5A5A58] mt-0.5 line-clamp-1">{country.popularFor.join(', ')}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Cities */}
      {matchedCities.length > 0 && (
        <section className="mb-10">
          <div className="font-mono text-xs text-[#4A6741] uppercase tracking-widest mb-4">Cities</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {matchedCities.map(city => <CityCard key={city.id} city={city} />)}
          </div>
        </section>
      )}

      {/* Attractions */}
      {matchedAttractions.length > 0 && (
        <section className="mb-10">
          <div className="font-mono text-xs text-[#4A6741] uppercase tracking-widest mb-4">Attractions</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {matchedAttractions.map(attr => {
              const city = allCitiesList.find(c => c.slug === attr.citySlug);
              return city ? (
                <Link key={attr.id} to={`/${city.countrySlug}/${city.slug}/${attr.slug}`} className="field-card group flex gap-3 p-3 hover:border-[#4A6741] transition-all">
                  <div className="w-24 h-16 shrink-0 overflow-hidden bg-[#C8B99A]" style={{ borderRadius: 4 }}>
                    <img src={attr.imageUrl} alt={lang === 'fa' ? attr.nameFa : attr.name} className="w-full h-full object-cover saturate-90 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-serif text-[#1A1A18] font-bold leading-tight">{lang === 'fa' ? attr.nameFa : attr.name}</p>
                      <span className="font-mono text-[9px] bg-[#E0D9C8] text-[#5A5A58] px-2 py-0.5 shrink-0" style={{ borderRadius: 2 }}>{attr.category}</span>
                    </div>
                    <p className="font-mono text-[10px] text-[#4A6741] mt-0.5">{lang === 'fa' ? city.nameFa : city.name} · {lang === 'fa' ? city.countryFa : city.country}</p>
                    <p className="text-xs text-[#5A5A58] mt-1 line-clamp-1">{attr.description}</p>
                  </div>
                </Link>
              ) : null;
            })}
          </div>
        </section>
      )}
    </div>
  );
}
