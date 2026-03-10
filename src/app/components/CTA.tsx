import { useState } from 'react';

export function CTA() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log('Email submitted:', email);
    alert('Thank you for your interest! You have been added to the waitlist.');
    setEmail('');
  };

  return (
    <section id="cta" className="relative py-32 px-8" style={{ backgroundColor: '#1C1612' }}>
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ backgroundColor: 'rgba(196,97,74,0.2)' }} />
      
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="font-['Cormorant_Garamond'] font-light text-4xl mb-6" style={{ color: '#EDE0C8' }}>
          "Know your palate."
        </h2>
        
        <div className="font-['DM_Mono'] text-[0.65rem] tracking-[0.3em] uppercase mb-10" style={{ color: '#C4924A' }}>
          Join the Waitlist
        </div>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex gap-4 max-w-[500px] mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-4 font-['DM_Mono'] text-sm border transition-all duration-300 bg-transparent outline-none"
              style={{
                backgroundColor: '#201A15',
                borderColor: isFocused ? 'rgba(196,146,74,0.4)' : 'rgba(196,146,74,0.2)',
                color: '#F2E8D5',
                boxShadow: isFocused ? '0 0 20px rgba(196,146,74,0.1)' : 'none'
              }}
            />
            
            <button
              type="submit"
              className="px-8 py-4 font-['DM_Mono'] text-[0.7rem] uppercase tracking-wider border transition-all duration-500 relative overflow-hidden group"
              style={{
                color: '#C4924A',
                borderColor: '#C4924A',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#1C1612';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(196,146,74,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#C4924A';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span className="relative z-10">Request Access</span>
              <div
                className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                style={{ backgroundColor: '#C4924A' }}
              />
            </button>
          </div>
        </form>

        <p className="font-['DM_Mono'] text-[0.5rem]" style={{ color: '#3A3D42' }}>
          No spam. First access to the curious.
        </p>
      </div>
    </section>
  );
}
