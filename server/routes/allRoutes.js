import express from 'express';
import { register, login, logout, currentUser } from '../controllers/auth.js';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/tasks.js';
import authenticateUser from '../middlewares/auth.js';

const router = express.Router();

// define routes for auth.
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

// define routes for tasks.
router.post('/tasks', authenticateUser, createTask);
router.get('/tasks', authenticateUser, getTasks);
router.put('/tasks/:id', authenticateUser, updateTask);
router.delete('/tasks/:id', authenticateUser, deleteTask);

export default router;