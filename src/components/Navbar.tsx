import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark, Calculator, BookOpen, Mail } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { name: 'Home', href: '/', icon: Landmark },
  { name: 'SoloAccount', href: '/soloaccount', icon: Calculator },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E3A8A] border-b border-white/10 shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-30 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-white p-2 rounded-xl">
              <img 
                src="/solosoftwares.png" 
                alt="Solo Softwares Logo" 
                className="h-16 w-auto"
              />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">
              SOLO<span className="text-[#00C4B4]">SOFTWARES</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-bold transition-all hover:text-[#00C4B4] relative py-1",
                  location.pathname === item.href 
                    ? "text-[#00C4B4] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00C4B4]" 
                    : "text-white/80 hover:translate-y-[-1px] hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#00C4B4] text-[#1E3A8A] rounded-full font-black text-sm transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Get Early Access
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#1E3A8A] border-b border-white/10 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-bold transition-colors",
                    location.pathname === item.href 
                      ? "bg-white/10 text-[#00C4B4]" 
                      : "text-white/70 active:bg-white/5"
                  )}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              ))}
              <div className="px-4 mt-6">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 bg-[#00C4B4] text-[#1E3A8A] text-center rounded-xl font-black"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
