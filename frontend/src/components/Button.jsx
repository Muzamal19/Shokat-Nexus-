import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Button({ children, href, type = 'button', disabled = false, icon: Icon = ArrowRight }) {
  const className =
    'inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:px-6';

  if (href) {
    return (
      <motion.a href={href} className={className} whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        {children}
        {Icon && <Icon size={18} />}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={className}
      whileHover={disabled ? undefined : { y: -3, scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {children}
      {Icon && <Icon size={18} />}
    </motion.button>
  );
}
