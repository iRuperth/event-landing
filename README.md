# 🎯 Event Landing Page - Full Stack Application

A complete web application for AI events and conferences with attendee registration, ticketing, schedule, speakers, image gallery, and admin dashboard.

**Status**: ✅ Phase 1 completed - development environment and core architecture ready.

## 🧩 What is this project?

This is a full-stack landing page for an AI conference/event, built with a monorepo architecture.
It is targeted at:
- Students
- Teachers
- Educators and AI content creators (disseminators)

## 🏗️ Architecture

Monorepo structure with frontend and backend separation:

```
event-landing/
├── apps/
│   ├── frontend/         # Next.js 14 + TypeScript + TailwindCSS (port 3000)
│   └── backend/          # Express.js + TypeScript + Prisma (port 3001)
├── docs/                # Documentation (API, setup, DB)
├── .github/             # workflow and instructions
├── spec-driven.md       # project specification
└── README.md            # this file
```

## 🚀 Tech Stack

- Frontend: Next.js 14, React 18, TypeScript, TailwindCSS
- Backend: Node.js, Express.js, TypeScript, JWT
- Database: PostgreSQL | Prisma ORM
- Deployment target: Cloud-ready horizontally-scalable services (Supabase, Google Cloud)
- State/Config toggle: support provider switch (Supabase vs PostgreSQL) via flag

## ⚙️ Prerequisites

### Common (Windows / macOS / Linux)

- Node.js v18+
- npm v9+
- PostgreSQL 14+ (or Docker PostgreSQL container)
- Git

### macOS

```bash
brew install node postgresql
brew services start postgresql
```

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install nodejs npm postgresql postgresql-contrib
sudo systemctl start postgresql
```

### Windows

- Install Node.js from https://nodejs.org
- Install PostgreSQL from https://www.postgresql.org/download/windows/
- Or use package managers (choco/winget)

## 🧰 Setup

### 1. Clone repository. 

```bash
git clone https://github.com/iRuperth/event-landing.git
cd event-landing
```

### 2. Install dependencies

```bash
npm install
```

(If using pnpm, run `pnpm install`)

### 3. Database setup

- Copy and configure backend `.env` in `apps/backend/.env`:

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/event_landing?schema=public"
```

#### Local PostgreSQL

```bash
createdb event_landing
cd apps/backend
npm run prisma:generate
npm run migrate
```

#### Docker (all platforms)

```bash
docker run --name event-db -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:15
createdb event_landing
cd apps/backend
npm run prisma:generate
npm run migrate
```

## 🚦 Run the application

### Native NPM (recommended)

#### Start frontend

```bash
npm run dev:frontend
```

#### Start backend

```bash
cd apps/backend
npm run dev
```

### Single command `make dev`

A helper `make dev` is configured to run both services concurrently.

#### Install make (if not installed)

- macOS: `brew install make`
- Linux: `sudo apt install make`
- Windows: use WSL or Git Bash where `make` is available

#### Run in root

```bash
make dev
```

This will start:
- Frontend on `http://localhost:3000`
- Backend on `http://localhost:3001`

## 🧾 Available project scripts

### From root

- `npm run dev` – run frontend + backend for development
- `npm run dev:frontend` – run only frontend
- `npm run dev:backend` – run only backend
- `npm run build` – build frontend + backend
- `npm run test` – run tests (if available)

### Frontend (apps/frontend)

- `npm run dev` – Next.js dev server
- `npm run build` – production build
- `npm run start` – production server

### Backend (apps/backend)

- `npm run dev` – Express dev server (nodemon)
- `npm run start` – production server
- `npm run prisma:generate` – Prisma client generation
- `npm run migrate` – run Prisma migrations

## 🌐 URL matrix

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:3001/api`
- Health check: `http://localhost:3001/health`

## 🧪 Testing validation

- Create unit/integration tests first
- Validate input/output matches the spec before production
- Use `npm run test` after implementation

## 🎨 Theme and palette

Default theme and color variables are set in:
- `apps/frontend/app/globals.css`
- `apps/frontend/tailwind.config.js`

Colors in use:
- `--clr-primary: #44749D`
- `--clr-secondary: #C6D4E1`
- `--clr-surface: #EBE7E0`
- `--clr-text: #44749D`
- `--clr-muted: #BDB8AD`

## ☁️ Deployment

- Build and deploy with Vercel (frontend) and Render/Railway/Cloud Run (backend)
- Use Supabase or Google Cloud SQL for PostgreSQL
- Cloud config should honor env var flags for provider selection.

## 📌 Notes

- Update `spec-driven.md` after PR acceptance.
- Use these commands and conventions in the `dev` branch workflow.

