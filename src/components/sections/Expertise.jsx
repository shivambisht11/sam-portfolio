import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Code, Cpu, Database, Cloud } from 'lucide-react';
import { EXPERTISE } from '../../constants';
import * as LucideIcons from 'lucide-react';

const Expertise = () => {
  return (
    <section id="expertise" className="section-padding relative bg-transparent">
      {/* Subtle Background Tint */}
      <div className="absolute inset-0 bg-slate-50/30 pointer-events-none z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900">
            Specialized <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            I build scalable, high-performance applications across the full stack, 
            focusing on clean code and exceptional user engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {EXPERTISE.map((item, index) => {
            const IconComponent = LucideIcons[item.icon] || Globe;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-10 flex flex-col items-start gap-6 border-slate-100 bg-white shadow-xl shadow-slate-200/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 transition-colors">
                  <IconComponent size={32} />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <div className="text-indigo-600 font-semibold text-sm mb-4 uppercase tracking-widest">{item.subtitle}</div>
                  <p className="text-slate-500 leading-relaxed mb-8">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium hover:border-indigo-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
