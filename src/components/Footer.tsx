/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, MapPin, Mail, Clock, ShieldCheck, Heart, User, ChevronRight, Star } from 'lucide-react';
import { translations } from '../translations';
import { Language } from './AppointmentForm';

export const StickyCTAs: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] flex md:hidden h-20 shadow-[0_-10px_30px_rgba(2,48,71,0.2)]">
      <a 
        href={`tel:${t.phone}`} 
        className="flex-1 bg-brand-primary text-white flex flex-col items-center justify-center gap-1 active:scale-95 transition-all border-r border-white/10"
      >
        <Phone size={22} className="text-brand-accent" />
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t.hero.ctaCall}</span>
      </a>
      <a 
        href={`https://wa.me/918789026924`} 
        className="flex-1 bg-brand-green text-white flex flex-col items-center justify-center gap-1 active:scale-95 transition-all"
      >
        <MessageSquare size={22} />
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">WhatsApp</span>
      </a>
    </div>
  );
};

export const WhyChooseUs: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].whyChoose;
  return (
    <section className="py-28 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute top-20 left-20 w-64 h-64 border-8 border-white rounded-full animate-pulse" />
         <div className="absolute bottom-20 right-20 w-96 h-96 border-4 border-white rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter">{t.title}</h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {t.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="space-y-3 p-8 glass-dark rounded-[48px] text-center"
            >
              <h4 className="text-4xl md:text-6xl font-black text-brand-accent tracking-tighter">{stat.value}</h4>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-all border border-white/10 group cursor-default"
            >
              <ShieldCheck className="text-brand-accent shrink-0 transition-transform group-hover:scale-110" size={28} />
              <span className="font-black text-lg tracking-tight">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Gallery: React.FC<{ lang: Language }> = ({ lang }) => {
  const images = [
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEoveX7cOPcbTafcDc-6I7FRZOe35Qu4naqKzvjXrxIpIPAO_V1NN8Ye-zaQJzCA8_1pvkdJ3zRYfERNcV8lpnPyPvDWQvSZwuwkjom_MELu_-JLDV2A8i5scOYiw68GEXNGIo=w1000", // Clinic Real Photo
    "https://images.unsplash.com/photo-1596704017254-9b121068fb31",
    "https://images.unsplash.com/photo-1473442240418-452f03b7ae40",
    "https://images.unsplash.com/photo-1505751172107-167e49dc756d",
    "https://images.unsplash.com/photo-1588773928162-540f2eff8175",
    "https://images.unsplash.com/photo-1511174511562-5f7f185854c8",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    "https://images.unsplash.com/photo-1576091160550-217359f4ecf8",
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842",
    "https://images.unsplash.com/photo-1629909613654-28a3a7c4d45e",
    "https://images.unsplash.com/photo-1590611357128-d30678d85f8e",
    "https://images.unsplash.com/photo-1576669801775-ffecd7451bad"
  ];
  return (
    <section id="gallery" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black text-center text-brand-dark mb-20 tracking-tighter">Clinic Gallery</h2>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ scale: 1.02 }}
              className="relative group rounded-[40px] overflow-hidden shadow-2xl cursor-zoom-in border-8 border-white ring-1 ring-gray-100"
            >
              <img 
                src={src.includes('googleusercontent') ? src : `${src}?auto=format&fit=crop&q=80&w=800`} 
                alt={`Clinic Photo ${i+1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-2xl scale-0 group-hover:scale-100 transition-transform">
                    <Heart size={28} className="fill-brand-primary" />
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  return (
    <footer className="bg-brand-dark pt-32 pb-40 md:pb-16 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="space-y-8">
           <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_8px_25px_-5px_rgba(0,119,182,0.5)]">
                NL
              </div>
              <div>
                <h3 className="font-black text-xl leading-tight tracking-tighter uppercase whitespace-nowrap">{lang === 'en' ? 'NEW LIGHT' : 'न्यू लाइट'}</h3>
                <p className="text-[10px] font-black text-brand-accent tracking-[0.2em]">{lang === 'en' ? 'EYE & ENT CLINIC' : 'आई & ईएनटी क्लिनिक'}</p>
              </div>
           </div>
           <p className="text-blue-100/60 leading-relaxed font-medium">{t.tagline}</p>
           <div className="flex gap-4">
              <a href={`tel:${t.phone}`} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-primary transition-all hover:-translate-y-1"><Phone size={20} /></a>
              <a href={`https://wa.me/918789026924`} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-green transition-all hover:-translate-y-1"><MessageSquare size={20} /></a>
           </div>
        </div>
        
        <div>
           <h4 className="text-xs font-black mb-8 text-brand-accent uppercase tracking-[0.2em]">Contact Information</h4>
           <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all shrink-0">
                    <MapPin size={20} />
                 </div>
                 <span className="text-blue-100/80 text-sm font-bold leading-relaxed">{t.address}</span>
              </li>
              <li className="flex items-center gap-4 group">
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all shrink-0">
                    <Phone size={20} />
                 </div>
                 <span className="text-blue-100/80 text-sm font-black tracking-widest">{t.phone}</span>
              </li>
              <li className="flex items-center gap-4 group">
                 <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all shrink-0">
                    <Clock size={20} />
                 </div>
                 <span className="text-blue-100/80 text-sm font-bold">{t.hours}</span>
              </li>
           </ul>
        </div>

        <div>
           <h4 className="text-xs font-black mb-8 text-brand-accent uppercase tracking-[0.2em]">Quick Access</h4>
           <ul className="space-y-4 text-blue-100/60 text-xs font-black uppercase tracking-widest">
              <li><a href="#about" className="hover:text-brand-accent transition-colors flex items-center gap-2 group"><ChevronRight size={12} className="group-hover:translate-x-1" /> About Us</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition-colors flex items-center gap-2 group"><ChevronRight size={12} className="group-hover:translate-x-1" /> Services</a></li>
              <li><a href="#appointment" className="hover:text-brand-accent transition-colors flex items-center gap-2 group"><ChevronRight size={12} className="group-hover:translate-x-1" /> Book Now</a></li>
              <li><a href="#gallery" className="hover:text-brand-accent transition-colors flex items-center gap-2 group"><ChevronRight size={12} className="group-hover:translate-x-1" /> Our Facility</a></li>
           </ul>
        </div>

        <div>
           <h4 className="text-xs font-black mb-8 text-brand-accent uppercase tracking-[0.2em]">Trust Summary</h4>
           <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 space-y-6">
              <div className="flex items-center gap-5">
                 <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <User size={32} />
                 </div>
                 <div>
                    <p className="text-3xl font-black tracking-tighter">774+</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">Google Reviews</p>
                 </div>
              </div>
              <div className="pt-6 border-t border-white/5">
                 <div className="flex gap-1 mb-2">
                   {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-brand-accent text-brand-accent" />)}
                 </div>
                 <p className="text-[10px] font-medium text-blue-100/40 leading-relaxed uppercase tracking-wider">Most Trusted Clinic in Bettiah for Eye & ENT Care.</p>
              </div>
           </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
         <p className="text-blue-100/20 text-[10px] font-black uppercase tracking-[0.4em]">© 2026 {t.clinicName}. ALL RIGHTS RESERVED.</p>
         <div className="flex gap-12 text-blue-100/20 text-[10px] font-black uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms</a>
         </div>
      </div>
    </footer>
  );
};
