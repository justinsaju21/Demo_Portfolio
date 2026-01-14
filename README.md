# 🎓 Student Portfolio Template

A modern, animated portfolio template built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**. Perfect for engineering students to showcase their projects, skills, and experience.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)

---

## ⚡ The "Magic" AI Workflow (Easiest Way)

This portfolio is designed to be updated automatically using AI!

1. **Clone this project** to your computer.
2. Open the file named `my_details.txt` in the main folder.
3. **Fill it out** with your actual name, projects, and skills.
4. Open the **Antigravity AI Assistant** (or any AI coding tool you are using).
5. Type this prompt:
   > **"Update the portfolio website using the details in my_details.txt"**

The AI will read your file and automatically replace the demo content with your real information across all 6 sections! 🪄

---

## 🚀 Quick Start (Manual Way)

If you prefer to code it yourself:

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Run development server**:
   ```bash
   npm run dev
   ```
3. **Edit the config objects** at the top of these files:
   - `src/components/sections/HeroSection.tsx` (Your name & bio)
   - `src/components/sections/AboutSection.tsx` (Education & skills)
   - `src/components/sections/ProjectsSection.tsx` (Your projects)
   - `src/components/sections/ExperienceSection.tsx` (Internships)
   - `src/components/sections/ContactSection.tsx` (Social links)

---

## 🎨 Customizing Design

- **Colors**: Edit `src/app/globals.css` in the `@theme` section.
- **Images**: Add your photo to `public/` and update the references.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout + SEO metadata
│   ├── page.tsx        # Main page sections
│   ├── globals.css     # Design system
│   └── favicon.ico
├── components/
│   ├── sections/       # The 6 main sections
│   ├── layout/         # Navbar
│   └── ui/             # Buttons, cards, animations
└── my_details.txt      # 📝 FILL THIS OUT FOR AI UPDATE
```

---

## 🚢 Deployment

1. Push your code to **GitHub**.
2. Go to [Vercel.com](https://vercel.com).
3. Import your repo and click **Deploy**.
4. Your portfolio is live in seconds!

---

## 📝 License & Attribution

**MIT License** © 2026 Justin Saju

Free to use for your own portfolio!

**Attribution Request:**
If you use this template, please keep the attribution in the footer or link back to this repository.
Example: *built with [Student Portfolio Template](https://github.com/justinsaju21/Demo_Portfolio)*

---

**Made with ❤️ for Students**
