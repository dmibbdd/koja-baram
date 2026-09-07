import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { allCitiesList, allAttractionsList } from '../data/destinations';
import CityCard from '../components/CityCard';
import AttractionCard from '../components/AttractionCard';
import TopoHero from '../components/TopoHero';

const CATEGORY_FILTERS = ['All', 'History', 'Nature', 'Culture', 'Food', 'Shopping', 'Nightlife', 'Family', 'Adventure', 'Photography', 'Art', 'Beach'];
const CONTINENT_FILTERS = ['All Regions', 'Europe', 'Asia', 'Americas', 'Middle East'];
type ViewMode = 'grid' | 'list';
type ContentType = 'cities' | 'attractions';

export default function ExplorePage() {
  const { t, lang } = useApp();
  const [category, setCategory] = useState('All');
  const [continent, setContinent] = useState('All Regions');
  const [view, setView] = useState<ViewMode>('grid');
  const [contentType, setContentType] = useState<ContentType>('cities');
  const [sortBy, setSortBy] = useState<'name' | 'rating' | 'popular'>('popular');

  const continentMap: Record<string, string[]> = {
    'Europe': ['france', 'uk', 'italy', 'spain'],
    'Asia': ['japan', 'turkey'],
    'Americas': ['usa'],
    'Middle East': ['uae'],
  };

  const filteredCities = allCitiesList.filter(c =>
    continent === 'All Regions' || (continentMap[continent]?.includes(c.countrySlug))
  ).filter(c =>
    category === 'All' || c.topCategories.some(cat => cat.toLowerCase().includes(category.toLowerCase()))
  );

  const filteredAttractions = allAttractionsList.filter(a => category === 'All' || a.category === category);

  const sortedCities = [...filteredCities].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <TopoHero>
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-14">
          <div className="font-mono text-[#7A9E6B] text-xs tracking-widest uppercase mb-3">Global Discovery</div>
          <h1 className="font-serif text-[#F5F1E9] font-bold text-4xl mb-2">{t.exploreWorld}</h1>
          <p className="text-[#9BAEC4] text-base max-w-xl">{t.heroSubtitle}</p>
        </div>
      </TopoHero>

      {/* Filters bar */}
      <div className="bg-[#F5F1E9] border-b border-[#C8B99A] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex flex-wrap gap-2 items-center justify-between">
            {/* Content type */}
            <div className="flex gap-1">
              {(['cities', 'attractions'] as ContentType[]).map(type => (
                <button
                  key={type}
                  onClick={() => setContentType(type)}
                  className={`font-mono text-xs px-3 py-1.5 border transition-colors capitalize ${contentType === type ? 'bg-[#23412F] text-[#E6DDCB] border-[#23412F]' : 'border-[#C8B99A] text-[#5A5A58] hover:border-[#23412F]'}`}
                  style={{ borderRadius: 4 }}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* View toggle */}
            <div className="flex gap-1 ml-auto">
              {([['grid', '⊞'], ['list', '≡']] as [ViewMode, string][]).map(([v, icon]) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`w-8 h-8 font-mono text-sm border transition-colors ${view === v ? 'bg-[#23412F] text-[#E6DDCB] border-[#23412F]' : 'border-[#C8B99A] text-[#5A5A58] hover:border-[#23412F]'}`}
                  style={{ borderRadius: 4 }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Region + Category filters */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {CONTINENT_FILTERS.map(c => (
              <button key={c} onClick={() => setContinent(c)}
                className={`font-mono text-[10px] px-2.5 py-1 border transition-colors ${continent === c ? 'bg-[#1D2E44] text-[#E6DDCB] border-[#1D2E44]' : 'border-[#C8B99A] text-[#5A5A58] hover:border-[#1D2E44]'}`}
                style={{ borderRadius: 3 }}>
                {c}
              </button>
            ))}
            <span className="font-mono text-[10px] text-[#C8B99A] px-1 self-center">|</span>
            {CATEGORY_FILTERS.map(c => (
              <button key={c} onClick={() => setCategory(c)}
                className={`font-mono text-[10px] px-2.5 py-1 border transition-colors ${category === c ? 'bg-[#23412F] text-[#E6DDCB] border-[#23412F]' : 'border-[#C8B99A] text-[#5A5A58] hover:border-[#23412F]'}`}
                style={{ borderRadius: 3 }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="font-mono text-xs text-[#4A6741]">
            {contentType === 'cities' ? sortedCities.length : filteredAttractions.length} results
            {continent !== 'All Regions' && ` · ${continent}`}
            {category !== 'All' && ` · ${category}`}
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as typeof sortBy)}
            className="font-mono text-xs bg-[#F5F1E9] border border-[#C8B99A] text-[#3A3A38] px-3 py-1.5 focus:outline-none focus:border-[#23412F]"
            style={{ borderRadius: 4 }}
          >
            <option value="popular">{t.popularity}</option>
            <option value="name">{lang === 'en' ? 'Name A–Z' : 'نام'}</option>
            <option value="rating">{t.rating}</option>
          </select>
        </div>

        {contentType === 'cities' ? (
          sortedCities.length === 0 ? (
            <div className="text-center py-24">
              <div className="font-mono text-[#C8B99A] text-xs mb-3">NO RESULTS</div>
              <p className="font-serif text-[#1A1A18] font-bold text-xl">{t.noResults}</p>
            </div>
          ) : view === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sortedCities.map(city => <CityCard key={city.id} city={city} />)}
            </div>
          ) : (
            <div className="space-y-3">
              {sortedCities.map(city => (
                <CityCard key={city.id} city={city} variant="compact" />
              ))}
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredAttractions.map(attr => {
              const city = allCitiesList.find(c => c.slug === attr.citySlug);
              return city ? <AttractionCard key={attr.id} attraction={attr} countrySlug={city.countrySlug} /> : null;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
