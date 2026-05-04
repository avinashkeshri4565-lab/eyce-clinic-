/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { translations } from '../translations';

export type Language = 'en' | 'hi';

interface AppointmentData {
  name: string;
  age: string;
  phone: string;
  problem: string;
  date: string;
  time: string;
  message: string;
  submittedAt: string;
}

export const AppointmentForm: React.FC<{ lang: Language; isHero?: boolean; onSuccess?: () => void }> = ({ lang, isHero, onSuccess }) => {
  const t = translations[lang].appointmentForm;
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    problem: t.problems[0],
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Google Sheets integration can be added here
    const appointmentRecord: AppointmentData = {
      ...formData,
      submittedAt: new Date().toISOString()
    };
    
    console.log('New Appointment Submission:', appointmentRecord);
    
    setSubmitted(true);
    if (onSuccess) onSuccess();
    
    // Clear form
    setFormData({
      name: '',
      age: '',
      phone: '',
      problem: t.problems[0],
      date: '',
      time: '',
      message: ''
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className={`p-6 md:p-8 rounded-[32px] ${isHero ? 'glass bg-white/95' : 'bg-white shadow-2xl border border-brand-accent/20'} backdrop-blur-xl relative z-10 clinic-card !border-0`}>
      <h3 className="text-2xl font-black text-brand-dark mb-6 tracking-tight">{t.title}</h3>
      {submitted ? (
        <div className="bg-green-50 text-green-700 p-6 rounded-2xl border border-green-200 animate-in fade-in zoom-in duration-300 flex flex-col items-center text-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold">✓</div>
          <p className="font-bold">{t.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] font-black text-brand-secondary mb-1.5 uppercase tracking-widest">{t.name}</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-brand-bg/30 focus:bg-white focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all placeholder:text-gray-300"
                placeholder={lang === 'en' ? 'Full Name' : 'पूरा नाम'}
              />
            </div>
            <div>
              <label className="block text-[11px] font-black text-brand-secondary mb-1.5 uppercase tracking-widest">{t.age}</label>
              <input
                required
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-brand-bg/30 focus:bg-white focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all placeholder:text-gray-300"
                placeholder="25"
              />
            </div>
          </div>
          <div>
            <label className="block text-[11px] font-black text-brand-secondary mb-1.5 uppercase tracking-widest">{t.phone}</label>
            <input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-brand-bg/30 focus:bg-white focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all placeholder:text-gray-300"
              placeholder="+91 00000 00000"
            />
          </div>
          <div>
            <label className="block text-[11px] font-black text-brand-secondary mb-1.5 uppercase tracking-widest">{t.problem}</label>
            <select
              value={formData.problem}
              onChange={(e) => setFormData({...formData, problem: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-brand-bg/30 focus:bg-white focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
            >
              {t.problems.map((p, i) => (
                <option key={i} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] font-black text-brand-secondary mb-1.5 uppercase tracking-widest">{t.date}</label>
              <input
                required
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-brand-bg/30 focus:bg-white focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-[11px] font-black text-brand-secondary mb-1.5 uppercase tracking-widest">{t.time}</label>
              <input
                required
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-brand-bg/30 focus:bg-white focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full btn-primary font-black py-4 px-6 rounded-xl transform hover:scale-[1.02] active:scale-95 shadow-xl flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-xs"
          >
            {t.submit}
          </button>
        </form>
      )}
    </div>
  );
};
