import React from 'react';
import { USER_INFO } from '../../constants';

const Footer = () => {
  return (
    <footer className="py-16 bg-white border-t border-slate-100 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-3xl font-display font-bold flex items-center gap-2 mb-2">
              <span className="text-gradient">{USER_INFO.firstName}</span>
              <span className="text-slate-400 font-light">{USER_INFO.lastName}</span>
            </div>
            <p className="text-slate-400 text-sm">{USER_INFO.title}</p>
          </div>
          
          <div className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} {USER_INFO.name}. All rights reserved.
          </div>
          
          <div className="flex gap-8">
            <a href="#home" className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium">Home</a>
            <a href="#projects" className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium">Work</a>
            <a href="#contact" className="text-slate-400 hover:text-indigo-600 transition-colors text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
