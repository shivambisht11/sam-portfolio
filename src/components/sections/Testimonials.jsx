import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../constants';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center text-slate-900">
          Client <span className="text-gradient">Voices</span>
        </h2>
      </div>

      <div className="flex space-x-8 animate-scroll hover:[animation-play-state:paused] whitespace-nowrap px-8">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="inline-block w-[400px] h-[300px] glass-card p-10 bg-white border-slate-100 flex flex-col justify-between whitespace-normal shadow-lg shadow-slate-200/50"
          >
            <div>
              <Quote className="text-indigo-500/30 mb-6" size={40} />
              <p className="text-slate-600 leading-relaxed italic font-light text-lg">
                "{item.content}"
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-[1px]">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center font-bold text-indigo-600">
                  {item.author[0]}
                </div>
              </div>
              <div>
                <div className="font-bold text-slate-900">{item.author}</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-widest">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
