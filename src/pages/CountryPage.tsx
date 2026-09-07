import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { countries, allCitiesList } from '../data/destinations';
import CityCard from '../components/CityCard';
import TopoHero from '../components/TopoHero';
import Breadcrumb from '../components/Breadcrumb';

export default function CountryPage() {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const { t, lang } = useApp();

  const country = countrySlug ? countries[countrySlug] : undefined;
  if (!country) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <div className="font-mono text-[#4A6741] text-xs tracking-widest uppercase mb-4">404 — NOT FOUND</div>
        <h1 className="font-serif text-[#1A1A18] text-3xl font-bold mb-4">Country Not Found</h1>
        <Link to="/" className="bg-[#23412F] text-[#E6DDCB] font-mono text-xs px-6 py-3" style={{ borderRadius: 4 }}>{t.back} to Home</Link>
      </div>
    );
  }

  const name = lang === 'fa' ? country.nameFa : country.name;
  const desc = lang === 'fa' ? country.descriptionFa : country.description;
  const countryCities = allCitiesList.filter(c => c.countrySlug === countrySlug);

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <div className="relative h-[440px] bg-[#1D2E44] overflow-hidden">
        <img src={country.heroImage} alt={name} className="w-full h-full object-cover saturate-90 brightness-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1520]/80 via-transparent to-transparent"/>
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <Breadcrumb items={[
            { label: t.home_bc, path: '/' },
            { label: t.countries, path: '/explore' },
            { label: name },
          ]}/>
          <div className="font-mono text-[#7A9E6B] text-xs mt-4 mb-2">{country.continent}</div>
          <h1 className="font-serif text-[#F5F1E9] font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>{name}</h1>
          <div className="font-mono text-[#9BAEC4] text-xs mt-2">
            {country.coordinates.lat.toFixed(2)}° N &nbsp; {Math.abs(country.coordinates.lng).toFixed(2)}° {country.coordinates.lng > 0 ? 'E' : 'W'}
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div className="bg-[#1D2E44] border-b border-[#2A3F5C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#2A3F5C]">
            {[
              { label: 'Capital', value: country.capital },
              { label: 'Currency', value: country.currency },
              { label: 'Language', value: country.language },
              { label: 'Best Time', value: country.bestTimeToVisit },
            ].map(({ label, value }) => (
              <div key={label} className="px-5 py-4">
                <div className="font-mono text-[#4A6741] text-[10px] uppercase tracking-wider mb-0.5">{label}</div>
                <div className="text-[#C8B99A] text-sm">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <p className="text-[#3A3A38] leading-relaxed text-base mb-8">{desc}</p>

            {/* Popular for */}
            <div className="mb-8">
              <h3 className="font-mono text-xs text-[#4A6741] uppercase tracking-widest mb-3">Popular For</h3>
              <div className="flex flex-wrap gap-2">
                {country.popularFor.map(item => (
                  <span key={item} className="font-mono text-xs bg-[#F5F1E9] border border-[#C8B99A] text-[#3A3A38] px-3 py-1.5" style={{ borderRadius: 4 }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Cities */}
            <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-4">{t.popularCities} in {name}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {countryCities.map(city => <CityCard key={city.id} city={city} />)}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="field-card p-5">
              <h3 className="font-mono text-xs text-[#4A6741] uppercase tracking-widest mb-4">Country Facts</h3>
              <div className="space-y-3">
                {[
                  { label: 'Continent', value: country.continent },
                  { label: 'Capital', value: country.capital },
                  { label: 'Currency', value: country.currency },
                  { label: 'Language', value: country.language },
                  { label: 'Best Time', value: country.bestTimeToVisit },
                  { label: 'Coordinates', value: `${country.coordinates.lat.toFixed(2)}°N, ${Math.abs(country.coordinates.lng).toFixed(2)}°${country.coordinates.lng > 0 ? 'E' : 'W'}` },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between border-b border-[#E0D9C8] pb-2 last:border-0">
                    <span className="font-mono text-[10px] text-[#7A9E6B] uppercase">{label}</span>
                    <span className="text-sm text-[#3A3A38]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/ai-planner" className="field-card p-5 flex flex-col items-start hover:border-[#23412F] transition-all block">
              <div className="font-mono text-[10px] text-[#7A9E6B] uppercase tracking-wider mb-2">AI Planner</div>
              <h3 className="font-serif font-bold text-[#1A1A18]">Plan a trip to {name}</h3>
              <p className="text-sm text-[#5A5A58] mt-1 mb-3">Get a personalized itinerary in seconds</p>
              <span className="font-mono text-xs bg-[#23412F] text-[#E6DDCB] px-3 py-1.5" style={{ borderRadius: 4 }}>Start Planning →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
