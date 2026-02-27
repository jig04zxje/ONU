import { motion } from 'framer-motion';

const cardTypes = [
  { name: 'Red', subtitle: 'Passion', color: 'bg-[#4B0F1A]', gradient: 'from-[#6B1826]' },
  { name: 'Blue', subtitle: 'Trust', color: 'bg-[#1A2E4B]', gradient: 'from-[#2A4B7A]' },
  { name: 'Purple', subtitle: 'Fantasy', color: 'bg-[#2C0E3A]', gradient: 'from-[#4A186B]' },
  { name: 'Black', subtitle: 'Chaos', color: 'bg-[#0B0B0F]', gradient: 'from-[#1A1A1A]' },
];

const Gameplay = () => {
  return (
    <section id="gameplay" className="py-24 md:py-40 bg-velvet-black/90 relative">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-6">The Mechanics</h2>
        <h3 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-widest text-glow">Core <span className="italic">Gameplay</span></h3>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Match colors, play your numbers, and use chaos to stay ahead. 
          Simple to learn, dangerous to lose.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardTypes.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateY: 10, transition: { duration: 0.3 } }}
            className={`group relative aspect-[4/5.5] ${card.color} border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl preserve-3d`}
          >
            {/* Gloss shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex justify-between items-start">
              <span className="text-3xl font-heading font-black tracking-tighter text-white/90">9</span>
              <div className="w-8 h-8 md:w-10 md:h-10 border border-gold/30 rounded-full flex items-center justify-center">
                <span className="text-[10px] text-gold font-black uppercase">V</span>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-white text-2xl font-black uppercase tracking-widest mb-1">{card.name}</h4>
              <p className="text-gold/60 text-xs uppercase tracking-[0.3em] font-bold">{card.subtitle}</p>
            </div>

            <div className="flex justify-between items-end rotate-180">
              <span className="text-3xl font-heading font-black tracking-tighter text-white/90">9</span>
              <div className="w-8 h-8 md:w-10 md:h-10 border border-gold/30 rounded-full flex items-center justify-center">
                <span className="text-[10px] text-gold font-black uppercase">V</span>
              </div>
            </div>

            {/* Inner frame */}
            <div className="absolute inset-4 border border-gold/10 pointer-events-none group-hover:border-gold/30 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-20 text-center">
        <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
          <div className="p-6 bg-white/5 border border-white/10">
            <h5 className="text-gold font-bold mb-2 uppercase text-xs tracking-widest">53 Core Cards</h5>
            <p className="text-white/40 text-sm">4 Colors (Passion, Trust, Fantasy, Chaos). Numbers 1-9 & Wilds.</p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10">
            <h5 className="text-gold font-bold mb-2 uppercase text-xs tracking-widest">Match & Play</h5>
            <p className="text-white/40 text-sm">Just like classic UNO. Match by color or number to shed your hand.</p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10">
            <h5 className="text-gold font-bold mb-2 uppercase text-xs tracking-widest">The Risk Is Real</h5>
            <p className="text-white/40 text-sm">The last player standing with cards must draw from the Action Deck.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gameplay;
