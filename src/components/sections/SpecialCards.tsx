import { motion } from 'framer-motion';

const specialCards = [
  { name: 'Shield', effect: 'Cancel Punishment', color: 'from-blue-900/40' },
  { name: 'Reverse', effect: 'Redirect Punishment', color: 'from-orange-900/40' },
  { name: 'Split', effect: 'Split Actions', color: 'from-green-900/40' },
  { name: 'Chaos', effect: 'Upgrade Consequences', color: 'from-red-900/40' },
];

const SpecialCards = () => {
  return (
    <section className="py-24 md:py-40 bg-velvet-black relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal-purple/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 text-center mb-20">
        <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-6">Legendary Strategy</h2>
        <h3 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-widest text-glow">
          The <span className="gold-gradient italic">Deus Ex</span> Cards
        </h3>
        <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base">
          15 Special Strategy Cards that allow you to manipulate fate. 
          The difference between a victory and a surrender.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        {specialCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
            className="group relative"
          >
            {/* Legendary Shine */}
            <div className="absolute -inset-1 bg-gold/50 rounded-lg blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
            
            <div className={`relative aspect-[4/6] bg-gradient-to-br ${card.color} to-velvet-black border-[3px] border-gold/40 flex flex-col items-center justify-center p-6 text-center shadow-2xl overflow-hidden`}>
              {/* Shine effect */}
              <div className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-transparent via-gold/10 to-transparent skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000" />
              
              <div className="w-16 h-16 md:w-20 md:h-20 border border-gold rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl md:text-3xl text-gold font-heading font-black italic">{card.name[0]}</span>
              </div>
              
              <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-2">{card.name}</h4>
              <p className="text-gold uppercase tracking-widest text-[10px] font-bold">{card.effect}</p>

              {/* Corner Symbols */}
              <div className="absolute top-4 left-4 text-gold/40 text-[10px] font-bold">★</div>
              <div className="absolute bottom-4 right-4 text-gold/40 text-[10px] font-bold">★</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-20">
         <div className="p-1 border border-gold/20 max-w-2xl mx-auto">
            <div className="bg-white/5 border border-gold/10 p-6 md:p-8 text-center backdrop-blur-xl">
               <span className="bg-gold text-velvet-black px-3 py-1 text-[8px] font-black uppercase tracking-widest absolute -top-3 left-1/2 -translate-x-1/2">The Strategy</span>
               <p className="text-white/60 italic text-sm md:text-base leading-relaxed">
                 "A well-timed Split card can turn a 1-on-1 interaction into a group chaos. A Shield can save your dignity. Use them wisely, for they are rare."
               </p>
            </div>
         </div>
      </div>
    </section>
  );
};

export default SpecialCards;
