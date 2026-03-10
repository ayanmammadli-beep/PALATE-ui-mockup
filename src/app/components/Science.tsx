import { useState } from 'react';

export function Science() {
  const [hoveredRing, setHoveredRing] = useState<string | null>(null);

  return (
    <section id="science" className="py-32 px-8" style={{ backgroundColor: '#1C1612' }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="font-['DM_Mono'] text-[0.6rem] tracking-[0.4em] uppercase mb-8" style={{ color: '#C4924A' }}>
          01 — The Invisible Sense
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left column */}
          <div>
            <h2 className="font-['Cormorant_Garamond'] font-light text-5xl mb-8" style={{ color: '#EDE0C8' }}>
              "80% of what you call taste is actually smell."
            </h2>

            <div className="font-['Libre_Baskerville'] text-base leading-[1.9] mb-10" style={{ color: '#F2E8D5' }}>
              <p className="mb-6">
                When you bite into food, your tongue registers only five signals: sweet, salty, sour, bitter, umami. The richness — the specificity of flavor — happens entirely elsewhere.
              </p>
              <p className="mb-6">
                As you chew, aromatic molecules travel upward through the nasopharynx, the passage connecting your mouth to your nose. This retrograde pathway is called retronasal olfaction, and it is the dominant engine of flavor perception. Gordon Shepherd's <em>Neurogastronomy</em> (2012) established that the brain's flavor construction is primarily olfactory, not gustatory.
              </p>
              <p>
                Palate captures this pathway directly — passively, continuously, and without any input from you.
              </p>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-4">
              {[
                { number: '80%', label: 'retronasal contribution to flavor' },
                { number: '~1,000', label: 'VOC compounds in a single meal' },
                { number: '100M', label: 'post-COVID smell disruption cases' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 border transition-all duration-300 cursor-default"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(196,146,74,0.25)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(196,146,74,0.6)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(196,146,74,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(196,146,74,0.25)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="font-['DM_Mono'] text-[0.6rem]">
                    <span style={{ color: '#B84C3A' }}>{stat.number}</span>
                    <span style={{ color: '#F2E8D5' }}> — {stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Concentric rings */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[400px] aspect-square">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Outer ring - Retronasal Olfaction */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="rgba(196,146,74,0.05)"
                  stroke="#C4924A"
                  strokeWidth="1"
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    filter: hoveredRing === 'outer' ? 'drop-shadow(0 0 12px rgba(196,146,74,0.4))' : 'none',
                    opacity: hoveredRing === 'outer' ? 1 : 0.8
                  }}
                  onMouseEnter={() => setHoveredRing('outer')}
                  onMouseLeave={() => setHoveredRing(null)}
                />
                
                {/* Middle ring - Texture + Temperature */}
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="rgba(106,133,145,0.05)"
                  stroke="#6A8591"
                  strokeWidth="1"
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    filter: hoveredRing === 'middle' ? 'drop-shadow(0 0 12px rgba(106,133,145,0.4))' : 'none',
                    opacity: hoveredRing === 'middle' ? 1 : 0.8
                  }}
                  onMouseEnter={() => setHoveredRing('middle')}
                  onMouseLeave={() => setHoveredRing(null)}
                />
                
                {/* Inner ring - Taste Receptors */}
                <circle
                  cx="200"
                  cy="200"
                  r="60"
                  fill="rgba(184,76,58,0.05)"
                  stroke="#B84C3A"
                  strokeWidth="1"
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    filter: hoveredRing === 'inner' ? 'drop-shadow(0 0 12px rgba(184,76,58,0.4))' : 'none',
                    opacity: hoveredRing === 'inner' ? 1 : 0.8
                  }}
                  onMouseEnter={() => setHoveredRing('inner')}
                  onMouseLeave={() => setHoveredRing(null)}
                />

                {/* Labels */}
                <text
                  x="200"
                  y="30"
                  textAnchor="middle"
                  className="font-['DM_Mono'] text-[9px] uppercase tracking-wider"
                  fill="#C4924A"
                >
                  Retronasal Olfaction
                </text>
                <text
                  x="200"
                  y="90"
                  textAnchor="middle"
                  className="font-['DM_Mono'] text-[8px] uppercase tracking-wider"
                  fill="#6A8591"
                >
                  Texture + Temperature
                </text>
                <text
                  x="200"
                  y="150"
                  textAnchor="middle"
                  className="font-['DM_Mono'] text-[8px] uppercase tracking-wider"
                  fill="#B84C3A"
                >
                  Taste Receptors
                </text>
                <text
                  x="200"
                  y="205"
                  textAnchor="middle"
                  className="font-['DM_Mono'] italic text-[10px]"
                  fill="#EDE0C8"
                >
                  the constructed
                </text>
                <text
                  x="200"
                  y="218"
                  textAnchor="middle"
                  className="font-['DM_Mono'] italic text-[10px]"
                  fill="#EDE0C8"
                >
                  experience
                </text>
              </svg>

              {/* Floating labels */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { label: 'VOC Compounds', angle: 0 },
                  { label: 'Thermal Sensing', angle: 60 },
                  { label: 'Texture / Pressure', angle: 120 },
                  { label: 'Saliva Chemistry', angle: 180 },
                  { label: 'Memory Association', angle: 240 },
                  { label: 'Emotional State', angle: 300 }
                ].map((item, idx) => {
                  const radius = 220;
                  const x = 200 + radius * Math.cos((item.angle - 90) * Math.PI / 180);
                  const y = 200 + radius * Math.sin((item.angle - 90) * Math.PI / 180);
                  
                  return (
                    <div
                      key={idx}
                      className="absolute font-['DM_Mono'] text-[0.5rem] whitespace-nowrap"
                      style={{
                        color: '#6A8591',
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
