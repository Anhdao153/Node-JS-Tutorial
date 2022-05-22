const tasks = require('../models/task');

const getAllTask = async (req, res) => {
    try {
        const task = await tasks.find();
        res.sendStatus(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message + `Lỗi xảy ra`});
    }
};
const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await tasks.findOne({ _id: taskId });
        if (!task) {
            return res.status(404).json({ msg: `Task not found ${taskId}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message + `Lỗi 500` });
    }
};
const createTask = async (req, res) => {
    try {
        const task = await tasks.create(req.body);
        // lưu ý. Khi trả giá trị json về thì nên để lưu trong {object} để nó hiểu là cái mình trả ra 1 mang object. 
        // Nếu không nó sẽ trả về 1 object
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message + `Lỗi xảy ra`});
    }
};
const updateTask = async (req, res) => {
    try {
        const {_id: taskID} = req.params;
        const taskUpdate = await tasks.findOneAndUpdate({_id: taskID},req.body);
        if (!taskUpdate) {
            return res.status(404).json({ msg: `Task not found ${taskID}` });
        }
        res.status(202).json({ taskUpdate });
    } catch (error) {
        res.status(500).json({ msg: error.message + `Lỗi xảy ra`});
    }
};
const deleteTask = async (req, res) => {
    try {
        const {_id: taskID} = req.params;
        const task = await tasks.deleteOne({_id: taskID});
        if (!task) {
            return res.status(404).json({ msg: `Task not found ${taskID}` });
        }
        res.sendStatus(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message + `Lỗi xảy ra`});
    }
};

module.exports = { getAllTask, getTask, createTask, updateTask, deleteTask };