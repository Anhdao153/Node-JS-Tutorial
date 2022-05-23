const tasks = require('../models/task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-errors');
const getAllTask = asyncWrapper(async (req, res) => {

    const task = await tasks.find();
    // Lưu ý: Tránh sử dụng res.sendStatus().json({object: task})
    // Việc này xảy ra a1 lỗi, đó là gửi 1 response 2 lần trong 1 phương thức.
    // thằng node js này khi gửi tự gửi lại 1 phương thức như vậy nó sẽ hiểu là cái luồng thực thi này đã bị chiếm rồi
    // vì thằng node js nó chỉ có 1 luồng thực thi thôi, nên khi mày gửi 2 response trả về cùng 1 lúc thì nó sẽ bị crash app
    res.status(200).json({ task });
}
);
const getTask = asyncWrapper(async (req, res, next) => {

    const { id: taskId } = req.params;
    console.log(taskId);
    const task = await tasks.findOne({ _id: taskId });
    if (!task) {
        return next(createCustomError('Not found in database', 404));
    }
    res.status(200).json({ task });
});
const createTask = asyncWrapper(async (req, res) => {

    const task = await tasks.create(req.body);
    // lưu ý. Khi trả giá trị json về thì nên để lưu trong {object} để nó hiểu là cái mình trả ra 1 mang object. 
    // Nếu không nó sẽ trả về 1 object
    res.status(201).json({ task });

});


const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    console.log(taskID);
    const task = await tasks.findOneAndUpdate({ _id: taskID }, req.body);
    console.log(task);
    const TaskUpdated = await tasks.findOne({ _id: taskID });
    console.log(TaskUpdated);
    if (!task) {
        console.log('this task is not available');
        return next(createCustomError('Not found in database', 404));
        // return res.status(404).json({ msg: `Task not found ${taskID}` });
    }
   
    if (task === TaskUpdated) {
        res.status(400).json({ msg: `Lỗi xảy ra, không thể cập nhập tasks` });
    }
    // lưu ý, tên đối tuọng trả về là cái gì thì ở trên front-end nó bắt lại cũng phải y như thế. Đụ mẹ nó
    res.status(202).json({ TaskUpdated });

});

const deleteTask = asyncWrapper(async (req, res,next) => {
    const { id: taskId } = req.params;
    console.log({ _id: taskId });
    console.log(taskId);
    const task = await tasks.findOneAndDelete({ _id: taskId });
    console.log(task);
    if (!task) {
        return next(createCustomError('Not found in database', 404));
    }
    res.status(200).json({ task: null, msg: `success` });

});

module.exports = { getAllTask, getTask, createTask, updateTask, deleteTask };