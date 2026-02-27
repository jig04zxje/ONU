import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { 
    q: "Is it sexually explicit?", 
    a: "No. The game is flirty, suggestive, and focused on social tension and playful dares. It is designed to be classy and fun, not pornographic." 
  },
  { 
    q: "How many players can play?", 
    a: "Perfect for 4–6 players, but can be played with more if players team up. It's the ideal party size for meaningful interaction." 
  },
  { 
    q: "Can someone refuse a card?", 
    a: "Absolutely. We encourage setting house rules and boundaries before starting. The game includes 'Pause' and 'Safe' mechanics to ensure everyone stays comfortable." 
  },
  { 
    q: "Is it safe for large parties?", 
    a: "Yes! It's an excellent icebreaker for close groups of friends or couples looking to add some strategic fun to their gathering." 
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-40 bg-velvet-black relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-6">Concerns</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-[0.2em]">Common <span className="gold-gradient italic">Inquiries</span></h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className={`text-lg md:text-xl font-bold uppercase tracking-widest transition-colors duration-300 ${openIdx === idx ? 'text-gold' : 'text-white/80 group-hover:text-white'}`}>
                  {faq.q}
                </span>
                <ChevronDown className={`w-6 h-6 text-gold/50 transition-transform duration-500 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-white/50 leading-relaxed text-sm md:text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
