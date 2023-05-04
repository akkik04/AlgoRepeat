import express from 'express';
import { register, login, logout, currentUser } from '../controllers/auth.js';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/tasks.js';
import { createLabel, getAllLabels, deleteLabelById, showLabelById, updateLabelById } from '../controllers/labels.js';
import authenticateUser from '../middlewares/auth.js';

const router = express.Router();

// define routes for user-auth.
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

// define routes for tasks.
router.post('/tasks', authenticateUser, createTask);
router.get('/tasks', authenticateUser, getTasks);
router.put('/tasks/:id', authenticateUser, updateTask);
router.delete('/tasks/:id', authenticateUser, deleteTask);

// define routes for labels of a task.
router.post('/labels', authenticateUser, createLabel);
router.get('/labels', authenticateUser, getAllLabels);
router.get('/labels/:id', authenticateUser, showLabelById);
router.put('/labels/:id', authenticateUser, updateLabelById)
router.delete('/labels/:id', authenticateUser, deleteLabelById);

export default router;