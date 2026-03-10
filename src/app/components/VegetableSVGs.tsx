export function TomatoSlice({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1" />
      {/* Seed pockets */}
      <ellipse cx="50" cy="28" rx="4" ry="6" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="68" cy="40" rx="4" ry="6" stroke="currentColor" strokeWidth="1" transform="rotate(60 68 40)" />
      <ellipse cx="68" cy="60" rx="4" ry="6" stroke="currentColor" strokeWidth="1" transform="rotate(120 68 60)" />
      <ellipse cx="50" cy="72" rx="4" ry="6" stroke="currentColor" strokeWidth="1" transform="rotate(180 50 72)" />
      <ellipse cx="32" cy="60" rx="4" ry="6" stroke="currentColor" strokeWidth="1" transform="rotate(240 32 60)" />
      <ellipse cx="32" cy="40" rx="4" ry="6" stroke="currentColor" strokeWidth="1" transform="rotate(300 32 40)" />
    </svg>
  );
}

export function LemonSlice({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="50" cy="50" rx="42" ry="45" stroke="currentColor" strokeWidth="1" />
      {/* Radial segments */}
      <line x1="50" y1="50" x2="50" y2="5" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="50" x2="85" y2="20" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="50" x2="85" y2="80" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="50" x2="50" y2="95" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="50" x2="15" y2="80" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="50" x2="8" y2="50" stroke="currentColor" strokeWidth="1" />
      <line x1="50" y1="50" x2="15" y2="20" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function FennelBulb({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="50" cy="50" rx="40" ry="45" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="32" ry="37" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="24" ry="29" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="16" ry="21" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="8" ry="13" stroke="currentColor" strokeWidth="1" />
      <path d="M 30 30 Q 50 45 70 30" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M 25 45 Q 50 55 75 45" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M 20 60 Q 50 65 80 60" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function GrainOverlay() {
  return (
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
  );
}
