import express from 'express'

const router = express.Router()

// Schedule routes
router.get('/', (req, res) => res.json({ message: 'Get schedule - to be implemented' }))
router.get('/:id', (req, res) => res.json({ message: 'Get schedule item - to be implemented' }))
router.post('/', (req, res) => res.json({ message: 'Create schedule - to be implemented' }))
router.put('/:id', (req, res) => res.json({ message: 'Update schedule - to be implemented' }))
router.delete('/:id', (req, res) => res.json({ message: 'Delete schedule - to be implemented' }))

export default router
