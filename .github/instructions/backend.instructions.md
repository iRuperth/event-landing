---
description: "Backend development: Express.js, Prisma ORM, PostgreSQL. Use for API endpoints, database operations, authentication, and server-side logic."
applyTo: "apps/backend/**/*.{js,ts,json,md,prisma}"
---

# Backend Development Instructions

## Express.js + Node.js Patterns

### Server Structure
```javascript
// src/server.js - Main server file
const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

// Middleware
app.use(cors({
  origin: 'http://localhost:3004', // Frontend URL
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/event', require('./routes/event.routes'))
app.use('/api/schedule', require('./routes/schedule.routes'))

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  })
})

const PORT = process.env.PORT || 3004
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

### Route Organization
```
src/routes/
├── auth.routes.js      # Authentication endpoints
├── event.routes.js     # Event CRUD operations
├── schedule.routes.js  # Schedule management
├── speaker.routes.js   # Speaker directory
├── attendee.routes.js  # Registration handling
├── ticket.routes.js    # Ticket operations
├── gallery.routes.js   # Image management
└── admin.routes.js     # Admin-only endpoints
```

### Route Pattern
```javascript
// routes/speakers.routes.js
const express = require('express')
const { PrismaClient } = require('@prisma/client')
const { body, validationResult } = require('express-validator')

const router = express.Router()
const prisma = new PrismaClient()

// GET /api/speakers - Get all speakers
router.get('/', async (req, res) => {
  try {
    const speakers = await prisma.speaker.findMany({
      orderBy: { name: 'asc' }
    })

    res.json({
      success: true,
      data: speakers
    })
  } catch (error) {
    console.error('Error fetching speakers:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch speakers'
    })
  }
})

// POST /api/speakers - Create speaker (admin only)
router.post('/',
  // Validation middleware
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email required'),

  async (req, res) => {
    // Check validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      })
    }

    try {
      const speaker = await prisma.speaker.create({
        data: req.body
      })

      res.status(201).json({
        success: true,
        data: speaker,
        message: 'Speaker created successfully'
      })
    } catch (error) {
      console.error('Error creating speaker:', error)
      res.status(500).json({
        success: false,
        message: 'Failed to create speaker'
      })
    }
  }
)

module.exports = router
```

## Database Operations (Prisma)

### Schema Definition
```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Speaker {
  id          String   @id @default(cuid())
  name        String
  email       String   @unique
  bio         String?
  photo       String?
  linkedin    String?
  twitter     String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  scheduleItems Schedule[]
}

model Schedule {
  id          String   @id @default(cuid())
  time        String   // HH:MM format
  topic       String
  speakerId   String
  eventId     String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  speaker     Speaker   @relation(fields: [speakerId], references: [id])
  event       Event     @relation(fields: [eventId], references: [id])
}
```

### Prisma Client Usage
```javascript
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Create
const speaker = await prisma.speaker.create({
  data: {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'AI Expert'
  }
})

// Read with relations
const scheduleWithSpeaker = await prisma.schedule.findMany({
  include: {
    speaker: true,
    event: true
  }
})

// Update
const updatedSpeaker = await prisma.speaker.update({
  where: { id: speakerId },
  data: { bio: 'Updated bio' }
})

// Delete
await prisma.speaker.delete({
  where: { id: speakerId }
})
```

## Authentication & Authorization

### JWT Implementation
```javascript
// middleware/auth.middleware.js
const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1] // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access token required'
    })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: 'Invalid or expired token'
      })
    }

    req.user = user
    next()
  })
}

module.exports = { authenticateToken }
```

### Password Hashing
```javascript
const bcrypt = require('bcryptjs')

// Hash password
const saltRounds = 12
const hashedPassword = await bcrypt.hash(password, saltRounds)

// Verify password
const isValid = await bcrypt.compare(password, hashedPassword)
```

## Validation & Error Handling

### Input Validation
```javascript
const { body, param, query } = require('express-validator')

// Validation rules
const validateSpeaker = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be 2-100 characters'),

  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email required'),

  body('bio')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Bio must be less than 500 characters')
]

// In route
router.post('/speakers', validateSpeaker, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    })
  }

  // Proceed with valid data
})
```

### Error Handling
```javascript
// utils/errorHandler.js
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

