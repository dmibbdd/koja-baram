import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { allCitiesList } from '../data/destinations';
import TopoHero from '../components/TopoHero';

interface PlannerState {
  destination: string;
  days: number;
  travelGroup: string;
  interests: string[];
  budget: string;
  pace: string;
  walkingPref: string;
  foodPref: string[];
  specialReq: string;
}

const INTERESTS = ['History', 'Art', 'Food', 'Nature', 'Nightlife', 'Shopping', 'Photography', 'Adventure', 'Architecture', 'Relaxation'];
const FOOD_PREFS = ['Local cuisine', 'Vegetarian', 'Vegan', 'Halal', 'Fine dining', 'Street food', 'Cafes'];

interface GeneratedDay {
  dayNumber: number;
  theme: string;
  morning: { time: string; place: string; description: string; duration: string; cost: string };
  afternoon: { time: string; place: string; description: string; duration: string; cost: string };
  evening: { time: string; place: string; description: string; duration: string; cost: string };
}

function generateItinerary(state: PlannerState, citySlug: string): GeneratedDay[] {
  const city = allCitiesList.find(c => c.slug === citySlug || c.name.toLowerCase() === state.destination.toLowerCase());
  if (!city) return [];

  const attractions = city.attractions;
  const restaurants = city.restaurants;

  return Array.from({ length: Math.min(state.days, 5) }, (_, i) => ({
    dayNumber: i + 1,
    theme: i === 0 ? 'Arrival & Iconic Landmarks' : i === 1 ? 'Neighborhoods & Culture' : i === 2 ? 'Hidden Gems & Local Life' : i === 3 ? 'Nature & Day Trip' : 'Shopping & Farewell',
    morning: {
      time: '09:00',
      place: attractions[i % attractions.length]?.name || `${city.name} Morning Walk`,
      description: attractions[i % attractions.length]?.description?.slice(0, 100) || 'Explore the area at your own pace.',
      duration: attractions[i % attractions.length]?.duration || '2 hours',
      cost: attractions[i % attractions.length]?.ticketPrice || 'Free',
    },
    afternoon: {
      time: '13:00',
      place: restaurants[i % restaurants.length]?.name || `${city.name} Restaurant`,
      description: restaurants[i % restaurants.length]?.description || 'Enjoy local cuisine.',
      duration: '1.5 hours',
      cost: restaurants[i % restaurants.length]?.priceRange || '€€',
    },
    evening: {
      time: '18:00',
      place: city.neighborhoods[i % Math.max(city.neighborhoods.length, 1)]?.name || `${city.name} Evening`,
      description: city.neighborhoods[i % Math.max(city.neighborhoods.length, 1)]?.description || 'Explore the local neighborhood.',
      duration: '3 hours',
      cost: 'Varies',
    },
  }));
}

