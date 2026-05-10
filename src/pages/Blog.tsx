import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const POSTS = [
  {
    title: "Hello World: Why We Started Solo Softwares",
    excerpt: "The story of how we decided that small businesses deserve better tools than bloated enterprise leftovers. Our mission is simplicity.",
    category: "The Journey",
    date: "May 10, 2026",
    author: "Founder Team",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "SoloAccount: Our First Step into Personal Finance",
    excerpt: "Why we chose a finance manager as our first product and how we're using AI to eliminate manual data entry forever.",
    category: "Product",
    date: "May 08, 2026",
    author: "Product Team",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Building in Public: The Solo Softwares Roadmap",
    excerpt: "An open look at what we're building over the next 6 months. From SoloAccount to our full ERP suite.",
    category: "Roadmap",
    date: "May 01, 2026",
    author: "Engineering",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Blog Hero */}
      <section className="py-20 bg-[#1E3A8A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tighter italic">
              Insights & <span className="text-[#00C4B4]">Wisdom</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Perspectives on business growth, financial management, and the future of work from the Solo Softwares team.
            </p>
        </div>
        
        {/* Decorative mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      </section>

      {/* Featured Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {POSTS.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] mb-8 bg-slate-100 shadow-xl transiton-all group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur text-[#1E3A8A] rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-6 text-xs text-slate-400 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <User size={14} />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 group-hover:text-[#00C4B4] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    {post.excerpt}
                  </p>
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold text-lg group-hover:gap-4 transition-all"
                  >
                    Read full article <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 pt-20 border-t border-slate-100 text-center">
             <button className="px-10 py-5 bg-slate-100 text-slate-900 rounded-full font-bold text-xl hover:bg-slate-200 transition-colors">
               Load More Insights
             </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-r from-[#1E3A8A] to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 italic">Stay Ahead of the Curve</h2>
            <p className="text-xl text-blue-100/70 mb-12">
              Join our weekly newsletter for exclusive tips on scaling your business and mastering personal finance.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="flex-1 px-8 py-5 bg-white/10 rounded-full border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00C4B4]"
              />
              <button className="px-10 py-5 bg-[#00C4B4] text-white rounded-full font-bold hover:bg-[#00C4B4]/90 transition-colors">
                Subscribe
              </button>
            </form>
        </div>
      </section>
    </div>
  );
}
