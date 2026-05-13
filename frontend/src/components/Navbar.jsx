import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mood, setMood] = useState(() => localStorage.getItem('site-mood') || 'night');

  useEffect(() => {
    const isDay = mood === 'day';
    document.documentElement.classList.toggle('day-mood', isDay);
    localStorage.setItem('site-mood', mood);
  }, [mood]);

  const navLinkClass = ({ isActive }) => {
    if (mood === 'day') {
      return `rounded-full px-3 py-2 text-sm font-semibold transition ${
        isActive ? 'bg-cyan-100 text-slate-950' : 'text-slate-700 hover:bg-slate-900/5 hover:text-slate-950'
      }`;
    }

    return `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-white text-ink' : 'text-slate-200 hover:bg-white/10 hover:text-white'
    }`;
  };

  const MoodIcon = mood === 'day' ? Moon : Sun;
  const moodLabel = mood === 'day' ? 'Night mood' : 'Day mood';

  function toggleMood() {
    setMood((current) => (current === 'day' ? 'night' : 'day'));
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 via-emerald-300 to-amber-300 text-base font-black text-ink">
            SN
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-white sm:text-base">Shokat Nexus</span>
            <span className="block text-xs font-medium text-cyan-200">Digital</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            className="mood-toggle ml-2 inline-flex min-h-9 items-center gap-2 rounded-full border border-white/15 px-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-white/10"
            onClick={toggleMood}
            aria-label={`Switch to ${moodLabel}`}
            title={`Switch to ${moodLabel}`}
          >
            <MoodIcon size={17} />
            <span>{mood === 'day' ? 'Night' : 'Day'}</span>
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="mood-toggle grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white"
            onClick={toggleMood}
            aria-label={`Switch to ${moodLabel}`}
          >
            <MoodIcon size={19} />
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-4 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClass} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              className="mood-toggle mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-sm font-semibold text-white"
              onClick={toggleMood}
            >
              <MoodIcon size={18} />
              Switch to {moodLabel}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
