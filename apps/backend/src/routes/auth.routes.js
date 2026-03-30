import express from 'express'
import * as authController from '../controllers/auth.controller.js'

const router = express.Router()

// Auth routes - to be implemented
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.post('/register', authController.register)

export default router
