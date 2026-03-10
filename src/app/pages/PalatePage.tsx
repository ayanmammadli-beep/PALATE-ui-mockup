import { useState, useRef, useEffect } from 'react';
import type { View } from '../Root';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  CartesianGrid,
} from 'recharts';

const PALETTE = ['#C4924A', '#B84C3A', '#6A8591', '#C4614A', '#A89070'];

const FLAVOR_COMPONENTS = [
  { name: 'Retronasal smell', pct: 52, color: '#C4924A' },
  { name: 'Texture', pct: 24, color: '#B84C3A' },
  { name: 'Temperature', pct: 14, color: '#6A8591' },
  { name: 'Taste receptors', pct: 10, color: '#C4614A' },
];

const TOP_TASTES = [
  { taste: 'Umami', score: 88, fill: PALETTE[0] },
  { taste: 'Salt', score: 72, fill: PALETTE[1] },
  { taste: 'Acid', score: 65, fill: PALETTE[2] },
  { taste: 'Sweet', score: 58, fill: PALETTE[3] },
  { taste: 'Bitter', score: 41, fill: PALETTE[4] },
];

const WEEKLY_PROFILE = [
  { day: 'Mon', retronasal: 48, texture: 26, heat: 72 },
  { day: 'Tue', retronasal: 52, texture: 28, heat: 68 },
  { day: 'Wed', retronasal: 45, texture: 32, heat: 75 },
  { day: 'Thu', retronasal: 55, texture: 24, heat: 70 },
  { day: 'Fri', retronasal: 58, texture: 22, heat: 78 },
  { day: 'Sat', retronasal: 62, texture: 20, heat: 82 },
  { day: 'Sun', retronasal: 50, texture: 26, heat: 74 },
];

const SUGGESTIONS = [
  { headline: 'Heat amplifies your pleasure', body: 'Your enjoyment was 52% retronasal smell. Eat this dish warmer next time — heat amplifies VOC release.', icon: '◇' },
  { headline: 'Texture was a drag', body: 'This meal scored 40% lower than your baseline when food is soft. Try a crunchier preparation.', icon: '◈' },
  { headline: 'Peak flavor was bite 3', body: "That's when the fat compounds hit your retronasal pathway. More olive oil or butter next time.", icon: '◎' },
];

