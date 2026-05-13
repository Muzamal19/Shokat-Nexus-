import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pricingPlans } from '../data/pricing.js';

export default function PricingGrid({ limit }) {
  const plans = limit ? pricingPlans.slice(0, limit) : pricingPlans;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {plans.map((plan, index) => {
        const Icon = plan.icon;
        return (
          <motion.article
            key={plan.slug}
            className="glass group flex h-full flex-col rounded-2xl p-6 transition hover:border-cyan-300/55"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            whileHover={{ y: -10, scale: 1.015 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${plan.accent} text-ink`}>
                <Icon size={23} />
              </div>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-cyan-200">
                {plan.timeline}
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">{plan.title}</h3>
            <p className="mt-3 text-3xl font-extrabold text-white">{plan.price}</p>
            <p className="mt-3 leading-7 text-slate-300">{plan.description}</p>

            <ul className="mt-6 grid gap-3 text-sm text-slate-200">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="mt-0.5 shrink-0 text-emerald-300" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to={plan.contactPath}
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition group-hover:bg-cyan-300"
            >
              Choose {plan.title}
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
}
