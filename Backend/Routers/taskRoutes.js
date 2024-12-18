const express = require('express');
const {createTask , viewTasks, updateTasks, deleteTasks, completeTask, getCompletedTasks, getIncompleteTasks} = require('../Controllers/tasksLogic');

const router = express.Router();

router.post('/',createTask);

router.get('/',viewTasks);

router.put('/:id',updateTasks);

router.delete('/:id',deleteTasks);

router.put('/complete/:id',completeTask);

router.get('/filter/completed',getCompletedTasks);

router.get('/filter/incomplete',getIncompleteTasks);


module.exports = {router};

