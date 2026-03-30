---
description: "Event Landing Page monorepo: Next.js frontend, Express backend, PostgreSQL. Use for full-stack development, API integration, database operations, and deployment tasks."
---

# Event Landing Page - Workspace Instructions

## Project Overview

This is a full-stack event landing page monorepo for AI workshops and conferences. It includes attendee registration, ticketing, speaker management, photo galleries, and an admin dashboard. The application supports up to 100 attendees with features like QR code tickets, schedule management, and responsive design.

**Tech Stack**: Next.js 14 (frontend), Express.js (backend), PostgreSQL + Prisma ORM, TailwindCSS, JWT authentication.

## Architecture & Structure

### Monorepo Layout
```
event-landing/
├── apps/
│   ├── frontend/          # Next.js 14 app (port 3004)
│   │   ├── app/           # App Router pages
│   │   ├── components/    # Reusable React components
│   │   └── tailwind.config.js
│   └── backend/           # Express.js API (port 3001)
│       ├── src/routes/    # API endpoints
│       ├── prisma/        # Database schema & migrations
│       └── .env           # Environment variables
├── docs/                  # Documentation
└── package.json           # Root dependencies & scripts
```

### Key Architectural Decisions
- **Separation of Concerns**: Frontend handles UI/UX, backend manages data/API
- **Type Safety**: Prisma generates TypeScript types for database operations
- **RESTful API**: Consistent endpoint structure with JSON responses
- **Responsive Design**: Mobile-first with TailwindCSS utilities
- **Monorepo Management**: npm workspaces for shared tooling

## Development Setup

### Prerequisites
- Node.js 18+, npm/pnpm
- PostgreSQL 14+ (or Docker)
- Git

### Quick Start
```bash
# Install dependencies
npm install

# Setup database
createdb event_landing  # or use Docker
cd apps/backend && npm run migrate

# Start development
npm run dev  # Both frontend (3004) and backend (3001)
```

### Common Commands
- `npm run dev:frontend` - Start Next.js dev server
- `npm run dev:backend` - Start Express dev server
- `npm run build` - Production builds
- `npm run migrate` - Database migrations

## Development Conventions

### Frontend (Next.js)
- **Routing**: App Router with file-based routing
- **Components**: Functional components with hooks
- **Styling**: TailwindCSS with custom color palette
- **State**: React useState/useEffect (no complex state management)
- **API Calls**: Axios for HTTP requests to backend

### Backend (Express.js)
- **Structure**: Routes → Controllers → Services pattern
- **Validation**: express-validator for input validation
- **Authentication**: JWT middleware for protected routes
- **Database**: Prisma client for type-safe queries
- **Error Handling**: Centralized error middleware

### Database (PostgreSQL + Prisma)
- **Migrations**: `npm run migrate` after schema changes
- **Client Generation**: `npm run prisma:generate` after migrations
- **Studio**: `npx prisma studio` for database inspection
- **Seeding**: Custom seed scripts for initial data

## Code Quality & Standards

### File Organization
- **Components**: One component per file, PascalCase naming
- **Pages**: Route-based organization in `app/` directory
- **Utilities**: Shared functions in `lib/` directory
- **Styles**: Global CSS in `globals.css`, component-specific in files

### Naming Conventions
- **Components**: PascalCase (e.g., `SpeakerCard.jsx`)
- **Files**: kebab-case for pages, camelCase for utilities
- **Database**: snake_case for columns, PascalCase for models
- **API Routes**: RESTful naming (`/api/speakers`, `/api/schedule`)

### Styling Guidelines
- **Colors**: Use CSS custom properties (`--clr-primary`, `--clr-text`)
- **Responsive**: Mobile-first with `md:`, `lg:` breakpoints
- **Accessibility**: Semantic HTML, alt texts, proper contrast
- **Performance**: Optimize images, lazy loading where appropriate

## Common Workflows

### Adding a New Feature
1. **Database**: Update Prisma schema if needed
2. **Backend**: Create API endpoint in routes/
3. **Frontend**: Build UI component and integrate API
4. **Testing**: Manual testing, check responsive design

### Database Changes
1. **Schema**: Edit `prisma/schema.prisma`
2. **Migrate**: `npm run migrate` (creates migration file)
3. **Generate**: `npm run prisma:generate` (updates client)
4. **Seed**: Run seed scripts if needed

### Deployment
- **Frontend**: Deploy to Vercel/Netlify
- **Backend**: Deploy to Railway/Render/Heroku
- **Database**: Managed PostgreSQL service
- **Environment**: Separate .env files for each environment

## API Endpoints Reference

### Public Endpoints
- `GET /api/event` - Event details
- `GET /api/schedule` - Full schedule
- `GET /api/speakers` - Speaker directory
- `POST /api/attendees` - Register attendee
- `GET /api/gallery` - Photo gallery

### Admin Endpoints (JWT required)
- `POST /api/auth/login` - Admin authentication
- `GET /api/admin/attendees` - List registrations
- `POST /api/admin/schedule` - Create schedule item

### Response Format
```json
{
  "success": true,
  "data": { /* payload */ },
  "message": "Optional success message"
}
```

## Troubleshooting

### Common Issues
- **Port conflicts**: Frontend uses 3004, backend uses 3001
- **Database connection**: Check DATABASE_URL in .env
- **CORS errors**: Backend must allow frontend origin
- **Prisma client**: Regenerate after schema changes
- **Dependencies**: Run `npm install` from root directory

### Debugging Tips
- **Backend**: Check terminal logs for Express errors
- **Frontend**: Use browser dev tools console
- **Database**: Use `npx prisma studio` to inspect data
- **API**: Check Network tab for failed requests

## Links to Documentation

- [Setup Guide](./docs/SETUP.md) - Detailed installation steps
- [API Documentation](./docs/API.md) - Complete endpoint reference
- [Database Schema](./docs/DATABASE.md) - Model definitions and relationships
- [README.md](../README.md) - Project overview and quick start