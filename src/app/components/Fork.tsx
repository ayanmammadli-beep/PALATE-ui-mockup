import { useEffect, useRef } from 'react';
import { motion, useSpring } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const FORK_IMAGE_URL = '/fork.png';

export function Fork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 260, damping: 14 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 14 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
      if (!inside) {
        rotateX.set(0);
        rotateY.set(0);
        return;
      }
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (e.clientX - rect.left - centerX) / centerX;
      const deltaY = (e.clientY - rect.top - centerY) / centerY;
      const maxDeg = 32;
      rotateX.set(-deltaY * maxDeg);
      rotateY.set(deltaX * maxDeg);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rotateX, rotateY]);

  return (
    <section id="fork" className="py-0">
      <div className="grid md:grid-cols-2 min-h-screen">
        <div
          ref={containerRef}
          className="relative flex flex-col items-center justify-center min-h-screen p-2 md:p-4"
          style={{ backgroundColor: '#1C1612' }}
        >
          <div
            className="absolute pointer-events-none"
            style={{
              width: '60%',
              height: '80%',
              maxWidth: '320px',
              maxHeight: '520px',
              background:
                'radial-gradient(ellipse, rgba(196,146,74,0.18) 0%, transparent 70%)',
              filter: 'blur(40px)',
              transform: 'translate(-10%, -5%)',
            }}
          />

          {/* Fork: large, prongs up */}
          <div
            className="relative w-full flex items-center justify-center"
            style={{ height: '100vh', maxHeight: '100vh' }}
          >
            <motion.div
              className="w-full h-full flex items-center justify-center"
              style={{
                perspective: '1400px',
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  rotateZ: -56,
                }}
              >
                <ImageWithFallback
                  src={FORK_IMAGE_URL}
                  alt="Palate Smart Fork"
                  className="object-contain select-none h-full w-auto"
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    filter: 'drop-shadow(0 20px 56px rgba(0,0,0,0.5)) drop-shadow(0 0 100px rgba(196,146,74,0.06))',
                    objectPosition: 'center center',
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div
          className="flex flex-col justify-center p-12 lg:p-16"
          style={{ backgroundColor: '#201A15' }}
        >
          <div className="max-w-[560px]">
            <div
              className="font-['DM_Mono'] text-[0.6rem] tracking-[0.4em] uppercase mb-6"
              style={{ color: '#C4924A' }}
            >
              02 — The Instrument
            </div>
            <h2
              className="font-['Cormorant_Garamond'] font-light italic text-5xl mb-8"
              style={{ color: '#EDE0C8' }}
            >
              "A fork that understands what it touches."
            </h2>
            <div
              className="font-['Libre_Baskerville'] text-base leading-[1.85] mb-12"
              style={{ color: '#F2E8D5' }}
            >
              <p>
                Every meal you have ever eaten has been a black box. You
                experienced it. You felt something. But the data vanished the
                moment you swallowed. The Palate Fork changes that. Four embedded
                sensors capture what the food is — its texture, temperature,
                chemical composition, and structure — before it ever reaches your
                mouth. Passively. Completely. Every single bite.
              </p>
            </div>
            <div
              className="h-[1px] mb-10"
              style={{ backgroundColor: 'rgba(196,146,74,0.15)' }}
            />
            <div className="space-y-8">
              {[
                {
                  name: 'PRESSURE ARRAY',
                  desc: '200Hz continuous sampling detects food resistance, density, and structural composition as the fork makes contact.',
                },
                {
                  name: 'THERMAL TIP SENSOR',
                  desc: 'Reads surface temperature to ±0.1°C accuracy on first touch — before food reaches the mouth.',
                },
                {
                  name: 'MICRO-BIOSENSOR',
                  desc: "Detects fat, sugar, and acid concentrations on contact. The food's molecular fingerprint, captured before the first bite.",
                },
                {
                  name: 'BLUETOOTH LE',
                  desc: 'Pairs wirelessly with the Palate app. Magnetic charging. Dishwasher-safe. Designed to vanish into a normal meal.',
                },
              ].map((spec, idx) => (
                <div key={idx}>
                  <div
                    className="font-['DM_Mono'] text-[0.6rem] uppercase mb-2"
                    style={{ color: '#C4924A' }}
                  >
                    {spec.name}
                  </div>
                  <div
                    className="font-['Libre_Baskerville'] text-[0.9rem] leading-relaxed"
                    style={{ color: '#A89070' }}
                  >
                    {spec.desc}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="mt-12 font-['Cormorant_Garamond'] font-light italic text-xl"
              style={{ color: '#C4614A' }}
            >
              "Every bite is a data point. You will never notice."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
