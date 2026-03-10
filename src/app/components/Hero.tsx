import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ height: '75vh', backgroundColor: '#1C1612' }}>
      {/* YouTube video background */}
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/rLXYILcRoPQ?autoplay=1&mute=1&loop=1&playlist=rLXYILcRoPQ&start=5&end=25&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Background Video"
          allow="autoplay; encrypted-media"
          style={{
            pointerEvents: 'none',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.2)',
          }}
        />
        
        {/* Overlay gradient - much lighter to keep video vivid */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(28,22,18,0.25) 0%, rgba(28,22,18,0.35) 60%, rgba(28,22,18,0.95) 90%, #1C1612 100%)'
          }}
        />
      </div>

      {/* Optional ghosted wordmark in bottom-right */}
      <div className="absolute bottom-8 right-8 z-10">
        <div 
          className="font-['DM_Mono'] text-[0.5rem] tracking-[0.3em]"
          style={{ color: 'rgba(196,146,74,0.4)' }}
        >
          PALATE
        </div>
      </div>
    </section>
  );
}