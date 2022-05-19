const tasks = require('../models/task');

const getAllTask = (req, res) => {
    res.send('all items from database');
};
const getTask = (req, res) => {
    res.json({id : req.params.id});
};
const createTask = async (req, res) => {
    try {
        const task = await tasks.create(req.body);
        // lưu ý. Khi trả giá trị json về thì nên để lưu trong {object} để nó hiểu là cái mình trả ra 1 mang object. 
        // Nếu không nó sẽ trả về 1 object
        res.status(201).json({task});
    } catch (error) {
        res.sendStatus(500);
    }
};
const updateTask = async (req, res) => {
    try {
        const taskUpdate = await tasks.update(req.body);
        res.status(202).json({task});
    } catch (error) {
        res.sendStatus(500);
    }
};
const deleteTask = async (req, res) => {
    try {
        const task = await tasks.deleteOne(req.body);
        res.sendStatus(200).json({task});
    } catch (error) {
        res.sendStatus(500);
    }
};

module.exports = { getAllTask, getTask, createTask, updateTask, deleteTask };