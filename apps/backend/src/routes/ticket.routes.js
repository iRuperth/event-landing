import express from 'express'

const router = express.Router()

// Ticket routes
router.get('/:id', (req, res) => res.json({ message: 'Get ticket - to be implemented' }))
router.post('/', (req, res) => res.json({ message: 'Generate ticket - to be implemented' }))
router.put('/:id', (req, res) => res.json({ message: 'Validate/scan ticket - to be implemented' }))

export default router
