# Shokat Nexus Digital

Modern React + Vite website with Tailwind CSS, Framer Motion animations, and a Node.js/Express contact API powered by Nodemailer.

## Local Setup

> This machine currently has a broken `npm` shim. Repair npm or use a working Node package manager before installing.

1. Enable Corepack and install dependencies:
   ```bash
   corepack enable
   corepack pnpm install
   ```

   Or, with a working npm install:
   ```bash
   npm run install:all
   ```

2. Create backend environment file:
   ```bash
   copy backend\.env.example backend\.env
   ```

3. Update `backend/.env` with your SMTP credentials and admin email.

4. Optional frontend API URL:
   ```bash
   copy frontend\.env.example frontend\.env
   ```

5. Run both apps:
   ```bash
   corepack pnpm dev
   ```

Frontend: `http://localhost:5173`  
Backend: `http://localhost:5000`

## Backend API

`POST /api/contact`

```json
{
  "service": "web-development",
  "serviceTitle": "Web Development",
  "name": "Client Name",
  "email": "client@example.com",
  "message": "Project details"
}
```

## Deployment Order

Deploy the backend first on Render, then deploy the frontend on Vercel. The frontend needs the backend URL in `VITE_API_URL`.

## Deploy Backend to Render

1. Push the repo to GitHub.
2. Go to Render and choose **New Web Service**.
3. Connect your GitHub repository.
4. Set root directory to `backend`.
5. Set runtime to Node.
6. Build command:
   ```bash
   npm install
   ```
7. Start command:
   ```bash
   npm start
   ```
8. Add environment variables:
   - `PORT=5000`
   - `CLIENT_URL=https://your-vercel-site.vercel.app`
   - `SMTP_HOST=smtp.example.com`
   - `SMTP_PORT=587`
   - `SMTP_SECURE=false`
   - `SMTP_USER=your-smtp-user`
   - `SMTP_PASS=your-smtp-password`
   - `ADMIN_EMAIL=admin@yourdomain.com`
   - `FROM_EMAIL=Shokat Nexus Digital <no-reply@yourdomain.com>`
9. Deploy the service.
10. Copy your Render URL, for example:
    ```text
    https://shokat-nexus-digital-api.onrender.com
    ```
11. Test the backend:
    ```text
    https://shokat-nexus-digital-api.onrender.com/api/health
    ```

## Deploy Frontend to Vercel

1. Go to Vercel and choose **Add New Project**.
2. Import the same GitHub repository.
3. Set framework preset to Vite.
4. Set root directory to `frontend`.
5. Build command:
   ```bash
   npm run build
   ```
6. Output directory:
   ```text
   dist
   ```
7. Add environment variable:
   - `VITE_API_URL=https://your-render-backend.onrender.com`
8. Deploy.
9. After Vercel gives you the frontend URL, go back to Render and update:
   - `CLIENT_URL=https://your-vercel-site.vercel.app`
10. Redeploy the Render backend after changing `CLIENT_URL`.

## Deployment Checklist

- Backend `/api/health` returns `{"status":"ok"}`.
- Vercel environment variable `VITE_API_URL` points to the Render backend.
- Render environment variable `CLIENT_URL` points to the Vercel frontend.
- SMTP credentials are correct.
- Contact form sends the selected service, name, email, and message.
