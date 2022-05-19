const express = require('express');
const router = express.Router();
const {
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require('../controller/tasks');

router.route('/').get(getAllTask).post(createTask);
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask);


module.exports = router;