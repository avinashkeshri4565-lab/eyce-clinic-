/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star, Users, Award, MapPin, ChevronRight, Stethoscope, Eye, Ear, TrendingUp, Heart, UserCheck } from 'lucide-react';
import { translations } from '../translations';
import { Language } from './AppointmentForm';

const SectionWrapper: React.FC<{ children: React.ReactNode; id: string; className?: string; title: string }> = ({ children, id, className, title }) => (
  <section id={id} className={`py-16 md:py-28 overflow-hidden ${className}`}>
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20 space-y-4"
      >
        <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-tight tracking-tighter">{title}</h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1.5 bg-brand-secondary mx-auto rounded-full" 
          viewport={{ once: true }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {children}
      </motion.div>
    </div>
  </section>
);

export const About: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].about;
  return (
    <SectionWrapper id="about" title={t.title} className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group p-4"
        >
          {/* Replace this image with real clinic photo */}
          <div className="relative overflow-hidden rounded-[48px] shadow-2xl border-[12px] border-white ring-1 ring-brand-accent/20">
            <img 
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEoveX7cOPcbTafcDc-6I7FRZOe35Qu4naqKzvjXrxIpIPAO_V1NN8Ye-zaQJzCA8_1pvkdJ3zRYfERNcV8lpnPyPvDWQvSZwuwkjom_MELu_-JLDV2A8i5scOYiw68GEXNGIo=w1000" 
              alt="Clinic Interior" 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-2 -left-2 glass p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,119,182,0.15)] border border-white/50 hidden md:block animate-bounce-slow">
            <div className="flex items-center gap-3 mb-2">
              <Star className="text-brand-secondary fill-brand-secondary" />
              <span className="font-black text-2xl text-brand-dark">5.0 Rating</span>
            </div>
            <p className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] whitespace-nowrap">774+ Google Reviews</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-xl text-brand-dark/70 leading-relaxed font-medium">
            {t.desc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.highlights.map((h, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-brand-bg p-5 rounded-2xl border border-brand-accent/10 hover:border-brand-secondary hover:shadow-lg transition-all group cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <CheckCircle2 size={18} />
                </div>
                <span className="font-black text-brand-dark text-sm tracking-tight">{h}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export const Services: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].services;
  return (
    <SectionWrapper id="services" title={t.title} className="bg-brand-bg">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {t.items.map((item, i) => {
          const icons = [Eye, Stethoscope, ChevronRight, UserCheck, Eye, Ear, TrendingUp, ChildIcon, Heart, TrendingUp, Award, MapPin];
          const CurrentIcon = icons[i % icons.length] || Eye;
          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="clinic-card bg-white p-10 border-0 hover:shadow-[0_30px_80px_-15px_rgba(0,119,182,0.2)] transition-all group text-center"
            >
              <div className="w-20 h-20 bg-brand-accent/10 rounded-[32px] flex items-center justify-center text-brand-primary mx-auto mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:rotate-6">
                <CurrentIcon size={36} />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-4 group-hover:text-brand-primary transition-colors leading-tight">{item.title}</h3>
              <p className="text-brand-dark/50 text-sm font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

const ChildIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>
);

export const Doctors: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].doctors;
  return (
    <SectionWrapper id="doctors" title={t.title} className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {t.specialists.map((doc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            className="group relative bg-white clinic-card border-0 hover:shadow-[0_30px_70px_-15px_rgba(0,119,182,0.2)] transition-all rounded-[48px]"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
               {/* Replace this image with real clinic photo */}
               <img 
                src={i === 0 ? "https://lh3.googleusercontent.com/p/AF1QipPYci5IJ6RZP1R88E4LMZInsu7D1ySjEvw_1PIL=w1000" : "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800"} 
                alt={doc.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                 <p className="text-brand-accent font-black tracking-[0.2em] uppercase text-[10px] mb-2">{doc.role}</p>
                 <h3 className="text-3xl font-black">{doc.name}</h3>
              </div>
            </div>
            <div className="p-10">
               <div className="flex gap-1 mb-4">
                 {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-brand-secondary text-brand-secondary" />)}
               </div>
               <p className="text-brand-dark/60 leading-relaxed font-bold italic text-lg">"{doc.desc}"</p>
               <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(p => (
                      <div key={p} className="w-8 h-8 rounded-full border-2 border-white bg-brand-accent/20 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${p+10}`} alt="Patient" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-black text-brand-secondary uppercase tracking-widest">Trusted by 1000+ patients</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
