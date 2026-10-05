'use client';

import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";
import VideoPlayer from "@/components/VideoPlayer";
import SnowfallBackground from "@/components/SnowfallBackground";
import UnlockOverlay from "@/components/UnlockOverlay";
import { Button } from "@/components/ui/button";
import { CalendarDays, GlassWater, MapPin, Gift, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

// Season 5 config
const VIDEO_SRC = "/cfe-season-5.mp4";
const ENGELLIS_PRICE = 125; // for the pair
// Invites go out Mon Oct 5, 2026 at 7:37 PM ET. Each tier holds until its endsAt.
// Prices are per ticket; tickets are sold in pairs.
const PRICE_TIERS = [
  { price: 127, label: 'First 24 Hours', endsAt: new Date('2026-10-06T19:37:00-04:00') },
  { price: 137, label: 'Launch Special', endsAt: new Date('2026-10-08T19:37:00-04:00') },
  { price: 147, label: 'Ticket', endsAt: null },
] as const;

// e.g. "Tue 7:37 PM"; fixed time zone keeps server and client output identical
function formatShort(date: Date) {
  const day = date.toLocaleDateString('en-US', { timeZone: 'America/New_York', weekday: 'short' });
  const time = date.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit' });
  return `${day} ${time}`;
}

function currentTierIndex() {
  const i = PRICE_TIERS.findIndex((tier) => !tier.endsAt || tier.endsAt.getTime() > Date.now());
  return i === -1 ? PRICE_TIERS.length - 1 : i;
}

type CodeType = 'SZN5' | 'ENGELLIS';
// Keys are uppercase with spaces removed, so "Season 5", "season5" and "SZN 5" all match
const CODES: Record<string, CodeType> = { SZN5: 'SZN5', SEASON5: 'SZN5', ENGELLIS: 'ENGELLIS' };

function matchCode(input: string): CodeType | null {
  return CODES[input.replace(/\s+/g, '').toUpperCase()] ?? null;
}

const DETAILS = [
  { icon: CalendarDays, value: 'Sat, Dec 5 · 7:37 PM' },
  { icon: GlassWater, value: 'Open bar' },
  { icon: MapPin, value: 'Manhattan' },
  { icon: Gift, value: 'Theme TBA 🎅' },
];

export default function Home() {
  const [secretCode, setSecretCode] = useState('');
  const [tierIndex, setTierIndex] = useState(0);
  const [linkCode, setLinkCode] = useState<string | null>(null);

  // Invite links carry the code, e.g. thecfe.net/?code=SZN5 (utm_content works too)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromLink = params.get('code') ?? params.get('utm_content');
    if (fromLink && matchCode(fromLink)) setLinkCode(fromLink.replace(/\s+/g, '').toUpperCase());
  }, []);

  const handleUnlockContinue = () => {
    if (linkCode) setSecretCode(linkCode);
    setLinkCode(null);
  };

  // Step to the next price tier exactly when the current one ends
  useEffect(() => {
    const actual = currentTierIndex();
    if (actual !== tierIndex) {
      setTierIndex(actual);
      return;
    }
    const endsAt = PRICE_TIERS[tierIndex].endsAt;
    if (!endsAt) return;
    const timer = setTimeout(() => setTierIndex(currentTierIndex()), endsAt.getTime() - Date.now());
    return () => clearTimeout(timer);
  }, [tierIndex]);

  const activeCodeType = matchCode(secretCode);
  const tier = PRICE_TIERS[tierIndex];
  const nextTier = PRICE_TIERS[tierIndex + 1];
  const basePrice = tier.price * 2;
  const currentPrice = activeCodeType === 'ENGELLIS' ? ENGELLIS_PRICE : basePrice;

  const handlePurchaseClick = () => {
    if (!activeCodeType) return;
    const note = activeCodeType === 'ENGELLIS'
      ? 'Engellis Special CFE Season 5'
      : `CFE Season 5 ${tier.label}`;
    window.open(
      `https://venmo.com/Austin-marchese?txn=pay&amount=${currentPrice}&note=${encodeURIComponent(note)}`,
      '_blank'
    );
  };

  return (
    <div className="relative h-[100dvh] overflow-hidden bg-[#03140c] text-white">
      <SnowfallBackground />
      {linkCode && <UnlockOverlay code={linkCode} onContinue={handleUnlockContinue} />}

      <main className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col items-center gap-3 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        {/* Header */}
        <header className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="CFE"
            width={48}
            height={48}
            priority
            className="drop-shadow-[0_0_16px_rgba(255,214,0,0.3)]"
          />
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-cfe-gold/80">Season V · You made the list</p>
            <h1 className="font-display text-base font-semibold leading-tight text-cfe-gold sm:text-lg">
              Christmas Formal Extravaganza
            </h1>
          </div>
        </header>

        {/* Video: takes all remaining height */}
        <div className="flex min-h-0 w-full flex-1 items-center justify-center [container-type:size]">
          {/* Largest 9:16 box that fits both the available height and width */}
          <VideoPlayer
            videoSrc={VIDEO_SRC}
            title="Season 5 is coming"
            className="h-[min(100cqh,calc(100cqw*16/9))]"
          />
        </div>

        {/* Event details */}
        <ul className="flex shrink-0 flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-white/80">
          {DETAILS.map(({ icon: Icon, value }) => (
            <li key={value} className="flex items-center gap-1">
              <Icon className="h-3 w-3 text-cfe-gold" />
              {value}
            </li>
          ))}
        </ul>

        {/* Price ladder: countdown to the next bump + every tier */}
        <div className="w-full shrink-0 overflow-hidden rounded-2xl border border-cfe-gold/30 bg-[#052016]/80 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3 border-b border-cfe-gold/20 px-4 py-1.5">
            {tier.endsAt && nextTier ? (
              <>
                <p className="text-[11px] font-semibold uppercase leading-tight tracking-[0.15em] text-cfe-gold">
                  Price goes up
                  <br />
                  to ${nextTier.price} in
                </p>
                <CountdownTimer targetDate={tier.endsAt} />
              </>
            ) : (
              <p className="w-full py-1 text-center text-xs font-semibold uppercase tracking-[0.15em] text-cfe-gold">
                SZN5 tickets are live
              </p>
            )}
          </div>
          <ol className="grid grid-cols-3">
            {PRICE_TIERS.map((t, i) => {
              const isCurrent = i === tierIndex;
              const isPast = i < tierIndex;
              const prev = PRICE_TIERS[i - 1];
              const when = t.endsAt ? `Until ${formatShort(t.endsAt)}` : prev?.endsAt ? `After ${formatShort(prev.endsAt)}` : '';
              return (
                <li
                  key={t.price}
                  className={`min-w-0 px-2 py-1.5 text-center ${i > 0 ? 'border-l border-cfe-gold/15' : ''} ${isCurrent ? 'bg-cfe-gold/15' : ''}`}
                >
                  <p className={`text-lg font-bold leading-tight ${isCurrent ? 'text-white' : 'text-white/40'} ${isPast ? 'line-through decoration-cfe-gold/60' : ''}`}>
                    ${t.price}
                    {isCurrent && <span className="ml-1 align-middle text-[9px] font-semibold uppercase tracking-wider text-cfe-gold">Now</span>}
                  </p>
                  <p className={`text-[10px] leading-tight ${isCurrent ? 'text-white/75' : 'text-white/35'}`}>{when}</p>
                </li>
              );
            })}
          </ol>
          <p className="border-t border-cfe-gold/15 py-0.5 text-center text-[10px] text-white/55">
            Per ticket · Sold in pairs · All times ET
          </p>
        </div>

        {/* Secret code + purchase */}
        <div className="w-full shrink-0 space-y-2">
          <input
            type="text"
            value={secretCode}
            onChange={(e) => setSecretCode(e.target.value)}
            placeholder="🔐 Enter secret code"
            aria-label="Secret code"
            autoCapitalize="characters"
            autoComplete="off"
            spellCheck={false}
            className={`
              w-full rounded-full border-2 bg-cfe-gold/10 px-4 py-3 text-center text-lg font-bold tracking-widest
              text-white placeholder:font-semibold placeholder:tracking-normal placeholder:text-white/50
              backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cfe-gold/30
              ${activeCodeType ? 'border-cfe-gold shadow-lg shadow-cfe-gold/30' : 'border-cfe-gold/50 hover:bg-cfe-gold/15 focus:border-cfe-gold'}
            `}
          />

          {/* Fixed-height slot so the video never jumps when the button appears */}
          <div className="flex h-12 items-center justify-center">
            {activeCodeType ? (
              <Button
                size="lg"
                onClick={handlePurchaseClick}
                className="
                  group relative h-12 w-full overflow-hidden rounded-full border-0
                  bg-gradient-to-r from-[#b8860b] via-cfe-gold to-[#b8860b]
                  text-sm font-bold uppercase tracking-wider text-[#03140c]
                  shadow-2xl shadow-cfe-gold/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-cfe-gold/50
                "
              >
                <span className="relative z-10">Reserve 2 Tickets · ${currentPrice}</span>
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
              </Button>
            ) : (
              <p className="text-xs text-white/55">💡 The secret code is in your invite.</p>
            )}
          </div>
        </div>

        {/* Guarantee */}
        <p className="flex shrink-0 items-center gap-1.5 text-[10px] text-white/55">
          <ShieldCheck className="h-3 w-3 shrink-0 text-cfe-gold" />
          CFE Guarantee: full refund if you can&apos;t make it, before Oct 15.
        </p>
      </main>
    </div>
  );
}
