# Deploying Your Portfolio on Vercel — Step by Step

## Prerequisites (One-time setup)

### 1. Install Node.js
- Go to https://nodejs.org
- Download the **LTS version** (v18 or higher)
- Install it (just click Next through the installer)
- Verify: open Terminal/Command Prompt and type `node --version`

### 2. Install Git
- Go to https://git-scm.com/downloads
- Download and install for your OS
- Verify: `git --version`

### 3. Create accounts
- **GitHub**: https://github.com (if you don't already have one)
- **Vercel**: https://vercel.com → Sign up with GitHub (free)

---

## Deployment Steps

### Step 1: Unzip the project
Unzip `portfolio-site.zip` to a folder on your computer.

### Step 2: Add your certificate images
Take screenshots of your certificates and save them in the `public/` folder as:
- `cert-psm1.png`
- `cert-az900.png`
- `cert-pl100.png`
- `cert-pl400.png`
- `cert-aws-ccp.png`

### Step 3: Install dependencies
Open Terminal, navigate to the project folder:
```bash
cd path/to/portfolio-site
npm install
```

### Step 4: Test locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser. Make sure everything looks good.

### Step 5: Create a GitHub repository
1. Go to https://github.com/new
2. Repository name: `portfolio` (or whatever you prefer)
3. Set to **Public**
4. Do NOT check "Add a README"
5. Click **Create repository**

### Step 6: Push code to GitHub
In your terminal (still in the project folder):
```bash
git init
git add .
git commit -m "My portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### Step 7: Deploy on Vercel
1. Go to https://vercel.com/new
2. Click **"Import Git Repository"**
3. Find and select your `portfolio` repo
4. Vercel auto-detects Vite. Verify these settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**
6. Wait 30-60 seconds

Your site is now live at `https://portfolio-xxxxx.vercel.app`

---

## Adding a Custom Domain (Optional)

### Step 1: Buy a domain
Recommended registrars (cheapest first):
- **Cloudflare**: https://cloudflare.com (~$9/year)
- **Namecheap**: https://namecheap.com (~$10/year)
- **Google Domains**: https://domains.google (~$12/year)

Search for `abhishekadurti.com` or `abhishekadurti.dev`

### Step 2: Connect to Vercel
1. In Vercel dashboard → your project → **Settings** → **Domains**
2. Type your domain and click **Add**
3. Vercel will show you DNS records to add

### Step 3: Update DNS
In your domain registrar's DNS settings, add:
- **A Record**: `@` → `76.76.21.21`
- **CNAME Record**: `www` → `cname.vercel-dns.com`

### Step 4: Wait
DNS propagation takes 5-30 minutes. Vercel auto-provisions HTTPS.

---

## Making Updates

### Updating content
1. Edit `src/Portfolio.jsx` — all data is in the `portfolioData` object at the top
2. Save the file

### Adding a new project
Copy this template into the `projects` array:
```javascript
{
  id: 5, // increment this
  title: "Your Project Name",
  category: "Category",
  date: "Month Year",
  period: ["Start", "End"],
  description: "One-line summary.",
  color: "#HEX",
  tech: ["Tech1", "Tech2"],
  github: "https://github.com/...",
  liveUrl: "",
  context: "What problem were you solving?",
  role: "What was your role?",
  features: ["Feature 1", "Feature 2"],
  impact: "What was the outcome?"
},
```

### Adding a blog article
Set `body` to your article text and update `date`:
```javascript
{
  title: "Your Article Title",
  date: "Mar 2026",
  description: "Preview text.",
  tags: ["Tag1"],
  linkedinUrl: "https://linkedin.com/...",
  body: "First paragraph.\n\nSecond paragraph.\n\nThird paragraph.",
},
```

### Adding a certificate
```javascript
{
  name: "Certificate Name",
  org: "Issuing Organization",
  image: "/cert-filename.png",
  verifyUrl: "https://verify-link.com",
},
```

### Publishing updates
```bash
git add .
git commit -m "Updated projects"
git push
```
Vercel auto-deploys in ~30 seconds. That's it.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `npm install` fails | Make sure Node.js v18+ is installed |
| Images not showing | Check file paths start with `/` and files are in `public/` |
| Site not updating after push | Check Vercel dashboard for build errors |
| Custom domain not working | Wait 30 min for DNS, check A/CNAME records |
| Dark/light mode looks wrong | Hard refresh with Ctrl+Shift+R |
