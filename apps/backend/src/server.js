import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import authRoutes from './routes/auth.routes.js'
import eventRoutes from './routes/event.routes.js'
import scheduleRoutes from './routes/schedule.routes.js'
import speakerRoutes from './routes/speaker.routes.js'
import attendeeRoutes from './routes/attendee.routes.js'
import ticketRoutes from './routes/ticket.routes.js'
import galleryRoutes from './routes/gallery.routes.js'
import adminRoutes from './routes/admin.routes.js'

// Load environment variables
dotenv.config()

// Initialize Prisma Client
export const prisma = new PrismaClient()

// Initialize Express app
const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running ✅' })
})

// API routes
app.get('/api', (req, res) => {
  res.json({ message: 'Event Landing API v1.0' })
})

app.use('/api/auth', authRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/schedule', scheduleRoutes)
app.use('/api/speakers', speakerRoutes)
app.use('/api/attendees', attendeeRoutes)
app.use('/api/tickets', ticketRoutes)
app.use('/api/gallery', galleryRoutes)
app.use('/api/admin', adminRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`)
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`)
})

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down server...')
  await prisma.$disconnect()
  process.exit(0)
})
