import { Link } from 'react-router-dom';
import { Landmark, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-4 sm:px-10 py-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link to="/">
            <img 
              src="/solosoftwares.png" 
              alt="Solo Softwares Logo" 
              className="h-8 w-auto grayscale brightness-110 transition-all hover:grayscale-0"
            />
          </Link>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
            <span>© {new Date().getFullYear()} Solo Softwares Inc.</span>
            <span className="hidden md:inline text-brand-primary">Build for Growth.</span>
          </div>
        </div>
        <div className="flex gap-8">
          <Link to="/" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
          <Link to="/contact" className="hover:text-slate-900 transition-colors">Support</Link>
        </div>
      </div>
    </footer>
  );
}