// Async error wrapper
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

// Usage
const getSpeakers = asyncHandler(async (req, res) => {
  const speakers = await prisma.speaker.findMany()
  res.json({ success: true, data: speakers })
})
```

## API Response Format

### Consistent Response Structure
```javascript
// Success response
res.json({
  success: true,
  data: { /* payload */ },
  message: 'Optional success message'
})

// Error response
res.status(400).json({
  success: false,
  message: 'Error message',
  errors: [ /* validation errors */ ]
})

// Paginated response
res.json({
  success: true,
  data: items,
  pagination: {
    page: 1,
    limit: 10,
    total: 50,
    pages: 5
  }
})
```

## Environment Configuration

### .env File
```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/event_landing?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# Server
PORT=3001
NODE_ENV="development"

# CORS
FRONTEND_URL="http://localhost:3000"
```

### Environment Variables Usage
```javascript
// config/index.js
require('dotenv').config()

module.exports = {
  database: {
    url: process.env.DATABASE_URL
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
  },
  server: {
    port: process.env.PORT || 3001,
    nodeEnv: process.env.NODE_ENV || 'development'
  },
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
  }
}
```

## Database Migrations

### Migration Workflow
```bash
# After schema changes
cd apps/backend

# Create migration
npx prisma migrate dev --name add_speaker_bio

# Generate client
npx prisma generate

# Deploy to production
npx prisma migrate deploy
```

### Seeding Data
```javascript
// prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Create admin user
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: await bcrypt.hash('password', 12),
      name: 'Admin User',
      role: 'admin'
    }
  })

  // Create sample speakers
  await prisma.speaker.createMany({
    data: [
      { name: 'John Smith', email: 'john@example.com' },
      { name: 'Sarah Johnson', email: 'sarah@example.com' }
    ]
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.disconnect()
  })
```

## Testing

### API Testing with Supertest
```javascript
// __tests__/speakers.test.js
const request = require('supertest')
const app = require('../src/server')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

describe('Speakers API', () => {
  beforeEach(async () => {
    await prisma.speaker.deleteMany()
  })

  afterAll(async () => {
    await prisma.$disconnect()
  })

  it('should get all speakers', async () => {
    const response = await request(app)
      .get('/api/speakers')
      .expect(200)

    expect(response.body.success).toBe(true)
    expect(Array.isArray(response.body.data)).toBe(true)
  })

  it('should create a speaker', async () => {
    const speakerData = {
      name: 'Test Speaker',
      email: 'test@example.com'
    }

    const response = await request(app)
      .post('/api/speakers')
      .send(speakerData)
      .expect(201)

    expect(response.body.success).toBe(true)
    expect(response.body.data.name).toBe(speakerData.name)
  })
})
```

## Performance & Security

### Database Optimization
```javascript
// Use select to limit fields
const speakers = await prisma.speaker.findMany({
  select: {
    id: true,
    name: true,
    email: true
    // Exclude bio, photo, etc.
  }
})

// Use pagination
const speakers = await prisma.speaker.findMany({
  skip: (page - 1) * limit,
  take: limit,
  orderBy: { name: 'asc' }
})
```

### Security Best Practices
```javascript
// Rate limiting
const rateLimit = require('express-rate-limit')
app.use('/api/', rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}))

// Input sanitization
const sanitizeHtml = require('sanitize-html')
const cleanInput = sanitizeHtml(req.body.description)

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
```

## Development Workflow

### Adding New API Endpoints
1. Define route in appropriate `routes/*.js` file
2. Add validation middleware
3. Implement controller logic with error handling
4. Update Prisma schema if needed
5. Run migrations and regenerate client
6. Add tests for the new endpoint
7. Update API documentation

### Database Schema Changes
1. Edit `prisma/schema.prisma`
2. Create migration: `npm run migrate`
3. Regenerate client: `npm run prisma:generate`
4. Update TypeScript types if applicable
5. Test with Prisma Studio: `npx prisma studio`

### Code Quality
- Use ESLint for code linting
- Follow consistent error handling patterns
- Add JSDoc comments for complex functions
- Write unit tests for business logic
- Use environment variables for configuration