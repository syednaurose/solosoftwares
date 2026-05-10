import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURES = [
  {
    title: "Inventory Management",
    desc: "Real-time tracking of stock levels across multiple locations with automated reorder alerts.",
    icon: Zap,
    color: "bg-blue-500"
  },
  {
    title: "CRM & Sales",
    desc: "Manage customer relationships and pipeline with built-in analytics and social integration.",
    icon: Users,
    color: "bg-teal-500"
  },
  {
    title: "Financial Planning",
    desc: "Comprehensive accounting suite designed specifically for the needs of growing SMBs.",
    icon: TrendingUp,
    color: "bg-indigo-500"
  },
  {
    title: "Data Security",
    desc: "Bank-grade encryption and automated backups to ensure your business data is always safe.",
    icon: Shield,
    color: "bg-emerald-500"
  }
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-height-[80vh] flex items-center overflow-hidden py-16 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            <motion.div
              className="lg:col-span-8 pr-0 lg:pr-16 py-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-8">
                Enterprise Ready
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 text-slate-900 tracking-tighter">
                Agile ERP for the <span className="text-sleek-gradient">Modern</span> Small Business.
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-xl font-medium">
                We build lean, powerful tools to automate your inventory, payroll, and CRM without the enterprise overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link
                  to="/contact"
                  className="px-10 py-4 bg-logo-gradient text-white rounded-xl font-black text-lg shadow-2xl shadow-blue-500/20 transition-all hover:translate-y-[-2px] active:scale-95"
                >
                  Start Scaling Now
                </Link>
                <Link
                  to="/soloaccount"
                  className="px-10 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-xl font-black text-lg transition-all hover:border-brand-primary/20 hover:bg-slate-50 active:scale-95 flex items-center justify-center gap-2"
                >
                  SoloAccount <span className="px-2 py-0.5 bg-amber-100 text-amber-600 text-[10px] rounded uppercase">Free</span>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />)}
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">Trusted by 450+ growing businesses</p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-4 h-full min-h-[300px] relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Decorative circle from design */}
              <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
                <div className="w-96 h-96 border-[16px] border-brand-primary rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full blur-3xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-base font-black text-brand-primary uppercase tracking-[0.2em] mb-4">Enterprise-Ready</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 italic">Built for the next generation.</h3>
            <p className="text-lg text-slate-500 font-medium">
              Stop fighting with disconnected spreadsheets. Our unified platform brings your entire operation under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {FEATURES.map((feature, idx) => {
              const gradients = [
                'from-[#1E3A8A] to-blue-600',
                'from-blue-600 to-[#00C4B4]',
                'from-[#00C4B4] to-cyan-400',
                'from-[#1E3A8A] to-[#00C4B4]'
              ];
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:border-brand-primary/10 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${gradients[idx % gradients.length]} rounded-2xl mb-8 flex items-center justify-center text-white shadow-xl`}>
                    <feature.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{feature.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">
                    {feature.desc}
                  </p>
                  <div className="mt-8 pt-8 border-t border-slate-200/50 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-brand-primary transition-colors">
                    Explore <ArrowRight size={14} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SoloAccount Teaser */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#00C4B4] font-bold uppercase tracking-widest text-xs mb-6 block">Personal Finance Reimagined</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight italic">AI in your pocket. <br /> Meet SoloAccount.</h2>
                <p className="text-slate-400 text-lg mb-10">
                  The personal finance manager developed with AI-powered tools. Track accounts, net worth, and budgets automatically. No more manual entry.
                </p>
                <div className="space-y-4 mb-10">
                  {['AI Budget Forecasts', 'Net Worth Tracking', 'Smart Categorization'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 size={20} className="text-[#00C4B4]" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/soloaccount"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C4B4] text-white rounded-full font-bold transition-all hover:bg-[#00C4B4]/90 hover:scale-105 active:scale-95 shadow-lg shadow-teal-500/20"
                >
                  View SoloAccount details
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#00C4B4]/20 to-transparent rounded-full animate-pulse absolute -inset-10 blur-3xl" />
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop" 
                  alt="SoloAccount Interface" 
                  className="rounded-3xl shadow-2xl relative z-10 border border-slate-700 mx-auto"
                />
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00C4B4]/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-[#1E3A8A] mb-8 tracking-tighter">Ready to transform?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Join thousands of small businesses that choose Solo Softwares for their operational needs. Get started today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-10 py-5 bg-[#1E3A8A] text-white rounded-full font-bold text-xl shadow-2xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
            >
              Get Started Now
            </Link>
            <a
              href="mailto:hello@solosoftwares.com"
              className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold text-xl shadow-sm transition-all hover:border-[#00C4B4] hover:text-[#00C4B4] active:scale-95"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
