# Mahimesh Mukherjee — MERN Portfolio

A full-stack portfolio website built with **MongoDB**, **Express**, **React**, and **Node.js**, featuring a dark glassmorphism UI inspired by modern portfolio designs.

## Features

- Hero section with contact info, "Open to work" badge, and CV download
- Summary with featured project cards
- Experience, education, and certifications from your CV
- Skills section with proficiency bars
- Social links (LinkedIn, GitHub, Email) and project repository links
- Individual project detail pages
- Contact form (optional NodeMailer integration)
- Floating pill navigation with active section tracking
- Framer Motion animations

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas connection string

## Quick Start

```bash
# Install all dependencies
npm run install:all

# Seed the database with your CV data
npm run seed

# Start both server and client
npm run dev
```

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000

## Project Structure

```
portfolio website/
├── client/          # React + Vite + Tailwind frontend
├── server/          # Express + MongoDB backend
│   ├── models/      # Mongoose schemas
│   ├── routes/      # API routes
│   └── seed/        # Database seed data (your CV)
└── package.json     # Root scripts
```

## Updating Your Info

Edit `server/seed/seedData.js` to update profile, projects, skills, or links, then re-run:

```bash
npm run seed
```

### GitHub & Project Links

Update `socialLinks.github` and each project's `githubUrl` in the seed file with your actual repository URLs, then re-seed.

### Contact Form

Copy `server/.env.example` to `server/.env` and add SMTP credentials to enable the contact form.

### CV Download

Place your resume PDF at `client/public/resume.pdf` for the Download CV button.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/profile` | Profile info |
| GET | `/api/projects` | All projects |
| GET | `/api/projects/:id` | Single project |
| GET | `/api/education` | Education history |
| GET | `/api/experience` | Work experience |
| GET | `/api/skills` | Technical skills |
| GET | `/api/certifications` | Certifications |
| POST | `/api/contact` | Send contact message |

## Deploy to Netlify (Frontend)

Netlify hosts the **React frontend only**. The Express/MongoDB backend must be deployed separately (e.g. Render or Railway).

### Option A — Connect GitHub (recommended)

1. Push this project to GitHub
2. In Netlify: **Add new site → Import from Git**
3. Netlify will read `netlify.toml` automatically:
   - **Build command:** `npm install --prefix client && npm run build --prefix client`
   - **Publish directory:** `client/dist`
4. After the backend is live, add a Netlify environment variable:
   - `VITE_API_URL` = `https://your-backend-url.com/api`
5. Redeploy the site

### Option B — Manual drag & drop

1. Run `npm run build` locally
2. Upload the **contents** of `client/dist` (not the whole project folder)
3. The `_redirects` file inside `dist` fixes React Router 404 errors

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, React Router
- **Backend:** Node.js, Express, Mongoose, NodeMailer
- **Database:** MongoDB
