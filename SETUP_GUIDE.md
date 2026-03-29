# 🚀 Harinandan's Portfolio — Setup & Deployment Guide

## FILE STRUCTURE
```
portfolio/
├── app/
│   ├── globals.css          ← All styles (warm color theme)
│   ├── layout.tsx           ← Root layout + Google Fonts
│   ├── page.tsx             ← Main portfolio page (all sections)
│   └── api/
│       └── contact/
│           └── route.ts     ← Backend API for contact form
├── lib/
│   └── db.ts               ← Neon database connection
├── .env.local.example      ← Template for environment variables
├── .gitignore
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## STEP 1 — Install Node.js
1. Go to https://nodejs.org
2. Download the **LTS version** and install it
3. Open Terminal (or Command Prompt on Windows) and verify:
   ```
   node -v
   npm -v
   ```

---

## STEP 2 — Set Up the Project Locally
1. Create a folder called `portfolio` on your computer
2. Copy all the files from this download into that folder
3. Open a terminal inside the `portfolio` folder and run:
   ```
   npm install
   ```
4. Test it runs locally:
   ```
   npm run dev
   ```
5. Open http://localhost:3000 in your browser — you should see your portfolio!

---

## STEP 3 — Set Up Neon Database (Free)
1. Go to https://neon.tech and create a free account
2. Click **"New Project"** → give it any name (e.g. `portfolio`)
3. Once created, go to the **Dashboard** → click **"Connection Details"**
4. Copy the **Connection String** — it looks like:
   ```
   postgresql://username:password@ep-xxxx.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```
5. In your `portfolio` folder, create a file called `.env.local` (copy from `.env.local.example`):
   ```
   DATABASE_URL=paste-your-connection-string-here
   ```
6. The contact form table is **auto-created** when the first message is submitted — no manual SQL needed!

---

## STEP 4 — Push to GitHub
1. Go to https://github.com/harinandan-oss and click **"New repository"**
2. Name it `portfolio`, keep it **Public**, click **Create repository**
3. In your terminal (inside the portfolio folder):
   ```
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/harinandan-oss/portfolio.git
   git push -u origin main
   ```
   ⚠️ Make sure `.env.local` is NOT pushed — it's in `.gitignore` so it's safe.

---

## STEP 5 — Deploy on Vercel (Free)
1. Go to https://vercel.com and sign in with your GitHub account
2. Click **"Add New Project"**
3. Find and select your `portfolio` repository → click **Import**
4. Under **"Environment Variables"**, add:
   - Key: `DATABASE_URL`
   - Value: paste your Neon connection string
5. Click **Deploy** — Vercel will build and deploy automatically!
6. You'll get a URL like: `https://portfolio-harinandan.vercel.app`

---

## STEP 6 — Customize Your Portfolio
Edit `app/page.tsx` to update:
- **Projects section** → Replace with your real projects
- **Skills section** → Adjust percentages as you learn more
- **Contact section** → Add your real email if desired

Edit `app/globals.css` to change colors — look for the `:root` section at the top.

---

## HOW THE CONTACT FORM WORKS
When someone submits the contact form:
1. The frontend sends a POST request to `/api/contact`
2. `app/api/contact/route.ts` handles it on the server
3. `lib/db.ts` connects to your Neon database and saves the message
4. You can view messages by going to your Neon dashboard → SQL Editor → run:
   ```sql
   SELECT * FROM contacts ORDER BY created_at DESC;
   ```

---

## FUTURE IMPROVEMENTS
- Add your real photo by replacing the "HS" initials block in `page.tsx`
- Add a LinkedIn link in the contact section
- Create more project cards as you build more things
- Add a blog section using Next.js dynamic routes

---

🎉 You're live! Share your URL with recruiters and professors.
