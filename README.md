# 🚀 SEO Generator (GrowthProAI Assignment)

A sleek and intelligent **SEO Headline Generator** built using **React + TypeScript**, backed by a powerful **Node.js + Express** API. This tool helps businesses generate compelling headlines and access key insights like ratings and review counts based on business name and location.

🔗 **Live Demo:** [growthai-assignment.vercel.app](https://growthai-assignment.vercel.app/)
📦 **GitHub Repo:** [github.com/harimouli/growthai-assignment](https://github.com/harimouli/growthai-assignment)

---

## 🧠 Features

* ✅ Clean, responsive UI built with **Tailwind CSS**
* 🧠 Dynamic SEO headline generation
* ⭐️ Rating & review insight visualization
* ⚡️ Form validation with smooth UX feedback
* 🔁 Regenerate headlines on the fly
* 🌐 Deployed frontend (Vercel) & backend (Render)

---

## 🛠️ Tech Stack

| Frontend     | Backend           | Misc/Infra                  |
| ------------ | ----------------- | --------------------------- |
| React + TS   | Node.js + Express | Axios                       |
| Tailwind CSS | dotenv + cors     | Deployed on Vercel & Render |

---

## 📸 Screenshots
![Screenshot (39)](https://github.com/user-attachments/assets/d6a6ec69-4c9c-4e5f-bdfe-aa2ad1ef2acf)

![Screenshot (42)](https://github.com/user-attachments/assets/4db5358e-9ee4-499a-8fff-84222e44179e)


---

## 🔧 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/harimouli/growthai-assignment.git
cd growthai-assignment
```

---

### 2. Setup Frontend

```bash
cd client
npm install
```

#### 🔑 Environment Variable

Create a `.env` file in `client/`:

```env
VITE_API_URL=https://growth-backend-bbqy.onrender.com
```

Start the dev server:

```bash
npm run dev
```

---

### 3. Setup Backend

```bash
cd server
npm install
```

#### 🌐 CORS Setup

Make sure CORS is configured like this:

```ts
app.use(cors({
  origin: ["http://localhost:5173", "https://growthai-assignment.vercel.app"],
  methods: ["GET", "POST"],
  credentials: true
}));
```

Start the backend:

```bash
npm run start
```

---

## ✨ Deployment URLs

* **Frontend (Vercel):** [https://growthai-assignment.vercel.app/](https://growthai-assignment.vercel.app/)
* **Backend (Render):** [https://growth-backend-bbqy.onrender.com/](https://growth-backend-bbqy.onrender.com/)

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo, make improvements, and submit a PR.

---

## 📫 Contact

Built by **Hari Mouli (aka MouliTheMachine)**
🧠 I'm a focused day coder, savage DSA hunter, and MERN stack developer.

[LinkedIn](https://linkedin.com/in/harimouli) | [GitHub](https://github.com/harimouli)

