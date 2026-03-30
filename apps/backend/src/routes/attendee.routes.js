import express from 'express'

const router = express.Router()

// Attendee routes
router.post('/', (req, res) => res.json({ message: 'Register attendee - to be implemented' }))
router.get('/:email', (req, res) => res.json({ message: 'Get attendee - to be implemented' }))
router.put('/:email', (req, res) => res.json({ message: 'Update attendee - to be implemented' }))
router.delete('/:email', (req, res) => res.json({ message: 'Delete attendee - to be implemented' }))

export default router
