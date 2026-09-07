import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="bg-[#1A1A18] border-t border-[#2A2A28] text-[#9BAEC4]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-[#23412F] border border-[#4A6741] flex items-center justify-center" style={{ borderRadius: 4 }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="3" stroke="#E6DDCB" strokeWidth="1.5"/>
                  <circle cx="8" cy="8" r="6" stroke="#E6DDCB" strokeWidth="0.75" strokeDasharray="2 1.5"/>
                </svg>
              </div>
              <span className="font-serif text-[#E6DDCB] font-bold text-sm">KAJA BERAM</span>
            </div>
            <p className="text-sm leading-relaxed text-[#6B7F94] mb-4">{t.footerTagline}</p>
            <p className="font-mono text-xs text-[#4A6741]">کجا برم؟</p>
          </div>

          {/* Discover */}
          <div>
            <h4 className="font-serif text-[#C8B99A] text-sm font-bold mb-4 uppercase tracking-widest">Discover</h4>
            <ul className="space-y-2.5 text-sm">
              {['Destinations', 'Cities', 'Attractions', 'Travel Guides', 'Hidden Gems'].map(item => (
                <li key={item}><Link to="/explore" className="hover:text-[#E6DDCB] transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Plan */}
          <div>
            <h4 className="font-serif text-[#C8B99A] text-sm font-bold mb-4 uppercase tracking-widest">Plan</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'AI Trip Planner', path: '/ai-planner' },
                { label: 'My Trips', path: '/dashboard' },
                { label: 'Saved Places', path: '/dashboard' },
                { label: 'Itineraries', path: '/dashboard' },
                { label: 'Nearby Places', path: '/nearby' },
              ].map(item => (
                <li key={item.label}><Link to={item.path} className="hover:text-[#E6DDCB] transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-[#C8B99A] text-sm font-bold mb-4 uppercase tracking-widest">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-[#E6DDCB] transition-colors">{t.about}</Link></li>
              {[t.blog, t.careers, t.advertise, t.helpCenter].map(item => (
                <li key={item}><a href="#" className="hover:text-[#E6DDCB] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-[#C8B99A] text-sm font-bold mb-4 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/privacy" className="hover:text-[#E6DDCB] transition-colors">{t.privacy}</Link></li>
              <li><a href="#" className="hover:text-[#E6DDCB] transition-colors">{t.terms}</a></li>
              <li><Link to="/contact" className="hover:text-[#E6DDCB] transition-colors">{t.contact}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2A2A28] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-[#4A5A6B]">© 2026 KAJA BERAM — All destinations verified and isolated</p>
          <div className="flex items-center gap-6 font-mono text-xs text-[#4A5A6B]">
            <span>8 Cities</span>
            <span>·</span>
            <span>13+ Attractions</span>
            <span>·</span>
            <span>2 Languages</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
