# Abhishek Adurti — Portfolio Website

Your personal portfolio site built with React + Vite. Ready to deploy on Vercel.

---

## 🚀 Deploy to Vercel (Step by Step)

### Prerequisites
- A **GitHub account** → [github.com](https://github.com)
- A **Vercel account** → [vercel.com](https://vercel.com) (sign up with GitHub — it's free)
- **Git** installed on your computer
- **Node.js** (v18+) installed → [nodejs.org](https://nodejs.org)

---

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `portfolio` (or whatever you like)
3. Set it to **Public** (required for free Vercel tier)
4. Do **NOT** add a README (we already have one)
5. Click **Create repository**

### Step 2: Push This Project to GitHub

Open your terminal, navigate to this project folder, and run:

```bash
cd portfolio-site
npm install
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your `portfolio` repo
4. Vercel auto-detects Vite — settings should be:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**
6. Wait ~30 seconds — your site is live! 🎉

Your site will be at: `https://portfolio-XXXX.vercel.app`

---

### Step 4 (Optional): Custom Domain

1. Buy a domain (e.g., `abhishekadurti.com`) from:
   - [Namecheap](https://namecheap.com) (~$10/year)
   - [Google Domains](https://domains.google) (~$12/year)
   - [Cloudflare](https://cloudflare.com) (cheapest, at-cost pricing)

2. In Vercel dashboard → your project → **Settings** → **Domains**
3. Add your custom domain
4. Update your domain's DNS:
   - Add an **A record** pointing to `76.76.21.21`
   - Add a **CNAME record** for `www` pointing to `cname.vercel-dns.com`
5. Wait 5-10 minutes for DNS propagation
6. Vercel auto-provisions an SSL certificate (HTTPS)

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
portfolio-site/
├── public/
│   ├── headshot.jpeg      ← Your photo
│   └── favicon.svg        ← Browser tab icon
├── src/
│   ├── Portfolio.jsx      ← Main portfolio component (edit your data here)
│   └── main.jsx           ← React entry point
├── index.html             ← HTML template with SEO meta tags
├── package.json
├── vite.config.js
└── README.md
```

---

## ✏️ How to Update Content

All your portfolio data lives in the `portfolioData` object at the top of `src/Portfolio.jsx`.

To update anything:
1. Open `src/Portfolio.jsx`
2. Edit the relevant section in `portfolioData`
3. Commit and push to GitHub
4. Vercel auto-deploys in ~30 seconds

---

## 🔄 Auto-Deploy

Once connected to Vercel, every `git push` to `main` triggers an automatic redeploy. Just edit, commit, push — and your site updates.

```bash
git add .
git commit -m "Updated projects section"
git push
```

That's it! Your changes go live in under a minute.
