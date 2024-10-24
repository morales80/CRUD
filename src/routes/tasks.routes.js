const { Router } = require('express');
const {getAllTaks, getTask, createTask, deleteTask, updateTask} = require('../controllers/tasks.controller')

const router = Router();

router.get('/tasks', getAllTaks)

router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', updateTask)


module.exports = router