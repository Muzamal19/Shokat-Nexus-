import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {(eyebrow || title || subtitle) && (
        <motion.div
          className="mb-10 max-w-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {eyebrow && (
            <motion.p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300"
              variants={{ hidden: { opacity: 0, x: -18 }, show: { opacity: 1, x: 0 } }}
            >
              {eyebrow}
            </motion.p>
          )}
          {title && (
            <motion.h2
              className="text-3xl font-bold text-white sm:text-4xl"
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              className="mt-4 text-base leading-8 text-slate-300 sm:text-lg"
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      )}
      {children}
    </motion.section>
  );
}
