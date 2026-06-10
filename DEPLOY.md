# Deploy Your Portfolio (Netlify + Render + MongoDB Atlas)

Follow these steps in order. Total time: about 15 minutes.

---

## Step 1 — MongoDB Atlas (free database)

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) and create a free account
2. Create a **free M0 cluster**
3. Click **Database Access** → Add user (username + password) → remember the password
4. Click **Network Access** → **Add IP Address** → choose **Allow Access from Anywhere** (`0.0.0.0/0`)
5. Click **Database** → **Connect** → **Drivers** → copy the connection string
6. Replace `<password>` with your user password and `<dbname>` with `mahimesh-portfolio`

Example:
```
mongodb+srv://myuser:MyPass123@cluster0.xxxxx.mongodb.net/mahimesh-portfolio?retryWrites=true&w=majority
```

---

## Step 2 — Deploy backend on Render (free)

1. Push this project to GitHub (already at `Mahi-06-24/portfolio-website-`)
2. Go to [render.com](https://render.com) → Sign up → **New +** → **Blueprint**
3. Connect your GitHub repo `portfolio-website-`
4. Render will detect `render.yaml` and create the API service
5. When prompted, set these environment variables:

| Variable | Value |
|----------|--------|
| `MONGODB_URI` | Your Atlas connection string from Step 1 |
| `CLIENT_URL` | `https://YOUR-SITE.netlify.app` (update after Step 3) |

6. Click **Deploy**. Wait until status is **Live**
7. Copy your Render URL, e.g. `https://mahimesh-portfolio-api.onrender.com`
8. Test it: open `https://YOUR-RENDER-URL.onrender.com/api/health` — you should see `{"status":"ok"}`

The database seeds automatically on first start.

---

## Step 3 — Deploy frontend on Netlify (free)

1. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
2. Connect GitHub → select `portfolio-website-`
3. Netlify reads `netlify.toml` automatically. Confirm:
   - **Build command:** `npm install --prefix client && npm run build --prefix client`
   - **Publish directory:** `client/dist`
4. Before deploying, add this **environment variable**:

| Variable | Value |
|----------|--------|
| `VITE_API_URL` | `https://YOUR-RENDER-URL.onrender.com/api` |

5. Click **Deploy site**
6. Copy your Netlify URL, e.g. `https://amazing-name.netlify.app`

---

## Step 4 — Connect frontend and backend

1. Go back to **Render** → your API service → **Environment**
2. Update `CLIENT_URL` to your Netlify URL:
   ```
   https://amazing-name.netlify.app
   ```
3. Save — Render will redeploy automatically
4. In **Netlify** → **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

---

## Step 5 — Verify

Open your Netlify URL. You should see:
- Your name and contact info
- Projects, skills, education sections
- No "Failed to load portfolio data" error

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Netlify shows "Page not found" | Publish directory must be `client/dist`, not the project root |
| "Failed to load portfolio data" | Check `VITE_API_URL` in Netlify matches your Render URL + `/api` |
| CORS error in browser console | Update `CLIENT_URL` on Render to your exact Netlify URL |
| Render API sleeps (slow first load) | Free tier sleeps after 15 min idle — first request takes ~30 sec |
| Empty database | Visit Render logs — look for "Seeding database for the first time" |

---

## Your GitHub repo

```
https://github.com/Mahi-06-24/portfolio-website-
```

After pushing the latest code, connect both Render and Netlify to this repo for automatic deploys on every push.
