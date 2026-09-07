import { useState } from 'react';
import { useApp } from '../context/AppContext';
import TopoHero from '../components/TopoHero';

// TODO: replace with your real contact email
const CONTACT_EMAIL = 'jfry4807@gmail.com';

const CONTENT = {
  en: {
    eyebrow: 'Get in Touch',
    title: 'Contact Us',
    subtitle: 'Questions, corrections, or partnership requests — we\'d love to hear from you.',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'How can we help?',
    send: 'Send Message',
    note: 'This opens your email app with the message pre-filled — nothing is sent automatically.',
    directEmail: 'Or email us directly at',
  },
  fa: {
    eyebrow: 'در ارتباط باشید',
    title: 'تماس با ما',
    subtitle: 'سؤال، اصلاحیه، یا پیشنهاد همکاری داری؟ خوشحال می‌شیم بشنویم.',
    nameLabel: 'نام',
    emailLabel: 'ایمیل',
    messageLabel: 'پیام',
    namePlaceholder: 'نام شما',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'چطور می‌تونیم کمک کنیم؟',
    send: 'ارسال پیام',
    note: 'این دکمه اپلیکیشن ایمیل شما را با پیام آماده باز می‌کند — چیزی به‌صورت خودکار ارسال نمی‌شود.',
    directEmail: 'یا مستقیماً ایمیل بزنید به',
  },
};

export default function ContactPage() {
  const { lang } = useApp();
  const c = CONTENT[lang];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || 'website visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <TopoHero>
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-14">
          <div className="font-mono text-[#7A9E6B] text-xs tracking-widest uppercase mb-3">{c.eyebrow}</div>
          <h1 className="font-serif text-[#F5F1E9] font-bold text-4xl mb-2">{c.title}</h1>
          <p className="text-[#9BAEC4] text-base max-w-xl">{c.subtitle}</p>
        </div>
      </TopoHero>

      <div className="max-w-xl mx-auto px-6 py-16">
        <form onSubmit={handleSubmit} className="field-card p-6 space-y-5">
          <div>
            <label className="font-mono text-[10px] text-[#4A6741] uppercase tracking-widest mb-1.5 block">{c.nameLabel}</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={c.namePlaceholder}
              required
              className="w-full bg-[#F5F1E9] border border-[#C8B99A] text-[#1A1A18] placeholder-[#9B9384] text-sm px-4 py-2.5 focus:outline-none focus:border-[#23412F] transition-colors"
              style={{ borderRadius: 4 }}
            />
          </div>
          <div>
            <label className="font-mono text-[10px] text-[#4A6741] uppercase tracking-widest mb-1.5 block">{c.emailLabel}</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={c.emailPlaceholder}
              required
              className="w-full bg-[#F5F1E9] border border-[#C8B99A] text-[#1A1A18] placeholder-[#9B9384] text-sm px-4 py-2.5 focus:outline-none focus:border-[#23412F] transition-colors"
              style={{ borderRadius: 4 }}
              dir="ltr"
            />
          </div>
          <div>
            <label className="font-mono text-[10px] text-[#4A6741] uppercase tracking-widest mb-1.5 block">{c.messageLabel}</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder={c.messagePlaceholder}
              required
              rows={5}
              className="w-full bg-[#F5F1E9] border border-[#C8B99A] text-[#1A1A18] placeholder-[#9B9384] text-sm px-4 py-2.5 focus:outline-none focus:border-[#23412F] transition-colors resize-none"
              style={{ borderRadius: 4 }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#23412F] text-[#E6DDCB] font-serif font-bold px-6 py-3 hover:bg-[#2D5238] transition-colors"
            style={{ borderRadius: 4 }}
          >
            {c.send}
          </button>
          <p className="font-mono text-[10px] text-[#7A8575] text-center leading-relaxed">{c.note}</p>
        </form>

        <p className="text-center text-sm text-[#5A5A58] mt-6">
          {c.directEmail}{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#23412F] font-medium hover:underline" dir="ltr">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
}
