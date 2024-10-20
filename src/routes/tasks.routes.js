const { Router } = require('express');
const {getAllTaks, getTask, createTask, deleteTask, updateTask} = require('../controllers/tasks.controller')

const router = Router();

router.get('/tasks', getAllTaks)

router.get('/tasks/10', getTask)

router.post('/tasks', createTask)

router.delete('/tasks', deleteTask)

router.put('/tasks', updateTask)


module.exports = router