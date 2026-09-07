import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import TopoHero from '../components/TopoHero';

const CONTENT = {
  en: {
    eyebrow: 'Our Story',
    title: 'About KAJA BERAM',
    intro: `KAJA BERAM — "Where should we go?" — started as a simple question travelers ask themselves every day. We built this site to answer it with real, structured information: verified cities, landmark details, opening hours, and practical trip planning tools, all in one place.`,
    mission: {
      heading: 'What we do',
      body: `We map destinations the way a field guide would: precise, honest, and free of filler. Every country, city, and attraction on this site is organized so you can go from "I have no idea where to go" to a real itinerary in a few clicks.`,
    },
    values: {
      heading: 'What we believe',
      items: [
        'Information should be free and easy to reach.',
        'We never show placeholder data — if we don\'t have it, we say so.',
        'A good trip starts with a clear map, not an endless scroll.',
      ],
    },
    cta: {
      heading: 'Start exploring',
      body: 'Jump into the map and find your next destination.',
      button: 'Explore Destinations',
    },
  },
  fa: {
    eyebrow: 'داستان ما',
    title: 'درباره‌ی کجا برم',
    intro: `«کجا برم؟» سؤالی ساده است که هر مسافری هر روز از خودش می‌پرسد. این سایت را ساختیم تا به این سؤال با اطلاعات واقعی و منظم پاسخ بدهیم: شهرهای تأییدشده، جزئیات جاذبه‌ها، ساعات بازدید، و ابزارهای عملی برنامه‌ریزی سفر، همه در یک‌جا.`,
    mission: {
      heading: 'ما چه کار می‌کنیم',
      body: `مقصدها را مثل یک راهنمای میدانی نقشه‌برداری می‌کنیم: دقیق، صادقانه و بدون حرف اضافه. هر کشور، شهر و جاذبه‌ای که در این سایت هست، طوری سازمان‌دهی شده که با چند کلیک از «نمی‌دونم کجا برم» به یک برنامه‌ی سفر واقعی برسی.`,
    },
    values: {
      heading: 'ما به چه چیزی اعتقاد داریم',
      items: [
        'اطلاعات باید رایگان و به‌راحتی در دسترس باشد.',
        'ما هرگز داده‌ی ساختگی نشان نمی‌دهیم — اگر چیزی نداریم، همین را می‌گوییم.',
        'یک سفر خوب با یک نقشه‌ی روشن شروع می‌شود، نه اسکرول بی‌پایان.',
      ],
    },
    cta: {
      heading: 'شروع کن به کشف کردن',
      body: 'به نقشه سر بزن و مقصد بعدی‌ات را پیدا کن.',
      button: 'کاوش مقصدها',
    },
  },
};

export default function AboutPage() {
  const { lang } = useApp();
  const c = CONTENT[lang];

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <TopoHero>
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-14">
          <div className="font-mono text-[#7A9E6B] text-xs tracking-widest uppercase mb-3">{c.eyebrow}</div>
          <h1 className="font-serif text-[#F5F1E9] font-bold text-4xl mb-2">{c.title}</h1>
        </div>
      </TopoHero>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <p className="text-[#3A3A38] text-base leading-relaxed">{c.intro}</p>

        <section>
          <h2 className="font-serif text-[#1A1A18] font-bold text-xl mb-3">{c.mission.heading}</h2>
          <p className="text-[#3A3A38] text-sm leading-relaxed">{c.mission.body}</p>
        </section>

        <section>
          <h2 className="font-serif text-[#1A1A18] font-bold text-xl mb-4">{c.values.heading}</h2>
          <ul className="space-y-3">
            {c.values.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#3A3A38]">
                <span className="w-1.5 h-1.5 mt-2 bg-[#4A6741] shrink-0" style={{ borderRadius: 2 }} />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="field-card p-6 text-center bg-[#F5F1E9]">
          <h2 className="font-serif text-[#1A1A18] font-bold text-lg mb-2">{c.cta.heading}</h2>
          <p className="text-[#5A5A58] text-sm mb-5">{c.cta.body}</p>
          <Link
            to="/explore"
            className="inline-block bg-[#23412F] text-[#E6DDCB] font-mono text-xs px-6 py-3 hover:bg-[#2D5238] transition-colors"
            style={{ borderRadius: 4 }}
          >
            {c.cta.button}
          </Link>
        </section>
      </div>
    </div>
  );
}
