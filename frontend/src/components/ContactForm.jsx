import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from './Button.jsx';
import { pricingPlans } from '../data/pricing.js';

const initialValues = {
  service: '',
  name: '',
  email: '',
  message: ''
};

function validate(values) {
  const errors = {};
  if (!values.service) errors.service = 'Please choose a service.';
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email.';
  if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get('service') || '';
  const serviceOptions = useMemo(() => pricingPlans.map(({ slug, title }) => ({ slug, title })), []);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    if (requestedService && serviceOptions.some((service) => service.slug === requestedService)) {
      setValues((current) => ({ ...current, service: requestedService }));
    }
  }, [requestedService, serviceOptions]);

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus({ type: '', message: '' });

    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    try {
      const selectedService = serviceOptions.find((service) => service.slug === values.service);
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          serviceTitle: selectedService?.title || values.service
        })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setValues({ ...initialValues, service: requestedService || '' });
      setStatus({ type: 'success', message: data.message || 'Message sent successfully.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      className="glass rounded-2xl p-5 sm:p-7"
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="grid gap-5">
        {values.service && (
          <motion.p
            className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-100"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Selected service: {serviceOptions.find((service) => service.slug === values.service)?.title}
          </motion.p>
        )}

        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Service
          <select className="field" name="service" value={values.service} onChange={updateField}>
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service && <span className="text-sm font-medium text-rose-300">{errors.service}</span>}
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Name
          <input className="field" name="name" value={values.name} onChange={updateField} autoComplete="name" />
          {errors.name && <span className="text-sm font-medium text-rose-300">{errors.name}</span>}
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Email
          <input
            className="field"
            type="email"
            name="email"
            value={values.email}
            onChange={updateField}
            autoComplete="email"
          />
          {errors.email && <span className="text-sm font-medium text-rose-300">{errors.email}</span>}
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Message
          <textarea className="field min-h-36 resize-y" name="message" value={values.message} onChange={updateField} />
          {errors.message && <span className="text-sm font-medium text-rose-300">{errors.message}</span>}
        </label>

        {status.message && (
          <p className={`rounded-xl px-4 py-3 text-sm ${status.type === 'success' ? 'bg-emerald-400/12 text-emerald-200' : 'bg-rose-400/12 text-rose-200'}`}>
            {status.message}
          </p>
        )}

        <Button type="submit" disabled={loading} icon={Send}>
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </motion.form>
  );
}
