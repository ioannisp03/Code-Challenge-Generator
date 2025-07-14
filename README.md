# Code Challenge Generator 🧩

A full‑stack web app that lets instructors and learners quickly **generate coding challenges powered by AI**.

- **Frontend** – React (Vite) with Clerk for authentication  
- **Backend**  – FastAPI, Clerk Backend API, OpenAI, SQLAlchemy  
---

## ✨ Features

| Area        | Highlights                                                                    |
|-------------|--------------------------------------------------------------------------------|
| Challenge AI| • Create randomized programming challenges via OpenAI gpt-3.5-turbo-0125                  |
| Auth        | • Email / OAuth sign‑in & JWT sessions handled end‑to‑end by Clerk            |
| API         | • RESTful JSON endpoints built with FastAPI                                   |
| Webhooks    | • Clerk + Svix webhooks to react to user & org events                         |
| Database    | • SQLAlchemy models (SQLite / Postgres ready) for persisting challenges       |
---

## 🚀 Quick Start

### 1  Clone & configure environment variables

```bash
git clone https://github.com/ioannisp03/Code-Challenge-Generator.git
cd Code-Challenge-Generator
```

Create two `.env` files based on the templates below:

* `backend/.env`
* `frontend/.env`

### 2  Backend

```bash
cd backend
uv venv .                         # create env with uv  (or python -m venv .venv)
uv pip install -r pyproject.toml  # fast dependency install
uvicorn app.main:app --reload     # http://127.0.0.1:8000
```

### 3  Frontend

```bash
cd ../frontend
npm install
npm run dev   # http://localhost:5173
```

---

## 🛠️ Useful Scripts

| Command                                | Description                                 |
|----------------------------------------|---------------------------------------------|
| `uv venv .`                            | Create & activate Python env using **uv**   |
| `uv pip install -r pyproject.toml`     | Sync backend dependencies                   |
| `uvicorn app.main:app --reload`        | Start FastAPI with hot reload               |
| `npm run dev`                          | Start React dev server (Vite)               |
| `npm run build`                        | Production build for frontend               |

---

## 🗝️ Environment Variables

> See `frontend/.env` & `backend/.env` for the list of required variables.

## 📄 API Reference

Once the backend is running, interactive docs are available at  

* `http://localhost:8000/docs` (Swagger UI)  
* `http://localhost:8000/redoc` (ReDoc)


