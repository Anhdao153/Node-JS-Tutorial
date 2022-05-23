const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'đéo được để trống'],
        trim: true,
        maxlength: [20,'không được lớn hơn 20 ký tự'],
        unique: true,
        notNull: true,
    },
    completed: {
        type: Boolean,
       default: false,
    },
});

module.exports = mongoose.model('tasks', TaskSchema);