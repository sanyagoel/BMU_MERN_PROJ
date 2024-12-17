const express = require('express');
const {createTask , viewTasks, updateTasks, deleteTasks} = require('../Controllers/tasksLogic');

const router = express.Router();

router.post('/',createTask);

router.get('/',viewTasks);

router.put('/:id',updateTasks);

router.delete('/:id',deleteTasks);

module.exports = {router};

