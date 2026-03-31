# Event Landing Page - Setup Instructions

## Prerequisites

- Node.js 18+ and npm/pnpm
- PostgreSQL 14+ (or use Docker)
- Git

## Installation Steps

### 1. Install Dependencies

From the root directory, install all dependencies for the monorepo:

```bash
npm install
# or
pnpm install
```

### 2. Setup Database

#### Option A: Local PostgreSQL
```bash
# Create database
createdb event_landing

# Update .env in apps/backend with your connection string
DATABASE_URL="postgresql://user:password@localhost:5432/event_landing?schema=public"
```

#### Option B: Docker PostgreSQL
```bash
docker run --name event-db -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:15
```

### 3. Setup Prisma

```bash
cd apps/backend

# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run migrate
```

### 4. Start Development Servers

#### Opción A (desde root, recomendada)
##### Terminal 1 - Backend
```bash
npm run dev:backend
# Server will run on http://localhost:3001
```

##### Terminal 2 - Frontend
```bash
npm run dev:frontend
# App will run on http://localhost:3000
```

#### Opción B (desde cada carpeta)
##### Backend
```bash
cd apps/backend
npm run dev
# Server will run on http://localhost:3001
```

##### Frontend
```bash
cd apps/frontend
npm run dev
# App will run on http://localhost:3000
```

## Project Structure

```
event-landing/
├── apps/
│   ├── frontend/     # Next.js 14 app
│   └── backend/      # Express.js API
├── docs/             # Documentation
└── package.json      # Root monorepo config
```

## Key Commands

### Frontend
- `npm run dev:frontend` - Start dev server
- `npm run build:frontend` - Build for production

### Backend
- `npm run dev:backend` - Start dev server
- `npm run migrate` - Run database migrations
- `npm run prisma:generate` - Generate Prisma client

### Both
- `npm run dev` - Start both frontend and backend
- `npm run build` - Build both apps

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend (.env)
```
DATABASE_URL=postgresql://...
PORT=3001
JWT_SECRET=your_secret_here
CORS_ORIGIN=http://localhost:3000
```

## Default Ports

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Troubleshooting

### Port already in use
```bash
# Kill process on port (macOS/Linux)
lsof -ti:3000,3001 | xargs kill -9
```

### Database connection error
- Ensure PostgreSQL is running
- Check DATABASE_URL in .env
- Run migrations: `npm run migrate`

### Prisma client not found
```bash
cd apps/backend
npm run prisma:generate
```

## Next Steps

1. Configure the database connection
2. Run initial migrations
3. Create seed data with `npx prisma db seed` (when implemented)
4. Start both servers
5. Visit http://localhost:3000

## API Endpoints

Starting endpoints available in `/apps/backend/src/routes/`

- `GET /health` - Health check
- `GET /api` - API info

More endpoints will be added in phases 3-5.
