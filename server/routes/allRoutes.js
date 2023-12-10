import express from 'express';
import { register, login, logout, currentUser } from '../controllers/auth.js';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/tasks.js';
import authenticateUser from '../middlewares/auth.js';

const router = express.Router();

// define routes for user-auth.
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

// define routes for tasks.
router.post('/makeTask', authenticateUser, createTask);
router.get('/allTasks', authenticateUser, getTasks);
router.put('/editTask', authenticateUser, updateTask);
router.delete('/deleteTask', authenticateUser, deleteTask);

export default router;