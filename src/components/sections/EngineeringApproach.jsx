import React from 'react';
import { motion } from 'framer-motion';
import { ENGINEERING_STEPS } from '../../constants';

const EngineeringApproach = () => {
  return (
    <section id="approach" className="section-padding relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-white/30 pointer-events-none z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900">
            Engineering <span className="text-gradient">Philosophy</span>
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            How I bridge the gap between complex technical requirements and 
            award-winning user experiences.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2" />

          <div className="space-y-24">
            {ENGINEERING_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Connector Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-indigo-500 -translate-x-1/2 z-10 shadow-lg shadow-indigo-500/20" />

                <div className="flex-1 w-full text-left md:text-right">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <div className="text-indigo-600 font-black text-6xl opacity-10 mb-4 font-display">0{index + 1}</div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-lg font-light max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;
