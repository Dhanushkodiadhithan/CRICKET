# 🏏 **Cricket Score Tracker App**

This is a custom-built cricket scoring application designed for local cricket matches, helping players easily track ball-by-ball progress without relying on manual scorecards. The app provides a clean and interactive interface to record every ball, update runs, wides, wickets, overs, and display live score summaries. It is designed for quick use during matches where arguments about scores and overs usually occur—this app eliminates confusion by storing every delivery clearly and visually.

Built using **React**, **Vite**, and **CSS**, the app renders each ball as a circular indicator, color-coded based on the result (run, wide, wicket, etc.). Each over is grouped neatly, making it easy to review previous balls. The scoreboard dynamically updates overs left, wides, wickets remaining, and total score. After the batting innings, the result page displays final summary and outcomes.

With simple navigation and fast UI updates, this tool serves as a reliable scorekeeping companion for casual cricket games.

---

# ✨ Features

### 🎯 **Ball-by-Ball Recording**

* Add results for every delivery:
  ✔ 1, 2, 3, 4, 6
  ✔ Wide
  ✔ Wicket
* Each ball shown as a colored circle.

### 🔄 **Over-by-Over Tracking**

* Automatic grouping of deliveries into overs.
* Displays remaining overs.

### 🧮 **Live Score Summary**

* Total score
* Wickets left
* Wides count
* Overs completed

### 📝 **Match Result Screen**

* Final score comparison
* Highlights winner

### 🧑‍🤝‍🧑 **Built for Local Matches**

* Easy to use while playing
* Helps avoid score disputes
* Simple UI for quick access

---

# 🛠️ Tech Stack

* **React** (Front-end framework)
* **Vite** (Fast dev environment)
* **CSS** (Custom styling)
* **JavaScript**

---

# 📁 Project Structure

```
src/
├── Component/
│   ├── choice.jsx
│   ├── choice.css
│   ├── mainscreen.jsx
│   ├── mainscreen.css
│   ├── overwide.jsx
│   ├── overwide.css
│   ├── result.jsx
│   ├── result.css
│   ├── teamname.jsx
│   ├── teamname.css
│
├── App.jsx
├── App.css
├── main.jsx
├── index.html
└── vite.config.js
```

---

# 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/cricket-score-tracker.git
cd cricket-score-tracker
```

### 2️⃣ Install dependencies

If using **npm**:

```bash
npm install
```

If using **bun**:

```bash
bun install
```

### 3️⃣ Start development server

```bash
npm run dev
```

or

```bash
bun dev
```

### 4️⃣ Open in browser

```
http://localhost:5173
```

---

# 📦 Build for Production

```bash
npm run build
```

or

```bash
bun run build
```

Output will be inside the `dist/` folder.

---
