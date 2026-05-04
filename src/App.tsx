/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About, Services, Doctors } from './components/Sections';
import { WhyChooseUs, Gallery, Footer, StickyCTAs } from './components/Footer';
import { Language, AppointmentForm } from './components/AppointmentForm';
import { translations } from './translations';
import { motion } from 'motion/react';
import { MapPin, Navigation, Star, Quote, Phone, MessageSquare, Clock } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-brand-sky selection:text-white scroll-smooth transition-all duration-500">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      
      <About lang={lang} />
      
      {/* Dynamic Products Slider Pattern */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
           <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-4">{t.products.title}</h2>
           <div className="w-24 h-2 bg-brand-sky mx-auto rounded-full" />
        </div>
        <div className="flex gap-6 overflow-x-auto pb-12 px-4 no-scrollbar -mx-4 group">
          {t.products.items.concat(t.products.items).map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[280px] bg-slate-50 p-8 rounded-[40px] border border-slate-100 shadow-lg group-hover:opacity-70 hover:!opacity-100 transition-all duration-300"
            >
              <div className="w-full aspect-square mb-6 relative rounded-3xl overflow-hidden shadow-inner">
                {/* Replace this image with real product photo */}
                <img 
                  src={`https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400&sig=${i%5}`} 
                  alt={item} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-black text-brand-navy text-center mb-4">{item}</h3>
              <div className="flex justify-center">
                 <button className="bg-brand-navy text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-sky transition-all">Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Services lang={lang} />
      <Doctors lang={lang} />
      <WhyChooseUs lang={lang} />

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center text-brand-navy mb-16">{lang === 'en' ? 'What Patients Say' : 'मरीज क्या कहते हैं'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[0,1,2,3,4,5].map((idx) => {
                 const revEn = ["Best price, good work and best quality specs.", "Best service, best advice, reasonable price and friendly behaviour.", "Good behaviour, nice person, soft spoken and excellent services.", "I have been visiting here for 7 years. Price is reasonable, behaviour is best and service is very good.", "I have been visiting here for 2 years. Price is genuine, behaviour is good and service is also good.", "Earlier only spectacles were available, now it has developed into an Eye and ENT clinic."];
                 const revHi = ["सबसे अच्छी कीमत, अच्छा काम और बेहतरीन क्वालिटी के चश्मे।", "सबसे अच्छी सेवा, अच्छी सलाह, उचित कीमत और अच्छा व्यवहार।", "अच्छा व्यवहार, विनम्र व्यक्ति और बेहतरीन सेवा।", "मैं यहां 7 साल से आता हूं। कीमत उचित है, व्यवहार अच्छा है और सेवा बहुत अच्छी है।", "मैं यहां 2 साल से आता हूं। कीमत सही है, व्यवहार अच्छा है और सेवा भी अच्छी है।", "पहले यहां केवल चश्मा मिलता था, अब यह आई और ईएनटी क्लिनिक के रूप में विकसित हो गया है।"];
                 return (
                   <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-10 rounded-[50px] shadow-xl border border-gray-100 flex flex-col justify-between"
                   >
                      <div className="space-y-6">
                        <Quote className="text-brand-sky/20" size={48} />
                        <p className="text-gray-600 italic leading-relaxed text-lg font-medium">"{lang === 'en' ? revEn[idx] : revHi[idx]}"</p>
                      </div>
                      <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-4">
                         <div className="w-14 h-14 bg-gradient-to-tr from-brand-navy to-brand-sky rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {idx + 1}
                         </div>
                         <div>
                            <div className="flex gap-1 mb-1">
                               {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />)}
                            </div>
                            <p className="text-sm font-bold text-brand-navy uppercase tracking-widest">{lang === 'en' ? 'Google Reviewer' : 'गूगल यूजर'}</p>
                         </div>
                      </div>
                   </motion.div>
                 )
               })}
            </div>
         </div>
      </section>

      <Gallery lang={lang} />

      {/* Appointment CTA Section */}
      <section id="appointment" className="py-24 bg-brand-navy relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600" 
            alt="Clinic Interior" 
            className="w-full h-full object-cover opacity-10"
           />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="text-white space-y-8">
              <h2 className="text-4xl md:text-6xl font-black leading-tight">{t.appointmentForm.title}</h2>
              <p className="text-xl text-blue-100/80 leading-relaxed font-medium">
                 {lang === 'en' 
                   ? "Experience the best Eye & ENT care in Bettiah. Book your visit now for professional consultation at New Light Opticals." 
                   : "बेतिया में सबसे अच्छी आई और ईएनटी देखभाल का अनुभव करें। न्यू लाइट ऑप्टिकल्स में प्रोफेशनल परामर्श के लिए अभी अपनी विज़िट बुक करें।"}
              </p>
              <div className="space-y-6">
                 <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-brand-sky rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg"><Phone size={24} /></div>
                    <div>
                       <p className="text-xs font-bold uppercase tracking-widest text-brand-sky">{lang === 'en' ? 'Quick Support' : 'त्वरित सहायता'}</p>
                       <p className="text-2xl font-black">{t.phone}</p>
                    </div>
                 </div>
                 <div className="pt-4">
                    <a href="https://wa.me/918789026924" target="_blank" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-black text-xl transition-all shadow-xl">
                       <MessageSquare size={28} /> {t.hero.ctaWhatsApp}
                    </a>
                 </div>
              </div>
           </div>
           <div className="relative">
              <div className="absolute -inset-4 bg-brand-sky/20 blur-3xl opacity-50 rounded-full" />
              <AppointmentForm lang={lang} />
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-black text-center text-brand-navy mb-16">{t.faqs.title}</h2>
            <div className="space-y-6">
               {t.faqs.items.map((faq, i) => (
                 <div key={i} className="group glass p-8 rounded-3xl border-2 border-slate-50 hover:border-brand-sky/20 transition-all cursor-default">
                    <h3 className="text-xl font-black text-brand-navy mb-4 flex gap-4">
                       <span className="text-brand-sky">Q.</span> {faq.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Location */}
      <section id="contact" className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
               <h2 className="text-4xl font-black text-brand-navy">{lang === 'en' ? 'Find Us in Bettiah' : 'हमें बेतिया में खोजें'}</h2>
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <MapPin className="text-brand-sky shrink-0" size={32} />
                     <div>
                        <h4 className="text-xl font-black text-brand-navy mb-2">{lang === 'en' ? 'Our Location' : 'हमारा स्थान'}</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">{t.address}</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <Clock className="text-brand-sky shrink-0" size={32} />
                     <div>
                        <h4 className="text-xl font-black text-brand-navy mb-2">{lang === 'en' ? 'Working Hours' : 'काम के घंटे'}</h4>
                        <p className="text-gray-600 text-lg">{t.hours}</p>
                     </div>
                  </div>
               </div>
               <div className="flex flex-wrap gap-4 pt-4">
                  <a href={`https://www.google.com/maps/dir/?api=1&destination=New+Light+Opticals+Hospital+Road+Bettiah`} className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-lg hover:bg-brand-sky transition-colors">
                     <Navigation size={24} /> {lang === 'en' ? 'Get Directions' : 'रास्ता देखें'}
                  </a>
                  <a href={`tel:${t.phone}`} className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-4 rounded-2xl font-black transition-all">
                     {t.hero.ctaCall}
                  </a>
               </div>
            </div>
            <div className="h-[400px] lg:h-auto min-h-[500px] relative rounded-[50px] overflow-hidden shadow-2xl bg-white p-4">
               {/* Map Placeholder */}
               <div className="w-full h-full bg-slate-100 rounded-[40px] flex items-center justify-center relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                    alt="Map Background" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale"
                  />
                  <div className="relative text-center space-y-6 px-8 z-10">
                     <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                        <MapPin size={40} className="text-red-500 animate-pulse" />
                     </div>
                     <p className="font-bold text-gray-400 text-sm uppercase tracking-[0.2em]">{lang === 'en' ? 'Interactive Map Loading...' : 'नक्शा लोड हो रहा है...'}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer lang={lang} />
      <StickyCTAs lang={lang} />
    </div>
  );
}
