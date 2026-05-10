import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Column */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter italic">Let's build <br /> <span className="text-[#00C4B4]">something great.</span></h1>
              <p className="text-xl text-slate-500 mb-16 leading-relaxed">
                Whether you're a startup looking for your first ERP or an established firm ready for an upgrade, our team is here to help.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-teal shadow-sm border border-slate-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Email Us</h4>
                    <p className="text-2xl font-bold text-slate-900">hello@solosoftwares.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-teal shadow-sm border border-slate-100">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Call Us</h4>
                    <p className="text-2xl font-bold text-slate-900">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-teal shadow-sm border border-slate-100">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Our Office</h4>
                    <p className="text-2xl font-bold text-slate-900">123 Innovation Way, SV 94043</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="relative">
              <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-2xl">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full px-8 py-5 bg-white rounded-3xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00C4B4] transition-all shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@company.com" 
                          className="w-full px-8 py-5 bg-white rounded-3xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00C4B4] transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4">Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Solo Enterprises" 
                        className="w-full px-8 py-5 bg-white rounded-3xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00C4B4] transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-4">Tell us about your needs</label>
                      <textarea 
                        rows={4}
                        placeholder="How can we help?" 
                        className="w-full px-8 py-6 bg-white rounded-[2rem] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#00C4B4] transition-all shadow-sm resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-6 bg-logo-gradient text-white rounded-3xl font-bold text-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-100 shadow-xl shadow-blue-500/20"
                    >
                      Send Message
                      <Send size={24} />
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-[#00C4B4] rounded-full mx-auto mb-8 flex items-center justify-center text-white shadow-xl shadow-teal-500/20">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">Message Received</h3>
                    <p className="text-slate-500 text-lg leading-relaxed mb-10">
                      Thanks for reaching out! One of our experts will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-[#00C4B4] font-bold hover:underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </div>
              
              {/* Abstract decorative */}
              <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
