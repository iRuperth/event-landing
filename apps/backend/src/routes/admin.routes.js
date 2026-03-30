import express from 'express'

const router = express.Router()

// Admin routes
router.get('/attendees', (req, res) => res.json({ message: 'Get all attendees - to be implemented' }))
router.get('/reports', (req, res) => res.json({ message: 'Get event reports - to be implemented' }))
router.get('/tickets', (req, res) => res.json({ message: 'Get ticket management - to be implemented' }))

export default router
