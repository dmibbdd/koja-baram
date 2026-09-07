import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { allCitiesList } from '../data/destinations';
import CityCard from '../components/CityCard';

const SAMPLE_TRIPS = [
  { id: '1', name: 'Japan Adventure', destination: 'Tokyo', dates: 'Mar 15 – Mar 22, 2026', days: 7, status: 'upcoming', imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop', countrySlug: 'japan', citySlug: 'tokyo' },
  { id: '2', name: 'Paris Getaway', destination: 'Paris', dates: 'Jun 8 – Jun 12, 2026', days: 4, status: 'upcoming', imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop', countrySlug: 'france', citySlug: 'paris' },
  { id: '3', name: 'Istanbul Explore', destination: 'Istanbul', dates: 'Sep 1 – Sep 6, 2025', days: 5, status: 'past', imageUrl: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop', countrySlug: 'turkey', citySlug: 'istanbul' },
];

type Tab = 'trips' | 'saved' | 'profile';

export default function TripDashboard() {
  const { t, lang, savedPlaces, isSaved } = useApp();
  const [tab, setTab] = useState<Tab>('trips');

  const savedCities = allCitiesList.filter(c => isSaved(c.id));

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'} className="min-h-screen bg-[#E6DDCB]">
      {/* Header */}
      <div className="bg-[#1D2E44] border-b border-[#2A3F5C]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#23412F] border border-[#4A6741] flex items-center justify-center text-2xl" style={{ borderRadius: 4 }}>
              🌍
            </div>
            <div>
              <div className="font-mono text-[#4A6741] text-xs uppercase tracking-wider mb-0.5">Traveler Profile</div>
              <h1 className="font-serif text-[#F5F1E9] font-bold text-2xl">Your Travel Hub</h1>
              <div className="font-mono text-[#9BAEC4] text-xs mt-1">{savedPlaces.length} saved places · {SAMPLE_TRIPS.length} trips</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Trips Planned', value: SAMPLE_TRIPS.length },
              { label: 'Saved Places', value: savedPlaces.length },
              { label: 'Countries', value: '3' },
              { label: 'Days Traveled', value: '17' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="font-serif text-[#F5F1E9] font-bold text-2xl">{value}</div>
                <div className="font-mono text-[#4A6741] text-[10px] uppercase tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-6 flex gap-0">
          {([['trips', t.myTrips], ['saved', t.savedPlaces], ['profile', t.profile]] as [Tab, string][]).map(([key, label]) => (
            <button key={key} onClick={() => setTab(key)}
              className={`font-mono text-xs uppercase tracking-wider px-5 py-4 border-b-2 transition-colors ${tab === key ? 'border-[#E6DDCB] text-[#E6DDCB]' : 'border-transparent text-[#6B7F94] hover:text-[#9BAEC4]'}`}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Trips tab */}
        {tab === 'trips' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-[#1A1A18] font-bold text-xl">{t.upcomingTrips}</h2>
              <Link to="/ai-planner" className="bg-[#23412F] text-[#E6DDCB] font-mono text-xs px-4 py-2 hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>
                + {t.createTrip}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {SAMPLE_TRIPS.filter(t => t.status === 'upcoming').map(trip => (
                <div key={trip.id} className="field-card overflow-hidden group">
                  <div className="relative aspect-video overflow-hidden bg-[#C8B99A]">
                    <img src={trip.imageUrl} alt={trip.name} className="w-full h-full object-cover saturate-90 group-hover:scale-105 transition-transform duration-700"/>
                    <div className="absolute top-2 right-2">
                      <span className="font-mono text-[9px] bg-[#23412F]/90 text-[#7A9E6B] border border-[#4A6741]/60 px-2 py-0.5" style={{ borderRadius: 2 }}>Upcoming</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-[#1A1A18] font-bold">{trip.name}</h3>
                    <p className="font-mono text-[10px] text-[#4A6741] mt-0.5">{trip.destination} · {trip.days} days</p>
                    <p className="text-xs text-[#5A5A58] mt-1">{trip.dates}</p>
                    <div className="flex gap-2 mt-3">
                      <Link to={`/${trip.countrySlug}/${trip.citySlug}`} className="flex-1 text-center font-mono text-xs border border-[#C8B99A] py-1.5 hover:border-[#23412F] transition-colors" style={{ borderRadius: 4 }}>
                        View City
                      </Link>
                      <Link to="/ai-planner" className="flex-1 text-center font-mono text-xs bg-[#23412F] text-[#E6DDCB] py-1.5 hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>
                        {t.editTrip}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-[#1A1A18] font-bold text-xl mb-6">{t.pastTrips}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SAMPLE_TRIPS.filter(t => t.status === 'past').map(trip => (
                <div key={trip.id} className="field-card overflow-hidden group opacity-80 hover:opacity-100 transition-opacity">
                  <div className="relative aspect-video overflow-hidden bg-[#C8B99A]">
                    <img src={trip.imageUrl} alt={trip.name} className="w-full h-full object-cover saturate-75 grayscale-[30%]"/>
                    <div className="absolute top-2 right-2">
                      <span className="font-mono text-[9px] bg-[#3A3A38]/90 text-[#C8B99A] px-2 py-0.5" style={{ borderRadius: 2 }}>Past</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-[#1A1A18] font-bold">{trip.name}</h3>
                    <p className="font-mono text-[10px] text-[#4A6741] mt-0.5">{trip.destination} · {trip.days} days</p>
                    <p className="text-xs text-[#5A5A58] mt-1">{trip.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Saved places tab */}
        {tab === 'saved' && (
          <div>
            <h2 className="font-serif text-[#1A1A18] font-bold text-xl mb-6">{t.savedPlaces}</h2>
            {savedCities.length === 0 ? (
              <div className="py-24 text-center">
                <div className="font-mono text-[#C8B99A] text-xs mb-3 tracking-widest">EMPTY</div>
                <h3 className="font-serif text-[#1A1A18] font-bold text-xl mb-2">No saved places yet</h3>
                <p className="text-[#5A5A58] mb-6">Save cities and attractions while exploring</p>
                <Link to="/explore" className="bg-[#23412F] text-[#E6DDCB] font-mono text-xs px-6 py-3 hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>
                  Start Exploring
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {savedCities.map(city => <CityCard key={city.id} city={city} />)}
              </div>
            )}
          </div>
        )}

        {/* Profile tab */}
        {tab === 'profile' && (
          <div className="max-w-md">
            <h2 className="font-serif text-[#1A1A18] font-bold text-xl mb-6">{t.profile}</h2>
            <div className="field-card p-6 space-y-4">
              {[
                { label: 'Name', value: 'Traveler', type: 'text' },
                { label: t.email, value: 'traveler@example.com', type: 'email' },
              ].map(({ label, value, type }) => (
                <div key={label}>
                  <label className="font-mono text-[10px] text-[#4A6741] uppercase tracking-wider block mb-1">{label}</label>
                  <input defaultValue={value} type={type}
                    className="w-full bg-[#F5F1E9] border border-[#C8B99A] text-[#1A1A18] px-4 py-2.5 text-sm focus:outline-none focus:border-[#23412F]" style={{ borderRadius: 4 }} />
                </div>
              ))}
              <button className="w-full bg-[#23412F] text-[#E6DDCB] font-mono text-xs py-3 hover:bg-[#2D5238] transition-colors mt-2" style={{ borderRadius: 4 }}>
                Save Changes
              </button>
            </div>
            <div className="mt-4">
              <Link to="/auth" className="font-mono text-xs text-[#C87941] hover:underline">{t.signOut}</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
