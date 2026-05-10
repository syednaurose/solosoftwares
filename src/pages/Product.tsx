import { motion } from 'motion/react';
import { 
  ExternalLink, 
  LayoutDashboard, 
  Landmark, 
  ArrowLeftRight, 
  PieChart, 
  Target, 
  CalendarClock, 
  ShieldAlert, 
  TrendingUp, 
  BarChart3, 
  LineChart, 
  StickyNote, 
  Settings,
  ArrowRight
} from 'lucide-react';

const FEATURES = [
  {
    title: "Dashboard",
    desc: "Get an instant snapshot of your finances. See your total balance, income vs expense charts, budget watch, goal spotlight, cash health score, and AI-powered spending insights at a glance.",
    icon: LayoutDashboard,
  },
  {
    title: "Accounts",
    desc: "Add your bank accounts, credit cards, cash, and e-wallets. Each account tracks its own balance and currency. Mark accounts as default or exclude them from dashboard totals for cleaner reporting.",
    icon: Landmark,
  },
  {
    title: "Transactions",
    desc: "Log your income, expenses, and transfers between accounts. Use filters, search, quick amounts, and bulk export to CSV. Attach notes, set recurring entries, and keep your records organized.",
    icon: ArrowLeftRight,
  },
  {
    title: "Budgets",
    desc: "Set spending limits per category with weekly or monthly budgets. Track progress with daily breakdowns, see how much remains, and get warned before you go over your limit.",
    icon: PieChart,
  },
  {
    title: "Goals",
    desc: "Define savings targets with deadlines. Contribute funds from any account, watch the progress ring fill up, and celebrate when you hit 100%. Sort by deadline, progress, or target amount.",
    icon: Target,
  },
  {
    title: "Subscriptions",
    desc: "Keep tabs on recurring payments like Netflix, Spotify, or cloud services. See total monthly spend, upcoming billing dates, and auto-detect subscriptions from your transaction history.",
    icon: CalendarClock,
  },
  {
    title: "Debt Planner",
    desc: "Track loans, credit cards, and mortgages. Choose a payoff strategy — Snowball (smallest first) or Avalanche (highest interest first) — and allocate extra payments to get debt-free faster.",
    icon: ShieldAlert,
  },
  {
    title: "Investments",
    desc: "Monitor your stocks, crypto, mutual funds, ETFs, and bonds. Track buy price vs current price, see real-time gain/loss, and watch your portfolio grow over time.",
    icon: TrendingUp,
  },
  {
    title: "Reports",
    desc: "Generate detailed financial reports — category breakdowns, income/expense trends, period comparisons, and savings rate analysis. Export data as CSV or PDF for external use.",
    icon: BarChart3,
  },
  {
    title: "Cash Flow Forecast",
    desc: "Project your future balance based on recurring income, expenses, subscriptions, and spending patterns. Visualize your financial runway and plan ahead with confidence.",
    icon: LineChart,
  },
  {
    title: "Notes",
    desc: "Capture quick thoughts, financial reminders, or meeting notes. Pin important ones, archive old notes, and search across all your content instantly.",
    icon: StickyNote,
  },
  {
    title: "Settings",
    desc: "Customize your experience — switch between dark and light themes, change language (English, Arabic, Tamil), manage currencies, edit categories, and export or import your data.",
    icon: Settings,
  }
];

export default function Product() {
  return (
    <div className="pt-20">
      {/* Product Hero */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden flex items-center">
        <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-10">
              <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter">soloaccount</h2>
              <div className="flex flex-col gap-1 items-start">
                <span className="px-3 py-1 bg-amber-400 text-[10px] font-black uppercase rounded text-black tracking-widest shadow-lg shadow-amber-500/20">Free Forever</span>
                <span className="px-3 py-1 bg-indigo-500 text-[10px] font-black uppercase rounded text-white tracking-widest shadow-lg shadow-indigo-500/20">AI Powered</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-8 italic tracking-tight">Welcome to SoloAccount</h1>
            <p className="text-2xl text-slate-400 mb-12 font-medium leading-relaxed">
              Your all-in-one personal finance manager. Track expenses, set budgets, monitor investments, and achieve your financial goals — all from one beautiful dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://soloaccount.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-5 bg-logo-gradient text-white rounded-2xl font-black text-xl transition-all hover:translate-y-[-2px] shadow-2xl shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2"
              >
                Launch Live App
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-base font-black text-[#00C4B4] uppercase tracking-[0.2em] mb-4">Complete Toolkit</h2>
            <h3 className="text-4xl md:text-5xl font-black italic tracking-tight text-slate-900">Every feature you need to thrive.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:border-brand-primary/10 group"
              >
                <div className="w-16 h-16 bg-logo-gradient rounded-[1.25rem] flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-500/10">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight italic">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] p-12 relative z-10 border border-white/10">
                <h2 className="text-4xl font-black text-white mb-10 tracking-tight italic">Intelligence built for <br /> <span className="text-[#00C4B4]">the modern individual.</span></h2>
                <ul className="space-y-8">
                  {[
                    "Zero manual maintenance required",
                    "Privacy-first, secure data storage",
                    "Cross-device synchronization",
                    "Advanced AI-driven categorization"
                  ].map((item) => (
                    <li key={item} className="flex gap-4 items-center">
                      <div className="w-6 h-6 rounded-full bg-[#00C4B4]/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#00C4B4]" />
                      </div>
                      <span className="text-slate-300 font-bold text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -top-10 -left-10 w-full h-full bg-[#00C4B4]/10 rounded-[4rem] blur-3xl -z-10" />
            </div>
            <div>
              <p className="text-[#00C4B4] font-black uppercase tracking-[0.2em] text-xs mb-6">Open & Free</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight italic leading-tight">We believe in financial <br /> accessibility.</h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-12 font-medium">
                SoloAccount is, and always will be, free for personal use. We're building the future of financial management, and we want you to be part of it without any barriers.
              </p>
              <a
                href="https://soloaccount.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xl font-black text-[#00C4B4] group"
              >
                Launch SoloAccount Now
                <ExternalLink size={24} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-6xl font-black text-slate-900 mb-10 italic tracking-tighter">Your financial journey <br /> starts here.</h2>
          <p className="text-2xl text-slate-500 mb-16 font-medium leading-relaxed max-w-2xl mx-auto">
            Solo Softwares is committed to providing the best tools for solo builders and small teams. SoloAccount is our first step.
          </p>
          <a
            href="https://soloaccount.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-16 py-6 bg-logo-gradient text-white rounded-3xl font-black text-2xl shadow-2xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3"
          >
            Launch SoloAccount Free
            <ArrowRight size={28} />
          </a>
        </div>
      </section>
    </div>
  );
}