function getBotReply(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('recommend') || lower.includes('suggest') || lower.includes('try')) {
    const options = [
      "Given your retronasal-heavy profile, try **roasted mushrooms with a touch of soy sauce** — heat + umami will light up your palate.",
      "How about **seared scallops with brown butter**? Your data shows peak enjoyment when fat and heat hit together.",
      "You might love **tomato bruschetta with fresh basil** — acid and aroma are in your sweet spot.",
    ];
    return options[Math.floor(Math.random() * options.length)];
  }
  if (lower.includes('umami') || lower.includes('savory')) {
    return "Your umami sensitivity is high. Add a dash of **fish sauce or Parmesan** to boost depth without overpowering.";
  }
  if (lower.includes('sweet') || lower.includes('dessert')) {
    return "Your sweet score is moderate — try **dark chocolate with sea salt** or **fruit with a squeeze of lemon** to balance.";
  }
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return "Hi! I'm here to suggest foods that match your flavor fingerprint. Ask me to recommend something new to try.";
  }
  return "Based on your Retronasal Romantic profile, I’d suggest trying warmer, aroma-forward dishes. Ask me to **recommend something** and I’ll tailor it to your data.";
}

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm your Palate guide. Ask me to **recommend something to try** or ask about your flavor profile." },
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight);
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setInput('');
    setMessages((m) => [...m, { role: 'user', text: userText }]);
    setTimeout(() => {
      const reply = getBotReply(userText);
      setMessages((m) => [...m, { role: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        style={{ backgroundColor: '#C4924A', color: '#1C1612' }}
        aria-label="Open food recommendations"
      >
        <span className="text-xl">✦</span>
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] rounded-xl shadow-2xl flex flex-col overflow-hidden"
          style={{
            backgroundColor: 'rgba(28,22,18,0.98)',
            border: '1px solid rgba(196,146,74,0.3)',
            maxHeight: '480px',
          }}
        >
          <div className="px-4 py-3 border-b font-['DM_Mono'] text-[0.6rem] uppercase tracking-wider" style={{ borderColor: 'rgba(196,146,74,0.2)', color: '#C4924A' }}>
            Try something new
          </div>
          <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[240px]">
            {messages.map((msg, i) => (
              <div key={i} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
                <div
                  className="inline-block px-4 py-2 rounded-lg text-sm font-['Libre_Baskerville'] max-w-[85%]"
                  style={{
                    backgroundColor: msg.role === 'user' ? 'rgba(196,146,74,0.25)' : 'rgba(106,133,145,0.2)',
                    color: msg.role === 'user' ? '#EDE0C8' : '#E8DCC8',
                  }}
                >
                  <span style={{ whiteSpace: 'pre-wrap' }}>
                    {msg.text.split('**').map((part, j) => (j % 2 === 1 ? <strong key={j} style={{ color: '#C4924A' }}>{part}</strong> : part))}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex gap-2" style={{ borderColor: 'rgba(196,146,74,0.2)' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask for a recommendation..."
              className="flex-1 px-4 py-2 rounded-lg font-['DM_Mono'] text-[0.7rem] bg-[#201A15] border outline-none transition-colors"
              style={{ color: '#EDE0C8', borderColor: 'rgba(196,146,74,0.3)' }}
            />
            <button
              type="button"
              onClick={send}
              className="px-4 py-2 rounded-lg font-['DM_Mono'] text-[0.65rem] uppercase transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C4924A', color: '#1C1612' }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const chartTheme = {
  grid: { stroke: 'rgba(196,146,74,0.15)' },
  axis: { stroke: '#6A8591', fontSize: 10 },
  tooltip: { contentStyle: { background: '#201A15', border: '1px solid rgba(196,146,74,0.3)', borderRadius: 8 }, labelStyle: { color: '#EDE0C8' } },
};

type PalatePageProps = { onNavigate: (view: View) => void };

export function PalatePage({ onNavigate }: PalatePageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0d0b09' }}>
      {/* Background swirls */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute rounded-full opacity-[0.35] blur-[120px] w-[80vmax] h-[80vmax] -top-[20%] -left-[10%] bg-[radial-gradient(circle,#C4924A_0%,transparent_70%)] animate-[swirl1_25s_ease-in-out_infinite]" />
        <div className="absolute rounded-full opacity-[0.25] blur-[100px] w-[60vmax] h-[60vmax] -bottom-[15%] -right-[10%] bg-[radial-gradient(circle,#B84C3A_0%,transparent_65%)] animate-[swirl2_30s_ease-in-out_infinite]" />
        <div className="absolute rounded-full opacity-[0.2] blur-[90px] w-[50vmax] h-[50vmax] top-[40%] left-[30%] bg-[radial-gradient(circle,#6A8591_0%,transparent_60%)] animate-[swirl3_22s_ease-in-out_infinite]" />
        <div className="absolute rounded-full opacity-[0.2] blur-[80px] w-[40vmax] h-[40vmax] top-[10%] right-[20%] bg-[radial-gradient(circle,#C4614A_0%,transparent_60%)] animate-[swirl1_28s_ease-in-out_infinite_reverse]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-8 bg-[rgba(13,11,9,0.7)] backdrop-blur-[12px]">
        <button type="button" onClick={() => onNavigate('home')} className="font-['Cormorant_Garamond'] font-light text-[1.1rem] tracking-[0.3em] text-[#EDE0C8] hover:opacity-90 bg-transparent border-none cursor-pointer p-0">PALATE</button>
        <div className="flex items-center gap-6 font-['DM_Mono'] text-[0.6rem] uppercase tracking-wider">
          <span className="text-[#C4924A]">Your Palate</span>
          <span className="text-[#6A8591]">·</span>
          <button type="button" onClick={() => onNavigate('home')} className="text-[#6A8591] hover:text-[#C4924A] transition-colors bg-transparent border-none cursor-pointer p-0">Waitlist</button>
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-32 px-6 md:px-12 max-w-[960px] mx-auto">
        <header className="text-center mb-16">
          <div className="font-['DM_Mono'] text-[0.55rem] tracking-[0.4em] uppercase mb-4 text-[#C4924A]">Your flavor fingerprint</div>
          <h1 className="font-['Cormorant_Garamond'] font-light italic text-4xl md:text-6xl mb-6 text-[#EDE0C8]">Retronasal Romantic</h1>
          <p className="font-['Libre_Baskerville'] text-lg md:text-xl max-w-[520px] mx-auto leading-relaxed text-[#A89070]">
            Your brain builds flavor mostly from smell. Heat and fat unlock your peak enjoyment.
          </p>
        </header>

        {/* Your top tastes — animated bar chart */}
        <section className="mb-16">
          <h2 className="font-['DM_Mono'] text-[0.55rem] tracking-[0.3em] uppercase mb-6 text-center text-[#6A8591]">Your top tastes</h2>
          <div className="rounded-xl p-6 md:p-8 h-72" style={{ backgroundColor: 'rgba(28,22,18,0.6)', border: '1px solid rgba(196,146,74,0.2)' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TOP_TASTES} layout="vertical" margin={{ top: 8, right: 24, left: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid.stroke} horizontal={false} />
                <XAxis type="number" domain={[0, 100]} stroke={chartTheme.axis.stroke} tick={{ fill: '#6A8591', fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
                <YAxis type="category" dataKey="taste" width={56} stroke={chartTheme.axis.stroke} tick={{ fill: '#EDE0C8', fontSize: 11 }} />
                <Tooltip contentStyle={chartTheme.tooltip.contentStyle} labelStyle={chartTheme.tooltip.labelStyle} formatter={(v: number) => [`${v}%`, 'Score']} cursor={{ fill: 'rgba(196,146,74,0.08)' }} />
                <Bar dataKey="score" radius={[0, 4, 4, 0]} isAnimationActive animationDuration={1200} animationEasing="ease-out" maxBarSize={28}>
                  {TOP_TASTES.map((_, i) => (
                    <Cell key={i} fill={TOP_TASTES[i].fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Your profile over the week — animated line/area */}
        <section className="mb-16">
          <h2 className="font-['DM_Mono'] text-[0.55rem] tracking-[0.3em] uppercase mb-6 text-center text-[#6A8591]">Your profile over the week</h2>
          <div className="rounded-xl p-6 md:p-8 h-72" style={{ backgroundColor: 'rgba(28,22,18,0.6)', border: '1px solid rgba(196,146,74,0.2)' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={WEEKLY_PROFILE} margin={{ top: 12, right: 12, left: 0, bottom: 8 }}>
                <defs>
                  <linearGradient id="retroGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C4924A" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#C4924A" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="textureGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B84C3A" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#B84C3A" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="heatGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C4614A" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#C4614A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid.stroke} />
                <XAxis dataKey="day" stroke={chartTheme.axis.stroke} tick={{ fill: '#6A8591', fontSize: 11 }} />
                <YAxis stroke={chartTheme.axis.stroke} tick={{ fill: '#6A8591', fontSize: 10 }} domain={[0, 100]} />
                <Tooltip contentStyle={chartTheme.tooltip.contentStyle} labelStyle={chartTheme.tooltip.labelStyle} />
                <Area type="monotone" dataKey="retronasal" stroke="#C4924A" strokeWidth={2} fill="url(#retroGrad)" isAnimationActive animationDuration={1000} name="Retronasal" />
                <Area type="monotone" dataKey="texture" stroke="#B84C3A" strokeWidth={2} fill="url(#textureGrad)" isAnimationActive animationDuration={1000} animationBegin={150} name="Texture" />
                <Area type="monotone" dataKey="heat" stroke="#C4614A" strokeWidth={2} fill="url(#heatGrad)" isAnimationActive animationDuration={1000} animationBegin={300} name="Heat preference" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Flavor constellation */}
        <section className="mb-16">
          <h2 className="font-['DM_Mono'] text-[0.55rem] tracking-[0.3em] uppercase mb-8 text-center text-[#6A8591]">Last meal · Flavor constellation</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="w-64 h-64 md:w-72 md:h-72 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {(() => {
                  const circumference = 2 * Math.PI * 42;
                  let offset = 0;
                  return FLAVOR_COMPONENTS.map((comp, i) => {
                    const dashLen = (comp.pct / 100) * circumference;
                    const el = (
                      <circle key={i} cx="50" cy="50" r="42" fill="none" stroke={comp.color} strokeWidth="12" strokeDasharray={`${dashLen} ${circumference}`} strokeDashoffset={-offset} opacity={0.9} className="transition-all duration-700" />
                    );
                    offset += dashLen;
                    return el;
                  });
                })()}
                {FLAVOR_COMPONENTS.map((_, i) => {
                  let startDeg = 0;
                  for (let j = 0; j < i; j++) startDeg += (FLAVOR_COMPONENTS[j].pct / 100) * 360;
                  const midDeg = startDeg + (FLAVOR_COMPONENTS[i].pct / 100) * 180;
                  const rad = (midDeg * Math.PI) / 180;
                  const x = 50 + 32 * Math.cos(rad);
                  const y = 50 + 32 * Math.sin(rad);
                  return <circle key={`dot-${i}`} cx={x} cy={y} r="2.5" fill={FLAVOR_COMPONENTS[i].color} opacity={0.95} />;
                })}
              </svg>
            </div>
            <ul className="space-y-3">
              {FLAVOR_COMPONENTS.map((c, i) => (
                <li key={i} className="flex items-center gap-3 font-['DM_Mono'] text-[0.6rem]">
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
                  <span className="text-[#EDE0C8]">{c.name}</span>
                  <span className="text-[#6A8591]">{c.pct}%</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What to try next */}
        <section className="mb-16">
          <h2 className="font-['DM_Mono'] text-[0.55rem] tracking-[0.3em] uppercase mb-8 text-center text-[#6A8591]">What to try next</h2>
          <div className="space-y-6">
            {SUGGESTIONS.map((s, i) => (
              <div key={i} className="p-6 md:p-8 rounded-lg border border-[rgba(196,146,74,0.2)] bg-[rgba(28,22,18,0.6)]">
                <div className="flex gap-4 items-start">
                  <span className="text-2xl font-['Cormorant_Garamond'] font-light flex-shrink-0 text-[#C4924A]">{s.icon}</span>
                  <div>
                    <h3 className="font-['DM_Mono'] text-[0.65rem] uppercase tracking-wider mb-2 text-[#C4924A]">{s.headline}</h3>
                    <p className="font-['Libre_Baskerville'] text-base leading-relaxed text-[#E8DCC8]">{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Taste galaxy */}
        <section className="text-center">
          <h2 className="font-['DM_Mono'] text-[0.55rem] tracking-[0.3em] uppercase mb-6 text-[#6A8591]">Your taste galaxy</h2>
          <p className="font-['Libre_Baskerville'] text-sm md:text-base max-w-[480px] mx-auto mb-8 text-[#A89070]">
            Every meal is a star. Your taste autobiography, written by your own biology.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full opacity-80"
                style={{
                  backgroundColor: PALETTE[i % 4],
                  animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </section>
      </main>

      <ChatBot />

      <style>{`
        @keyframes swirl1 { 0%, 100% { transform: translate(0,0) scale(1); opacity: 0.35; } 50% { transform: translate(5%,5%) scale(1.05); opacity: 0.45; } }
        @keyframes swirl2 { 0%, 100% { transform: translate(0,0) scale(1); opacity: 0.25; } 50% { transform: translate(-4%,-3%) scale(1.08); opacity: 0.35; } }
        @keyframes swirl3 { 0%, 100% { transform: translate(0,0); opacity: 0.2; } 50% { transform: translate(3%,-4%); opacity: 0.3; } }
        @keyframes twinkle { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
      `}</style>
    </div>
  );
}
