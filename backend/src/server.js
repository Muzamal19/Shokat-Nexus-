import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
const allowedOrigins = new Set([clientUrl, 'http://localhost:5173', 'http://127.0.0.1:5173']);

app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  })
);
app.use(express.json({ limit: '20kb' }));
app.use(
  '/api',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 25,
    standardHeaders: true,
    legacyHeaders: false
  })
);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateContactPayload(payload) {
  const service = String(payload.service || '').trim();
  const serviceTitle = String(payload.serviceTitle || service).trim();
  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim().toLowerCase();
  const message = String(payload.message || '').trim();

  if (!service || !name || !email || !message) {
    return { error: 'Service, name, email, and message are required.' };
  }

  if (!isValidEmail(email)) {
    return { error: 'Please provide a valid email address.' };
  }

  if (message.length < 10) {
    return { error: 'Message must be at least 10 characters.' };
  }

  return { data: { service, serviceTitle, name, email, message } };
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return entities[character];
  });
}

function createTransporter() {
  const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'ADMIN_EMAIL'];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing email configuration: ${missing.join(', ')}`);
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'shokat-nexus-digital-api' });
});

app.post('/api/contact', async (req, res) => {
  const { error, data } = validateContactPayload(req.body || {});

  if (error) {
    return res.status(400).json({ success: false, message: error });
  }

  try {
    const transporter = createTransporter();
    const safeService = escapeHtml(data.serviceTitle);
    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safeMessage = escapeHtml(data.message).replaceAll('\n', '<br />');

    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      replyTo: data.email,
      subject: `New ${data.serviceTitle} inquiry from ${data.name}`,
      text: `Service: ${data.serviceTitle}\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
          <h2>New Shokat Nexus Digital inquiry</h2>
          <p><strong>Service:</strong> ${safeService}</p>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `
    });

    return res.json({ success: true, message: 'Thanks. Your message has been sent successfully.' });
  } catch (mailError) {
    console.error('Contact form error:', mailError);
    return res.status(500).json({
      success: false,
      message: 'Unable to send your message right now. Please try again later.'
    });
  }
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' });
});

app.listen(port, () => {
  console.log(`Shokat Nexus Digital API running on port ${port}`);
});
