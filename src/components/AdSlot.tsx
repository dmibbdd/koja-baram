import { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';

/**
 * ─────────────────────────────────────────────────────────────────────────
 * GOOGLE ADSENSE — HOW TO ACTIVATE REAL ADS
 * ─────────────────────────────────────────────────────────────────────────
 * 1. Get approved at https://adsense.google.com and grab your Publisher ID
 *    (looks like "ca-pub-1234567890123456").
 * 2. Add the AdSense loader script to `index.html`, inside <head>:
 *
 *      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
 *        crossorigin="anonymous"></script>
 *
 * 3. In Google AdSense, create an "Ad unit" for each slot below and copy its
 *    Slot ID (a number like "1234567890").
 * 4. Set ADSENSE_CLIENT and paste each slot's ID where this component is
 *    used (see the `slot` prop below).
 * 5. Set SHOW_REAL_ADS to true. Until then, this component renders a clearly
 *    labeled placeholder box so you can see where ads will appear without
 *    violating AdSense policy (which forbids live ads on unapproved sites).
 * ─────────────────────────────────────────────────────────────────────────
 */
const ADSENSE_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX'; // ← replace after approval
const SHOW_REAL_ADS = false; // ← flip to true once ADSENSE_CLIENT is real

interface AdSlotProps {
  /** AdSense ad unit slot ID, e.g. "1234567890". Only needed once SHOW_REAL_ADS is true. */
  slot?: string;
  /** Visual size hint — affects the placeholder's shape only. */
  variant?: 'leaderboard' | 'rectangle' | 'in-feed';
  className?: string;
}

const VARIANT_STYLES: Record<NonNullable<AdSlotProps['variant']>, string> = {
  leaderboard: 'h-24 sm:h-28',
  rectangle: 'h-64',
  'in-feed': 'h-40',
};

export default function AdSlot({ slot, variant = 'leaderboard', className = '' }: AdSlotProps) {
  const { lang } = useApp();
  const insRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (!SHOW_REAL_ADS) return;
    try {
      // @ts-expect-error — adsbygoogle is injected globally by the AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense script not loaded yet — safe to ignore
    }
  }, []);

  if (SHOW_REAL_ADS) {
    return (
      <ins
        ref={insRef}
        className="adsbygoogle block"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }

  // ── Placeholder shown until real ads are switched on ──
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-[#C8B99A] bg-[#F5F1E9]/60 ${VARIANT_STYLES[variant]} ${className}`}
      style={{ borderRadius: 4 }}
    >
      <span className="font-mono text-[10px] tracking-widest uppercase text-[#9B9384]">
        {lang === 'fa' ? 'جای تبلیغ' : 'Advertisement'}
      </span>
    </div>
  );
}
