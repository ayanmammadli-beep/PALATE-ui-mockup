import type { View } from './Root';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Science } from './components/Science';
import { Fork } from './components/Fork';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

type AppProps = { onNavigate: (view: View) => void };

export default function App({ onNavigate }: AppProps) {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#1C1612' }}>
      {/* Film grain overlay */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.05] z-50">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      
      {/* Navigation */}
      <Navigation onNavigate={onNavigate} />
      
      {/* Sections */}
      <Hero />
      <Science />
      <Fork />
      <CTA />
      <Footer />
    </div>
  );
}
