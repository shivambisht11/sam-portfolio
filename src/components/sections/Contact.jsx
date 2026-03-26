import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { USER_INFO } from '../../constants';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, integrate with EmailJS or a backend
    console.log('Form Submit:', formState);
    alert('Thank you! This is a demo. Your message was not actually sent.');
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-white">
      {/* Background Ornaments */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-indigo-50/50 blur-3xl rounded-full opacity-50" />
      <div className="absolute bottom-[-10%] right-[0%] w-[500px] h-[500px] bg-cyan-50/50 blur-3xl rounded-full opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-slate-900">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                Have a project in mind? Let's discuss how we can build something 
                exceptional together.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">Email</div>
                    <div className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {USER_INFO.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">LinkedIn</div>
                    <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors flex items-center gap-2">
                      Professional Profile <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-slate-100">
                <div className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-6">Socials</div>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: USER_INFO.github },
                    { icon: Linkedin, href: USER_INFO.linkedin },
                    { icon: Twitter, href: USER_INFO.twitter }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white hover:scale-110 transition-all duration-300"
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-panel p-10 md:p-14 border-slate-100 bg-white">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-900">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-900">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                    placeholder="example@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-900">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-5 text-xl flex items-center justify-center gap-4 group">
                  Send Message <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
