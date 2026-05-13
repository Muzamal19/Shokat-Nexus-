import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <Navbar />
      <main className="pt-16">
        <Outlet key={location.pathname} />
      </main>
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Shokat Nexus Digital. Built for growth, clarity, and scale.</p>
      </footer>
    </div>
  );
}
