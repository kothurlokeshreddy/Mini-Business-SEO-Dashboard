# 📊 GrowthProAI – Full Stack Intern Assignment

A responsive dashboard that simulates how local businesses might view SEO and Google Business data — built using **React + Tailwind (Frontend)** and **Node.js + Express (Backend)**. No database used — all data is simulated in code.

---

## 🚀 Features

- 🔎 Input business name & location
- ⭐ Simulated Google Rating & Reviews
- 🧠 AI-style SEO Headline generation
- 🔁 Regenerate headlines dynamically
- 💻 Fully responsive and mobile-friendly
- ⚙️ Loading spinner & form validation
- 📦 Shared state using React Context API

---

## 📂 Folder Structure

```bash
growthpro-frontend/
└── src/
├── components/
│ ├── Form.js
│ └── ResultCard.js
├── context/
│ └── BusinessContext.js
├── App.js
├── App.css

growthpro-backend/
├── index.js
└── utils/
└── seoHeadlines.js
```


---

## 🛠️ How to Run Locally

### 🔧 Backend

```bash
cd growthpro-backend
npm install
node index.js
```
Server runs at: http://localhost:5000


🌐 Frontend
```bash
cd growthpro-frontend
npm install
npm start
```
Frontend runs at: http://localhost:3000


### 🚀 Live Demo
### Frontend: https://mini-business-seo-dashboard.vercel.app/
### Backend: https://mini-business-seo-dashboard.onrender.com/
