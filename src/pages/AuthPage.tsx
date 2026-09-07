import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import TopoHero from '../components/TopoHero';

type AuthMode = 'login' | 'register' | 'forgot';

export default function AuthPage() {
  const { t, lang } = useApp();
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const inputClass = "w-full bg-[#F5F1E9] border border-[#C8B99A] text-[#1A1A18] placeholder-[#7A8575] px-4 py-3 text-sm focus:outline-none focus:border-[#23412F] transition-colors";

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'} className="min-h-screen bg-[#E6DDCB] flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:flex-1 relative overflow-hidden">
        <TopoHero className="w-full h-full">
          <div className="flex flex-col justify-end h-full p-12">
            <div className="font-mono text-[#7A9E6B] text-xs tracking-widest uppercase mb-4">KAJA BERAM</div>
            <h2 className="font-serif text-[#F5F1E9] font-bold text-3xl mb-4">Discover the world,<br/>one destination at a time.</h2>
            <p className="text-[#9BAEC4] text-sm leading-relaxed max-w-sm">Save places, plan trips with AI, and create personal itineraries across 190+ countries.</p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {['Paris', 'Tokyo', 'Istanbul'].map((city, i) => (
                <div key={city} className="aspect-video overflow-hidden bg-[#1D2E44]" style={{ borderRadius: 4 }}>
                  <img
                    src={i === 0 ? 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=200&fit=crop' :
                         i === 1 ? 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=200&fit=crop' :
                         'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=300&h=200&fit=crop'}
                    alt={city}
                    className="w-full h-full object-cover saturate-75"
                  />
                </div>
              ))}
            </div>
          </div>
        </TopoHero>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 lg:max-w-md flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-10">
            <div className="w-7 h-7 bg-[#23412F] border border-[#4A6741] flex items-center justify-center" style={{ borderRadius: 4 }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3" stroke="#E6DDCB" strokeWidth="1.5"/>
                <circle cx="8" cy="8" r="6" stroke="#E6DDCB" strokeWidth="0.75" strokeDasharray="2 1.5"/>
              </svg>
            </div>
            <span className="font-serif text-[#1A1A18] font-bold">KAJA BERAM</span>
          </Link>

          {mode === 'login' && (
            <div>
              <h1 className="font-serif text-[#1A1A18] font-bold text-2xl mb-1">{t.login}</h1>
              <p className="text-[#5A5A58] text-sm mb-8">{t.dontHaveAccount} <button onClick={() => setMode('register')} className="text-[#23412F] font-medium hover:underline">{t.signUp}</button></p>

              <div className="space-y-3 mb-6">
                {/* Social */}
                {['Google', 'Apple'].map(provider => (
                  <button key={provider} className="w-full flex items-center justify-center gap-2 border border-[#C8B99A] bg-[#F5F1E9] text-[#3A3A38] text-sm py-3 hover:border-[#23412F] transition-colors font-medium" style={{ borderRadius: 4 }}>
                    {t.continueWith} {provider}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-[#C8B99A]"/>
                <span className="font-mono text-[10px] text-[#7A8575]">OR</span>
                <div className="flex-1 h-px bg-[#C8B99A]"/>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <label className="font-mono text-[10px] text-[#4A6741] uppercase tracking-wider block mb-1">{t.email}</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" className={inputClass} style={{ borderRadius: 4 }} />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-[#4A6741] uppercase tracking-wider block mb-1">{t.password}</label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className={inputClass} style={{ borderRadius: 4 }} />
                </div>
              </div>

              <div className="flex justify-end mb-6">
                <button onClick={() => setMode('forgot')} className="font-mono text-[10px] text-[#4A6741] hover:text-[#23412F] transition-colors">{t.forgotPassword}</button>
              </div>

              <button className="w-full bg-[#23412F] text-[#E6DDCB] font-serif font-bold py-3.5 hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>
                {t.login}
              </button>
            </div>
          )}

          {mode === 'register' && (
            <div>
              <h1 className="font-serif text-[#1A1A18] font-bold text-2xl mb-1">{t.register}</h1>
              <p className="text-[#5A5A58] text-sm mb-8">{t.alreadyHaveAccount} <button onClick={() => setMode('login')} className="text-[#23412F] font-medium hover:underline">{t.login}</button></p>
              <div className="space-y-3 mb-6">
                <div>
                  <label className="font-mono text-[10px] text-[#4A6741] uppercase tracking-wider block mb-1">Full Name</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className={inputClass} style={{ borderRadius: 4 }} />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-[#4A6741] uppercase tracking-wider block mb-1">{t.email}</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" className={inputClass} style={{ borderRadius: 4 }} />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-[#4A6741] uppercase tracking-wider block mb-1">{t.password}</label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Minimum 8 characters" className={inputClass} style={{ borderRadius: 4 }} />
                </div>
              </div>
              <button className="w-full bg-[#23412F] text-[#E6DDCB] font-serif font-bold py-3.5 hover:bg-[#2D5238] transition-colors" style={{ borderRadius: 4 }}>
                {t.register}
              </button>
            </div>
          )}

          {mode === 'forgot' && (
            <div>
              <h1 className="font-serif text-[#1A1A18] font-bold text-2xl mb-1">Reset Password</h1>
              <p className="text-[#5A5A58] text-sm mb-8">Enter your email and we'll send a reset link.</p>
              <div className="space-y-3 mb-6">
                <div>
                  <label className="font-mono text-[10px] text-[#4A6741] uppercase tracking-wider block mb-1">{t.email}</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" className={inputClass} style={{ borderRadius: 4 }} />
                </div>
              </div>
              <button className="w-full bg-[#23412F] text-[#E6DDCB] font-serif font-bold py-3.5 hover:bg-[#2D5238] transition-colors mb-3" style={{ borderRadius: 4 }}>
                Send Reset Link
              </button>
              <button onClick={() => setMode('login')} className="w-full font-mono text-xs text-[#5A5A58] py-2 hover:text-[#23412F] transition-colors">
                ← {t.back} to {t.login}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
