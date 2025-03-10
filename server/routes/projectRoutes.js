//routes/index.js
import express from 'express';
import {
    getProjects, getProjectById, createProject,
    updateProject, deleteProject, addTask, updateTask, deleteTask
} from '../controllers/projectController.js';

const router = express.Router();

// Project Routes
router.get('/projects', getProjects);
router.get('/project/:id', getProjectById);
router.post('/project', createProject);
router.put('/project/:id', updateProject);
router.delete('/project/:id', deleteProject);

// Task Routes
router.post('/project/:id/task', addTask);
router.put('/project/:id/task/:taskId', updateTask);
router.delete('/project/:id/task/:taskId', deleteTask);

export default router;
