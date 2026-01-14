# 🚀 Student Portfolio Workshop Instructions

Follow these steps to build your own portfolio in under 10 minutes!

## 📋 Prerequisites
- **Node.js** installed (https://nodejs.org)
- **Git** installed (https://git-scm.com)
- **VS Code** with **Antigravity** extension

## Step 0.5: Verify Prerequisites Script
1. In the terminal, run `node check-prereqs.js`.
2. If the script reports any missing tools, install them before proceeding.

## Step 0: Support the Creator ⭐
Before you start, please give this repository a **Star** on GitHub!
1. Go to **[github.com/justinsaju21/Demo_Portfolio](https://github.com/justinsaju21/Demo_Portfolio)**
2. Click the **Star** button (top right).
*(This helps me create more free templates for you!)*

## Step 1: Open the Project
1. **Download** this folder (or click "Use this template" on GitHub).
2. Open the folder in **VS Code**.

## Step 2: Add Your Details
1. Open **`my_details.txt`**.
2. **Replace the example info** with your real details.
3. **Save** the file (Ctrl+S).

## Step 3: Run the "Master Command" 🪄
1. Open the file **`AI_PROMPT.txt`**.
2. **Copy** the entire text inside.
3. Open your **AI Assistant** (Antigravity).
4. **Paste** the text and hit **Enter**.

*(The AI will now update your code, install tools, and save your work to Git automatically!)*

## Step 4: Go Live!
1. Once the AI is done, run this command in your terminal:
   ```bash
   npm run dev
   ```
2. Click the link (e.g. `http://localhost:3000`) to see your site!

---

## ☁️ How to Push to GitHub
Resulting code is already committed locally. To put it online:

1. Create a **New Repository** on GitHub.
2. Copy the commands shown under "…or push an existing repository from the command line".
3. Paste them into your VS Code terminal.

## Step 5: Verify Git Remote
1. Run `git remote -v`.
2. If no remote is listed, add one:
   ```bash
   git remote add origin <your-repo-URL>
   ```
3. Push your changes:
   ```bash
   git push -u origin main
   ```

---

## ❓ FAQ
**Q: The prerequisite script reports Node.js is missing but I already have it installed.**
A: Ensure `node` is in your system PATH. Restart your terminal or VS Code after installation.

**Q: My `git remote -v` shows an old URL.**
A: Update it with `git remote set-url origin <new-URL>` before pushing.

**Q: The AI stops after installing Node.js. What do I do?**
A: Restart VS Code, then re‑run the master command.

**Q: Build fails with a missing package error.**
A: Run `npm install` again and ensure you have an internet connection.

---
