export function Footer() {
  return (
    <footer className="relative py-12 px-8" style={{ backgroundColor: '#161210' }}>
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ backgroundColor: 'rgba(196,146,74,0.1)' }} />

      <div className="relative max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* PALATE wordmark - single color */}
          <div className="font-['Cormorant_Garamond'] font-light text-sm tracking-[0.3em]" style={{ color: '#EDE0C8' }}>
            PALATE
          </div>
          <div className="font-['DM_Mono'] text-[0.55rem]" style={{ color: '#3A3D42' }}>
            Taste intelligence. Passive. Personal. Precise.
          </div>
        </div>
        
        <div className="font-['DM_Mono'] text-[0.55rem]" style={{ color: '#3A3D42' }}>
          © 2025 Palate
        </div>
      </div>
    </footer>
  );
}