export default function AIPlanner() {
  const { t, lang } = useApp();
  const [step, setStep] = useState(0);
  const [state, setState] = useState<PlannerState>({
    destination: '', days: 4, travelGroup: 'solo', interests: [], budget: 'mid', pace: 'balanced', walkingPref: 'moderate', foodPref: [], specialReq: '',
  });
  const [generating, setGenerating] = useState(false);
  const [itinerary, setItinerary] = useState<GeneratedDay[] | null>(null);
  const [activeDay, setActiveDay] = useState(0);

  const STEPS = 5;

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      const citySlug = allCitiesList.find(c =>
        c.name.toLowerCase().includes(state.destination.toLowerCase()) ||
        state.destination.toLowerCase().includes(c.name.toLowerCase())
      )?.slug || allCitiesList[0].slug;
      setItinerary(generateItinerary(state, citySlug));
      setGenerating(false);
      setStep(STEPS + 1);
    }, 2800);
  };

  const StepIndicator = () => (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: STEPS }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`w-7 h-7 flex items-center justify-center font-mono text-xs border transition-colors ${i < step ? 'bg-[#23412F] border-[#23412F] text-[#E6DDCB]' : i === step ? 'bg-[#E6DDCB] border-[#23412F] text-[#23412F]' : 'border-[#C8B99A] text-[#C8B99A]'}`} style={{ borderRadius: 4 }}>
            {i < step ? '✓' : i + 1}
          </div>
          {i < STEPS - 1 && <div className={`w-6 h-px ${i < step ? 'bg-[#23412F]' : 'bg-[#C8B99A]'}`}/>}
        </div>
      ))}
    </div>
  );

  const nextBtn = (disabled = false) => (
    <button onClick={() => setStep(s => s + 1)} disabled={disabled}
      className={`font-mono text-xs px-8 py-3 border transition-colors ${disabled ? 'border-[#C8B99A] text-[#C8B99A] cursor-not-allowed' : 'bg-[#23412F] border-[#23412F] text-[#E6DDCB] hover:bg-[#2D5238]'}`}
      style={{ borderRadius: 4 }}>
      {t.next} →
    </button>
  );

  // Result state
  if (itinerary && step === STEPS + 1) {
    const cityObj = allCitiesList.find(c => c.name.toLowerCase().includes(state.destination.toLowerCase()));
    return (
      <div dir={lang === 'fa' ? 'rtl' : 'ltr'}>
        <TopoHero dark>
          <div className="max-w-4xl mx-auto px-6 pt-12 pb-10">
            <div className="font-mono text-[#7A9E6B] text-xs tracking-widest uppercase mb-3">AI-Generated Itinerary</div>
            <h1 className="font-serif text-[#F5F1E9] font-bold text-3xl mb-2">{state.days} Days in {state.destination}</h1>
            <div className="flex flex-wrap gap-3 text-xs font-mono text-[#9BAEC4]">
              <span className="bg-[#253B55] border border-[#2A3F5C] px-3 py-1 capitalize" style={{ borderRadius: 3 }}>{state.travelGroup}</span>
              <span className="bg-[#253B55] border border-[#2A3F5C] px-3 py-1 capitalize" style={{ borderRadius: 3 }}>{state.budget} budget</span>
              <span className="bg-[#253B55] border border-[#2A3F5C] px-3 py-1 capitalize" style={{ borderRadius: 3 }}>{state.pace} pace</span>
            </div>
          </div>
        </TopoHero>

        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Day tabs */}
          <div className="flex gap-1 mb-8 overflow-x-auto scrollbar-hidden">
            {itinerary.map((day, i) => (
              <button key={i} onClick={() => setActiveDay(i)}
                className={`font-mono text-xs px-4 py-2.5 border whitespace-nowrap transition-colors ${activeDay === i ? 'bg-[#23412F] border-[#23412F] text-[#E6DDCB]' : 'border-[#C8B99A] text-[#5A5A58] hover:border-[#23412F]'}`}
                style={{ borderRadius: 4 }}>
                {t.day} {day.dayNumber}
              </button>
            ))}
          </div>

          {itinerary[activeDay] && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="font-mono text-[#7A9E6B] text-sm">{t.day} {itinerary[activeDay].dayNumber}</div>
                <div className="h-px bg-[#C8B99A] flex-1"/>
                <div className="font-serif text-[#1A1A18] font-bold">{itinerary[activeDay].theme}</div>
              </div>

              <div className="space-y-4">
                {[
                  { timeOfDay: t.morning, slot: itinerary[activeDay].morning, color: '#7A9E6B', icon: '☀️' },
                  { timeOfDay: t.afternoon, slot: itinerary[activeDay].afternoon, color: '#C87941', icon: '🍽️' },
                  { timeOfDay: t.evening, slot: itinerary[activeDay].evening, color: '#4A6741', icon: '🌙' },
                ].map(({ timeOfDay, slot, color, icon }) => (
                  <div key={timeOfDay} className="field-card p-5">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 text-center">
                        <div className="font-mono text-xs" style={{ color }}>{slot.time}</div>
                        <div className="text-xl mt-1">{icon}</div>
                        <div className="font-mono text-[10px] text-[#C8B99A] mt-1 uppercase">{timeOfDay}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-[#1A1A18] font-bold text-lg">{slot.place}</h3>
                        <p className="text-sm text-[#5A5A58] mt-1 leading-relaxed">{slot.description}</p>
                        <div className="flex gap-4 mt-3">
                          <div>
                            <div className="font-mono text-[9px] text-[#7A9E6B] uppercase tracking-wider">Duration</div>
                            <div className="text-sm text-[#3A3A38]">{slot.duration}</div>
                          </div>
                          <div>
                            <div className="font-mono text-[9px] text-[#7A9E6B] uppercase tracking-wider">Est. Cost</div>
                            <div className="text-sm text-[#3A3A38]">{slot.cost}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 mt-8 pt-6 border-t border-[#C8B99A]">
            <button onClick={() => { setStep(0); setItinerary(null); setState({ destination: '', days: 4, travelGroup: 'solo', interests: [], budget: 'mid', pace: 'balanced', walkingPref: 'moderate', foodPref: [], specialReq: '' }); }}
              className="font-mono text-xs px-6 py-2.5 border border-[#C8B99A] text-[#5A5A58] hover:border-[#23412F] transition-colors" style={{ borderRadius: 4 }}>
              ← Plan Another Trip
            </button>
            <button className="font-mono text-xs px-6 py-2.5 bg-[#23412F] border border-[#23412F] text-[#E6DDCB] hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>
              Save Itinerary
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Generating state
  if (generating) {
    return (
      <div dir={lang === 'fa' ? 'rtl' : 'ltr'} className="min-h-screen bg-[#1D2E44] flex items-center justify-center">
        <div className="text-center max-w-sm px-6">
          <div className="w-16 h-16 border-2 border-[#4A6741] border-t-[#E6DDCB] rounded-full mx-auto mb-8 animate-spin"/>
          <div className="font-mono text-[#7A9E6B] text-xs tracking-widest uppercase mb-3">AI Processing</div>
          <h2 className="font-serif text-[#F5F1E9] font-bold text-xl mb-4">{t.generating}</h2>
          <div className="space-y-2">
            {['Analyzing destination data...', 'Optimizing for your interests...', 'Building day-by-day schedule...', 'Checking opening hours...'].map((msg, i) => (
              <div key={i} className="flex items-center gap-2 font-mono text-xs text-[#4A6741]">
                <div className="w-1.5 h-1.5 bg-[#4A6741] rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}/>
                {msg}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <TopoHero>
        <div className="max-w-3xl mx-auto px-6 pt-14 pb-10">
          <div className="font-mono text-[#7A9E6B] text-xs tracking-widest uppercase mb-3">Intelligent Trip Planning</div>
          <h1 className="font-serif text-[#F5F1E9] font-bold text-4xl mb-2">{t.aiPlannerTitle}</h1>
          <p className="text-[#9BAEC4]">{t.aiPlannerSubtitle}</p>
        </div>
      </TopoHero>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <StepIndicator />

        {/* Step 0: Destination */}
        {step === 0 && (
          <div>
            <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-2">{t.whereGoing}</h2>
            <p className="font-mono text-xs text-[#7A8575] mb-6">Choose from our 8 featured destinations</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {allCitiesList.map(city => (
                <button key={city.id}
                  onClick={() => setState(s => ({ ...s, destination: city.name }))}
                  className={`field-card p-3 text-left group hover:border-[#23412F] transition-all ${state.destination === city.name ? 'border-[#23412F] bg-[#F0EDE5]' : ''}`}>
                  <div className="aspect-video overflow-hidden mb-2 bg-[#C8B99A]" style={{ borderRadius: 2 }}>
                    <img src={city.heroImage} alt={city.name} className="w-full h-full object-cover saturate-90"/>
                  </div>
                  <div className="font-serif text-[#1A1A18] text-xs font-bold">{lang === 'fa' ? city.nameFa : city.name}</div>
                  <div className="font-mono text-[9px] text-[#4A6741]">{lang === 'fa' ? city.countryFa : city.country}</div>
                </button>
              ))}
            </div>
            {nextBtn(!state.destination)}
          </div>
        )}

        {/* Step 1: Days + Travel group */}
        {step === 1 && (
          <div>
            <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-6">{t.howManyDays}</h2>
            <div className="flex items-center gap-4 mb-8">
              <button onClick={() => setState(s => ({ ...s, days: Math.max(1, s.days - 1) }))}
                className="w-10 h-10 border border-[#C8B99A] text-[#3A3A38] text-xl hover:border-[#23412F] transition-colors" style={{ borderRadius: 4 }}>−</button>
              <span className="font-serif font-bold text-4xl text-[#1A1A18] w-16 text-center">{state.days}</span>
              <button onClick={() => setState(s => ({ ...s, days: Math.min(14, s.days + 1) }))}
                className="w-10 h-10 border border-[#C8B99A] text-[#3A3A38] text-xl hover:border-[#23412F] transition-colors" style={{ borderRadius: 4 }}>+</button>
              <span className="font-mono text-xs text-[#7A8575]">days</span>
            </div>

            <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-4">{t.travelingWith}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { key: 'solo', label: t.solo, icon: '🧑' },
                { key: 'couple', label: t.couple, icon: '👫' },
                { key: 'family', label: t.family_group, icon: '👨‍👩‍👧' },
                { key: 'friends', label: t.friends, icon: '👥' },
              ].map(({ key, label, icon }) => (
                <button key={key} onClick={() => setState(s => ({ ...s, travelGroup: key }))}
                  className={`field-card p-4 text-center hover:border-[#23412F] transition-all ${state.travelGroup === key ? 'border-[#23412F] bg-[#F0EDE5]' : ''}`}>
                  <div className="text-2xl mb-1">{icon}</div>
                  <div className="font-mono text-xs text-[#3A3A38]">{label}</div>
                </button>
              ))}
            </div>
            {nextBtn()}
          </div>
        )}

        {/* Step 2: Interests */}
        {step === 2 && (
          <div>
            <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-2">{t.interests}</h2>
            <p className="font-mono text-xs text-[#7A8575] mb-6">Select all that apply</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {INTERESTS.map(interest => {
                const active = state.interests.includes(interest);
                return (
                  <button key={interest}
                    onClick={() => setState(s => ({
                      ...s,
                      interests: active ? s.interests.filter(i => i !== interest) : [...s.interests, interest]
                    }))}
                    className={`font-mono text-xs px-4 py-2 border transition-colors ${active ? 'bg-[#23412F] border-[#23412F] text-[#E6DDCB]' : 'border-[#C8B99A] text-[#5A5A58] hover:border-[#23412F]'}`}
                    style={{ borderRadius: 4 }}>
                    {interest}
                  </button>
                );
              })}
            </div>
            {nextBtn(state.interests.length === 0)}
          </div>
        )}

        {/* Step 3: Budget + Pace */}
        {step === 3 && (
          <div>
            <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-4">{t.budget}</h2>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { key: 'low', label: t.budgetLow, icon: '💰', desc: 'Hostels, local food, free attractions' },
                { key: 'mid', label: t.budgetMid, icon: '💰💰', desc: 'Mid-range hotels, restaurants' },
                { key: 'high', label: t.budgetHigh, icon: '💰💰💰', desc: '5-star hotels, fine dining' },
              ].map(({ key, label, icon, desc }) => (
                <button key={key} onClick={() => setState(s => ({ ...s, budget: key }))}
                  className={`field-card p-4 text-center hover:border-[#23412F] transition-all ${state.budget === key ? 'border-[#23412F] bg-[#F0EDE5]' : ''}`}>
                  <div className="text-lg mb-1">{icon}</div>
                  <div className="font-serif font-bold text-[#1A1A18] text-sm mb-1">{label}</div>
                  <div className="font-mono text-[9px] text-[#7A8575]">{desc}</div>
                </button>
              ))}
            </div>

            <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-4">{t.travelPace}</h2>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { key: 'relaxed', label: t.paceRelaxed, desc: '2–3 stops/day' },
                { key: 'balanced', label: t.paceBalanced, desc: '4–5 stops/day' },
                { key: 'fast', label: t.paceFast, desc: '6–8 stops/day' },
              ].map(({ key, label, desc }) => (
                <button key={key} onClick={() => setState(s => ({ ...s, pace: key }))}
                  className={`field-card p-4 text-center hover:border-[#23412F] transition-all ${state.pace === key ? 'border-[#23412F] bg-[#F0EDE5]' : ''}`}>
                  <div className="font-serif font-bold text-[#1A1A18] text-sm mb-1">{label}</div>
                  <div className="font-mono text-[9px] text-[#7A8575]">{desc}</div>
                </button>
              ))}
            </div>
            {nextBtn()}
          </div>
        )}

        {/* Step 4: Food + Summary */}
        {step === 4 && (
          <div>
            <h2 className="font-serif text-[#1A1A18] font-bold text-2xl mb-4">{t.foodPref}</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {FOOD_PREFS.map(pref => {
                const active = state.foodPref.includes(pref);
                return (
                  <button key={pref}
                    onClick={() => setState(s => ({
                      ...s,
                      foodPref: active ? s.foodPref.filter(p => p !== pref) : [...s.foodPref, pref]
                    }))}
                    className={`font-mono text-xs px-4 py-2 border transition-colors ${active ? 'bg-[#23412F] border-[#23412F] text-[#E6DDCB]' : 'border-[#C8B99A] text-[#5A5A58] hover:border-[#23412F]'}`}
                    style={{ borderRadius: 4 }}>
                    {pref}
                  </button>
                );
              })}
            </div>

            {/* Summary */}
            <div className="field-card p-5 mb-6">
              <h3 className="font-mono text-xs text-[#4A6741] uppercase tracking-widest mb-4">Your Trip Summary</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Destination', value: state.destination },
                  { label: 'Duration', value: `${state.days} days` },
                  { label: 'Traveling', value: state.travelGroup },
                  { label: 'Budget', value: state.budget },
                  { label: 'Pace', value: state.pace },
                  { label: 'Interests', value: state.interests.slice(0, 3).join(', ') || 'Not specified' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="font-mono text-[9px] text-[#7A9E6B] uppercase tracking-wider">{label}</div>
                    <div className="text-sm text-[#3A3A38] capitalize">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              className="w-full bg-[#23412F] border border-[#4A6741] text-[#E6DDCB] font-serif font-bold text-lg py-4 hover:bg-[#2D5238] transition-colors flex items-center justify-center gap-2"
              style={{ borderRadius: 4 }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              {t.generateItinerary}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
