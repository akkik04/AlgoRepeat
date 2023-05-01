import express from 'express';
import { register, login, logout, currentUser } from '../controllers/auth.js';

const router = express.Router();

// define routes.
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

export default router;