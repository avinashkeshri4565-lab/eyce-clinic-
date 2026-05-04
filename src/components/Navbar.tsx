/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Clock, MapPin, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../translations';
import { Language } from './AppointmentForm';

export const Navbar: React.FC<{ lang: Language; setLang: (l: Language) => void }> = ({ lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'doctors', label: t.nav.doctors },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'reviews', label: t.nav.reviews },
    { id: 'appointment', label: t.nav.appointment },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-dark text-white py-2 px-4 text-xs font-semibold hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100"><Phone size={12} className="text-brand-accent" /> {t.phone}</span>
            <span className="flex items-center gap-1.5 hidden md:flex opacity-90 transition-opacity hover:opacity-100"><Clock size={12} className="text-brand-accent" /> {t.hours}</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-full px-2">
              <button 
                onClick={() => setLang('en')}
                className={`lang-btn transition-all px-3 py-1 rounded-full ${lang === 'en' ? 'bg-brand-primary text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
              >
                English
              </button>
              <button 
                onClick={() => setLang('hi')}
                className={`lang-btn transition-all px-3 py-1 rounded-full ${lang === 'hi' ? 'bg-brand-primary text-white shadow-sm' : 'opacity-70 hover:opacity-100'}`}
                lang="hi"
              >
                हिंदी
              </button>
            </div>
            <a href={`https://wa.me/918789026924`} className="btn-green px-4 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold shadow-lg shadow-green-500/20 active:scale-95 transition-transform">
              <MessageSquare size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed w-full top-0 sm:top-10 z-[80] transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2 translate-y-[-40px] sm:translate-y-0 !top-0' : 'bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => window.scrollTo(0,0)}
          >
             <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_8px_20px_-5px_rgba(0,119,182,0.4)] transition-transform group-hover:scale-110">
                NL
             </div>
             <div>
                <h1 className="text-brand-dark font-black tracking-tighter text-lg leading-tight group-hover:text-brand-primary transition-colors">
                  {lang === 'en' ? 'NEW LIGHT OPTICALS' : 'न्यू लाइट ऑप्टिकल्स'}
                </h1>
                <p className="text-[10px] font-black tracking-[0.2em] text-brand-secondary leading-none uppercase">
                  {lang === 'en' ? 'EYE & ENT CLINIC' : 'आई & ईएनटी क्लिनिक'}
                </p>
             </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <motion.div 
              initial="hidden"
              animate="visible"
              className="flex items-center gap-8"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {menuItems.map((item) => (
                <motion.a 
                  key={item.id} 
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  href={`#${item.id}`} 
                  className="text-brand-dark hover:text-brand-primary font-bold transition-all text-xs uppercase tracking-widest relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
            </motion.div>
            <motion.a 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              href="#appointment" 
              className="btn-primary px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl"
            >
              {t.hero.ctaBook}
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
             <button 
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="text-xs font-black px-2 py-1 bg-brand-accent/20 text-brand-primary rounded-lg"
             >
                {lang === 'en' ? 'HI' : 'EN'}
             </button>
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark p-2 bg-brand-bg rounded-xl border border-brand-accent/20">
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-white flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center text-white font-bold">NL</div>
                <span className="font-bold text-brand-navy">New Light</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6 items-center">
              {menuItems.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-brand-navy hover:text-brand-sky transition-colors underline-offset-8"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-gray-100 text-center space-y-4">
              <p className="text-gray-500 font-medium">{t.tagline}</p>
              <div className="flex justify-center gap-4">
                 <a href={`tel:${t.phone}`} className="p-3 bg-brand-navy text-white rounded-full shadow-lg"><Phone size={20} /></a>
                 <a href={`https://wa.me/918789026924`} className="p-3 bg-green-500 text-white rounded-full shadow-lg"><MessageSquare size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
