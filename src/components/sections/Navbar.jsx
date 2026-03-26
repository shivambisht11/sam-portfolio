import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS, USER_INFO } from '../../constants';
import { cn } from '../../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold flex items-center gap-2 group"
        >
          <span className="text-gradient font-black tracking-tighter group-hover:opacity-80 transition-opacity">
            {USER_INFO.firstName}
          </span>
          <span className="text-slate-400 font-light group-hover:text-slate-600 transition-colors">
            {USER_INFO.lastName}
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="h-4 w-[1px] bg-slate-200 mx-2" />
          
          <div className="flex items-center gap-4 text-slate-400">
            <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
              <Github size={20} />
            </a>
            <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={USER_INFO.twitter} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-600 hover:text-slate-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                <a href={USER_INFO.github} className="text-slate-400 hover:text-slate-900"><Github size={24} /></a>
                <a href={USER_INFO.linkedin} className="text-slate-400 hover:text-slate-900"><Linkedin size={24} /></a>
                <a href={USER_INFO.twitter} className="text-slate-400 hover:text-slate-900"><Twitter size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
