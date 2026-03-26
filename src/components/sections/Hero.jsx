import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Layout, Code } from 'lucide-react';
import { USER_INFO } from '../../constants';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-transparent">
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-slate-50/50 to-white/0 pointer-events-none z-0" />
      <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-indigo-50/30 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-[10%] w-[400px] h-[400px] bg-cyan-50/30 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-indigo-600 text-sm font-semibold mb-8 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              Built for performance
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-[0.9] tracking-tighter text-slate-900">
              {USER_INFO.firstName} <br />
              <span className="text-gradient drop-shadow-sm">{USER_INFO.lastName}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              <span className="text-slate-900 font-medium">{USER_INFO.title}</span> craftng <span className="text-slate-900 font-medium">high-performance</span> digital systems with <span className="text-slate-900 font-medium">premium</span> design at scale.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <a href="#projects" className="btn-primary flex items-center justify-center gap-3 px-10 text-lg group">
                View Projects <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center gap-3 px-10 text-lg">
                Let's Talk
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-20 pt-10 border-t border-slate-100 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-3xl font-bold text-slate-900">5+</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-2 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">20+</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-2 font-medium">Projects Shipped</div>
              </div>
              <div className="hidden md:block">
                <div className="text-3xl font-bold text-slate-900">10+</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-2 font-medium">Awards Won</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side for 3D Model with a nice highlight */}
        <div className="flex-1 relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-[at_center] from-indigo-100/30 to-transparent blur-3xl rounded-full scale-125 opacity-50" />
            {/* The 3D Canvas in Scene3D handles the actual model */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
