import express from 'express'

const router = express.Router()

// Speaker routes
router.get('/', (req, res) => res.json({ message: 'Get all speakers - to be implemented' }))
router.get('/:id', (req, res) => res.json({ message: 'Get speaker - to be implemented' }))
router.post('/', (req, res) => res.json({ message: 'Create speaker - to be implemented' }))
router.put('/:id', (req, res) => res.json({ message: 'Update speaker - to be implemented' }))
router.delete('/:id', (req, res) => res.json({ message: 'Delete speaker - to be implemented' }))

export default router
