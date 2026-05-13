import { Cpu, Orbit, Radar } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import heroImage from '../assets/hero-tech.png';
import Button from './Button.jsx';

const cursorDots = [
  ['left-[8%] top-[18%]', 0],
  ['left-[18%] top-[68%]', 0.5],
  ['left-[34%] top-[26%]', 0.9],
  ['left-[52%] top-[74%]', 0.2],
  ['left-[72%] top-[20%]', 0.7],
  ['left-[86%] top-[58%]', 0.35],
  ['left-[92%] top-[34%]', 1.1],
  ['left-[64%] top-[42%]', 0.15]
];

const heroPanels = [
  {
    title: 'Growth Stack',
    shortTitle: 'Growth',
    icon: Radar,
    color: 'text-cyan-200',
    bars: ['w-full bg-cyan-300/80', 'w-3/4 bg-emerald-300/70', 'w-1/2 bg-amber-300/70']
  },
  {
    title: 'AI Workflow',
    shortTitle: 'AI',
    icon: Cpu,
    color: 'text-emerald-200',
    nodes: true
  },
  {
    title: 'Nexus',
    shortTitle: 'Nexus',
    icon: Orbit,
    color: 'text-amber-100',
    blocks: true
  }
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 55, damping: 28, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 55, damping: 28, mass: 0.5 });
  const imageX = useTransform(smoothX, [-1, 1], ['-1.4%', '1.4%']);
  const imageY = useTransform(smoothY, [-1, 1], ['-1%', '1%']);
  const panelX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const panelY = useTransform(smoothY, [-1, 1], [-10, 10]);
  const cursorX = useTransform(smoothX, [-1, 1], ['18%', '82%']);
  const cursorY = useTransform(smoothY, [-1, 1], ['18%', '82%']);
  const gridX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const gridY = useTransform(smoothY, [-1, 1], [-8, 8]);
  const reversePanelX = useTransform(smoothX, [-1, 1], [12, -12]);
  const reversePanelY = useTransform(smoothY, [-1, 1], [10, -10]);
  const nexusPanelX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const nexusPanelY = useTransform(smoothY, [-1, 1], [12, -12]);

  function handleMouseMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const nextY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    mouseX.set(nextX);
    mouseY.set(nextY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      className="relative min-h-[500px] overflow-hidden sm:min-h-[560px] lg:min-h-[calc(76svh-4rem)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="cursor-orbit pointer-events-none absolute hidden h-72 w-72 rounded-full sm:block"
        style={{ left: cursorX, top: cursorY, x: '-50%', y: '-50%' }}
      >
        <span />
        <span />
        <span />
      </motion.div>
      <motion.img
        src={heroImage}
        alt="Digital product studio with code, AI, and analytics interfaces"
        className="absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] object-cover"
        style={{ x: imageX, y: imageY }}
        initial={{ scale: 1.035, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/28" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
      <motion.div
        className="hero-grid absolute inset-0 opacity-35"
        style={{ x: gridX, y: gridY }}
        initial={{ opacity: 0.22 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 0.55 }}
      />
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {cursorDots.map(([position, delay], index) => (
          <motion.span
            key={position}
            className={`robot-dot absolute ${position}`}
            animate={{ opacity: [0.25, 1, 0.25], scale: [0.7, 1.25, 0.7] }}
            transition={{ repeat: Infinity, duration: 3.2, delay, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <motion.div
        className="hero-panel glass absolute right-6 top-20 hidden w-56 rounded-2xl p-4 lg:block"
        style={{ x: panelX, y: panelY }}
        initial={{ opacity: 0, x: 40, y: -10 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { delay: 0.8, duration: 0.5 } }}
      >
        <div className="flex items-center gap-2">
          <Radar className="text-cyan-200" size={18} />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Growth Stack</p>
        </div>
        <div className="mt-4 grid gap-2">
          <span className="h-2 rounded-full bg-cyan-300/80" />
          <span className="h-2 w-3/4 rounded-full bg-emerald-300/70" />
          <span className="h-2 w-1/2 rounded-full bg-amber-300/70" />
        </div>
      </motion.div>
      <motion.div
        className="hero-panel glass absolute bottom-10 right-10 hidden w-64 rounded-2xl p-4 xl:block"
        style={{ x: reversePanelX, y: reversePanelY }}
        initial={{ opacity: 0, x: 36, y: 18 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { delay: 1, duration: 0.5 } }}
      >
        <div className="flex items-center gap-2">
          <Cpu className="text-emerald-200" size={18} />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">AI Workflow</p>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
          <span className="h-px flex-1 bg-white/25" />
          <span className="h-3 w-3 rounded-full bg-cyan-300" />
          <span className="h-px flex-1 bg-white/25" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
        </div>
      </motion.div>
      <motion.div
        className="hero-panel glass absolute left-[50%] top-20 hidden w-44 rounded-2xl p-4 xl:block"
        style={{ x: nexusPanelX, y: nexusPanelY }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, rotate: [0, 1.2, 0, -1.2, 0] }}
        transition={{ opacity: { delay: 1.15, duration: 0.5 }, rotate: { repeat: Infinity, duration: 7, ease: 'easeInOut' } }}
      >
        <div className="flex items-center gap-2">
          <Orbit className="text-amber-200" size={18} />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-100">Nexus</p>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className="h-2 rounded-full bg-white/25" />
          ))}
        </div>
      </motion.div>

      <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-start px-4 pb-16 pt-6 sm:min-h-[560px] sm:px-6 sm:pt-8 lg:min-h-[calc(76svh-4rem)] lg:items-center lg:px-8 lg:py-8">
        <motion.div
          className="hero-copy max-w-3xl"
          initial={{ opacity: 0.92, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300"
            initial={{ opacity: 0.4, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.26 }}
          >
            Software House
          </motion.p>
          <motion.h1
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0.35, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.03, duration: 0.32, ease: 'easeOut' }}
          >
            Shokat Nexus Digital
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-base leading-7 text-slate-200 sm:text-lg lg:max-w-xl xl:max-w-2xl"
            initial={{ opacity: 0.35, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.32, ease: 'easeOut' }}
          >
            We build sharp websites, scalable WordPress systems, growth campaigns, SEO foundations, and AI-powered
            workflows for modern businesses.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0.4, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.09, duration: 0.32, ease: 'easeOut' }}
          >
            <Button href="/contact">Start a Project</Button>
            <motion.a
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/45 hover:bg-white/10"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Services
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-x-4 bottom-3 z-10 grid grid-cols-3 gap-2 sm:bottom-5 xl:hidden"
        initial={{ opacity: 0.8, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.28, ease: 'easeOut' }}
      >
        {heroPanels.map((panel) => {
          const Icon = panel.icon;
          return (
            <div key={panel.title} className="hero-panel glass rounded-2xl p-2.5 sm:p-3">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <Icon className={panel.color} size={16} />
                <p className={`text-[10px] font-semibold uppercase tracking-[0.08em] sm:text-xs ${panel.color}`}>
                  <span className="sm:hidden">{panel.shortTitle}</span>
                  <span className="hidden sm:inline">{panel.title}</span>
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
