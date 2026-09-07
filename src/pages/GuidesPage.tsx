import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import TopoHero from '../components/TopoHero';

const GUIDES = [
  { id: 'paris-3-days', title: 'Paris in 3 Days: Art, Food & Neighborhoods', titleFa: 'پاریس در ۳ روز: هنر، غذا و محله‌ها', city: 'Paris', country: 'France', countrySlug: 'france', citySlug: 'paris', readTime: '10 min', tag: 'Itinerary', imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=500&fit=crop', excerpt: 'Three perfect days in the City of Light: from the Eiffel Tower at sunrise to dinner in Saint-Germain.', excerptFa: 'سه روز کامل در شهر نور: از برج ایفل در طلوع آفتاب تا شام در سن ژرمن.' },
  { id: 'tokyo-guide', title: '10 Days in Japan: The Complete 2026 Itinerary', titleFa: '۱۰ روز در ژاپن: راهنمای کامل ۲۰۲۶', city: 'Tokyo', country: 'Japan', countrySlug: 'japan', citySlug: 'tokyo', readTime: '14 min', tag: 'Itinerary', imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=500&fit=crop', excerpt: 'From neon-lit Shinjuku to peaceful temple mornings in Kyoto — the definitive Japan travel guide.', excerptFa: 'از شینجوکوی نورانی تا صبح‌های آرام معبد در کیوتو - راهنمای قطعی سفر به ژاپن.' },
  { id: 'istanbul-hidden', title: "Hidden Gems of Istanbul's Old City", titleFa: 'گنجینه‌های پنهان شهر قدیمی استانبول', city: 'Istanbul', country: 'Turkey', countrySlug: 'turkey', citySlug: 'istanbul', readTime: '8 min', tag: 'Guide', imageUrl: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=500&fit=crop', excerpt: 'Beyond the Grand Bazaar: secret courtyards, neighbourhood hammams, and the best börek in the city.', excerptFa: 'فراتر از بازار بزرگ: حیاط‌های مخفی، حمام‌های محله‌ای، و بهترین بورک شهر.' },
  { id: 'barcelona-neighborhoods', title: 'Best Neighborhoods in Barcelona for First-Timers', titleFa: 'بهترین محله‌های بارسلونا برای تازه‌واردان', city: 'Barcelona', country: 'Spain', countrySlug: 'spain', citySlug: 'barcelona', readTime: '9 min', tag: 'Neighborhood Guide', imageUrl: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=500&fit=crop', excerpt: 'Gothic Quarter vs Eixample vs Gràcia — which neighborhood should you base your Barcelona trip around?', excerptFa: 'محله گوتیک در مقابل اکزامپله در مقابل گراسیا - کدام محله را باید پایگاه سفر بارسلونای خود قرار دهید؟' },
  { id: 'dubai-guide', title: 'Dubai in 4 Days: Skylines, Souks & Desert', titleFa: 'دبی در ۴ روز: آسمان‌خراش‌ها، بازارها و بیابان', city: 'Dubai', country: 'UAE', countrySlug: 'uae', citySlug: 'dubai', readTime: '11 min', tag: 'Itinerary', imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop', excerpt: 'Burj Khalifa observation decks, old Dubai gold souks, and a desert camp sunset — the perfect 4-day balance.', excerptFa: 'دکهای مشاهده برج خلیفه، بازارهای طلای دبی قدیم، و غروب آفتاب در کمپ بیابانی.' },
  { id: 'rome-free', title: 'Free Things to Do in Rome (2026)', titleFa: 'چیزهای رایگانی که باید در رم انجام دهید (۲۰۲۶)', city: 'Rome', country: 'Italy', countrySlug: 'italy', citySlug: 'rome', readTime: '7 min', tag: 'Budget Guide', imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=500&fit=crop', excerpt: "The Vatican Museums are expensive. These aren't. Romans know how to enjoy the world's greatest open-air museum.", excerptFa: 'موزه‌های واتیکان گران هستند. اینها نه. رومی‌ها می‌دانند چگونه از بزرگترین موزه روباز جهان لذت ببرند.' },
];

const TAGS = ['All', 'Itinerary', 'Guide', 'Neighborhood Guide', 'Budget Guide'];

export default function GuidesPage() {
  const { t, lang } = useApp();
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? GUIDES : GUIDES.filter(g => g.tag === filter);

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <TopoHero>
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-14">
          <div className="font-mono text-[#7A9E6B] text-xs tracking-widest uppercase mb-3">Editorial</div>
          <h1 className="font-serif text-[#F5F1E9] font-bold text-4xl mb-2">{t.travelGuides}</h1>
          <p className="text-[#9BAEC4] max-w-xl">Expert destination guides, itineraries, and local tips for every type of traveler.</p>
        </div>
      </TopoHero>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {TAGS.map(tag => (
            <button key={tag} onClick={() => setFilter(tag)}
              className={`font-mono text-xs px-3 py-1.5 border transition-colors ${filter === tag ? 'bg-[#23412F] border-[#23412F] text-[#E6DDCB]' : 'border-[#C8B99A] text-[#5A5A58] hover:border-[#23412F]'}`}
              style={{ borderRadius: 4 }}>
              {tag}
            </button>
          ))}
        </div>

        {filter === 'All' && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {filtered.slice(0, 2).map(guide => (
              <Link key={guide.id} to={`/${guide.countrySlug}/${guide.citySlug}`} className="field-card group block hover:border-[#4A6741] transition-all">
                <div className="aspect-video overflow-hidden bg-[#C8B99A]" style={{ borderRadius: '4px 4px 0 0' }}>
                  <img src={guide.imageUrl} alt={guide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-90"/>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[9px] bg-[#23412F] text-[#7A9E6B] px-2 py-0.5" style={{ borderRadius: 2 }}>{guide.tag}</span>
                    <span className="font-mono text-[10px] text-[#4A6741]">{guide.city}, {guide.country}</span>
                    <span className="font-mono text-[10px] text-[#C8B99A] ml-auto">{guide.readTime} read</span>
                  </div>
                  <h2 className="font-serif text-[#1A1A18] font-bold text-xl leading-snug mb-2 group-hover:text-[#23412F] transition-colors">
                    {lang === 'fa' ? guide.titleFa : guide.title}
                  </h2>
                  <p className="text-sm text-[#5A5A58] leading-relaxed">{lang === 'fa' ? guide.excerptFa : guide.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {(filter === 'All' ? filtered.slice(2) : filtered).map(guide => (
            <Link key={guide.id} to={`/${guide.countrySlug}/${guide.citySlug}`} className="field-card group block hover:border-[#4A6741] transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-[#C8B99A]" style={{ borderRadius: '4px 4px 0 0' }}>
                <img src={guide.imageUrl} alt={guide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 saturate-90"/>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[9px] bg-[#E0D9C8] text-[#5A5A58] px-2 py-0.5" style={{ borderRadius: 2 }}>{guide.tag}</span>
                  <span className="font-mono text-[10px] text-[#4A6741]">{guide.city}</span>
                  <span className="font-mono text-[10px] text-[#C8B99A] ml-auto">{guide.readTime}</span>
                </div>
                <h3 className="font-serif text-[#1A1A18] font-bold leading-snug group-hover:text-[#23412F] transition-colors">
                  {lang === 'fa' ? guide.titleFa : guide.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
