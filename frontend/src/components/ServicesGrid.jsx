import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services.js';

export default function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.article
            key={service.title}
            className="glass group rounded-2xl p-6 transition hover:border-cyan-300/55"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            whileHover={{ y: -10, scale: 1.015 }}
          >
            <Link
              to={`/contact?service=${service.slug}`}
              className="block h-full rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-300/25"
            >
              <div
                className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-ink shadow-glow`}
              >
                <Icon size={25} />
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
              <p className="mt-5 text-sm font-bold text-cyan-200">Request this service</p>
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
}
