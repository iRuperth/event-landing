import express from 'express'

const router = express.Router()

// Gallery routes
router.get('/', (req, res) => res.json({ message: 'Get gallery - to be implemented' }))
router.get('/:id', (req, res) => res.json({ message: 'Get gallery item - to be implemented' }))
router.post('/', (req, res) => res.json({ message: 'Upload to gallery - to be implemented' }))
router.delete('/:id', (req, res) => res.json({ message: 'Delete from gallery - to be implemented' }))

export default router
