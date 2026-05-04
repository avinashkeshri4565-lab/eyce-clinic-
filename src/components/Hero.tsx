/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, Star, ArrowRight, ShieldCheck, UserCheck, Eye } from 'lucide-react';
import { translations } from '../translations';
import { Language, AppointmentForm } from './AppointmentForm';

export const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="home" className="relative w-full min-h-screen pt-0 flex items-start md:items-center overflow-hidden">
      {/* Background with optimized cover properties */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEoveX7cOPcbTafcDc-6I7FRZOe35Qu4naqKzvjXrxIpIPAO_V1NN8Ye-zaQJzCA8_1pvkdJ3zRYfERNcV8lpnPyPvDWQvSZwuwkjom_MELu_-JLDV2A8i5scOYiw68GEXNGIo=w2000" 
          alt="New Light Opticals Clinic Front" 
          className="w-full h-full object-cover object-center"
        />
        {/* Darker blue gradient overlay for better text background contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#023047]/95 via-[#023047]/80 to-[#023047]/20 lg:to-transparent" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 pt-16 md:pt-20 pb-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="text-white space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex">
            <div className="badge !bg-brand-accent/20 !text-brand-accent backdrop-blur-md border border-brand-accent/30 px-4 py-1.5 shadow-sm">
              <Star className="text-brand-accent fill-brand-accent" size={12} />
              <span className="tracking-[0.1em] font-black uppercase text-[10px]">{t.rating}</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            {t.hero.title.split(lang === 'en' ? 'in Bettiah' : 'में भरोसेमंद').map((part, i) => (part.length > 0 && 
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                className="inline-block"
              >
                {part}
                {i === 0 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-accent block lg:inline">{lang === 'en' ? ' in Bettiah' : ' में भरोसेमंद'}</span>}
              </motion.span>
            ))}
          </h2>
          
          <p className="text-lg md:text-xl text-blue-50/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6"
          >
             <a href="#appointment" className="bg-white text-brand-dark hover:bg-brand-accent px-10 py-5 rounded-2xl font-black transition-all flex items-center gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:scale-95 group uppercase tracking-widest text-xs">
               {t.hero.ctaBook} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
             </a>
             <a href={`tel:${t.phone}`} className="bg-brand-primary/20 backdrop-blur-md border border-white/10 hover:bg-white hover:text-brand-dark text-white px-8 py-5 rounded-2xl font-black transition-all flex items-center gap-2 shadow-xl hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-xs">
               <Phone size={16} /> {t.hero.ctaCall}
             </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/10">
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 1.2 }}
               className="flex items-center justify-center lg:justify-start gap-3 opacity-80 hover:opacity-100 transition-opacity"
             >
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">Bettiah's Best</span>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 1.4 }}
               className="flex items-center justify-center lg:justify-start gap-3 opacity-80 hover:opacity-100 transition-opacity"
             >
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <UserCheck size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">Expert Doctors</span>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 1.6 }}
               className="flex items-center justify-center lg:justify-start gap-3 opacity-80 hover:opacity-100 transition-opacity"
             >
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Eye size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">Modern Tech</span>
             </motion.div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           animate={{ 
             x: [0, -3, 3, -3, 3, 0],
           }}
           transition={{ 
             opacity: { duration: 0.8, delay: 0.3 },
             y: { duration: 0.8, delay: 0.3 },
             x: { 
               duration: 8, 
               repeat: Infinity, 
               ease: "linear",
               repeatType: "mirror"
             }
           }}
           viewport={{ once: true }}
           className="relative mx-auto w-full max-w-md lg:max-w-none lg:ml-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-[40px] blur-3xl opacity-20 animate-pulse" />
          <div className="w-full relative">
            <AppointmentForm lang={lang} isHero={true} />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator overlay */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 hidden md:block"
      >
        <div className="w-1 h-12 bg-gradient-to-b from-white/50 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};
