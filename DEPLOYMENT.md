# Deployment Guide

Deploy in this order:

1. Backend API on Render
2. Frontend website on Vercel
3. Update Render `CLIENT_URL` with the final Vercel domain

## 1. Prepare GitHub

Push this project to GitHub.

```bash
git add .
git commit -m "Build Shokat Nexus Digital website"
git push
```

## 2. Deploy Backend on Render

1. Open Render.
2. Click **New +**.
3. Choose **Web Service**.
4. Connect the GitHub repo.
5. Use these settings:

```text
Root Directory: backend
Build Command: npm install
Start Command: npm start
```

Add these environment variables:

```text
PORT=5000
CLIENT_URL=https://your-vercel-site.vercel.app
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
ADMIN_EMAIL=admin@yourdomain.com
FROM_EMAIL=Shokat Nexus Digital <no-reply@yourdomain.com>
```

Deploy, then test:

```text
https://your-render-service.onrender.com/api/health
```

## 3. Deploy Frontend on Vercel

1. Open Vercel.
2. Click **Add New Project**.
3. Import the same GitHub repo.
4. Use these settings:

```text
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
```

Add this environment variable:

```text
VITE_API_URL=https://your-render-service.onrender.com
```

Deploy the frontend.

## 4. Final Render Update

After Vercel gives you the final website URL, return to Render and update:

```text
CLIENT_URL=https://your-vercel-site.vercel.app
```

Redeploy the Render service.

## 5. Final Test

1. Open your Vercel site.
2. Go to Pricing.
3. Click any service package.
4. Confirm the contact form opens with that service selected.
5. Submit a test message.
6. Confirm the admin email includes the selected service.
