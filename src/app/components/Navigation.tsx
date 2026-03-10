import type { View } from '../Root';

type NavigationProps = { onNavigate: (view: View) => void };

export function Navigation({ onNavigate }: NavigationProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'The Sense', id: 'science', scroll: true },
    { label: 'The Fork', id: 'fork', scroll: true },
    { label: 'Your Palate', go: 'palate' as const, scroll: false },
    { label: 'Waitlist', id: 'cta', scroll: true },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14"
      style={{
        backgroundColor: 'rgba(28,22,18,0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-8 h-full flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="font-['Cormorant_Garamond'] font-light text-[1.1rem] tracking-[0.3em] transition-opacity hover:opacity-90 bg-transparent border-none cursor-pointer p-0"
          style={{ color: '#EDE0C8' }}
        >
          PALATE
        </button>

        <div className="flex gap-6 items-center">
          {links.map((item, idx) => (
            <span key={item.label}>
              {idx > 0 && <span style={{ color: '#6A8591' }} className="mr-6">·</span>}
              {item.scroll ? (
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id!)}
                  className="font-['DM_Mono'] text-[0.6rem] uppercase tracking-wider transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                  style={{ color: '#6A8591' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C4924A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6A8591';
                  }}
                >
                  {item.label}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onNavigate(item.go!)}
                  className="font-['DM_Mono'] text-[0.6rem] uppercase tracking-wider transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                  style={{ color: '#6A8591' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C4924A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6A8591';
                  }}
                >
                  {item.label}
                </button>
              )}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}