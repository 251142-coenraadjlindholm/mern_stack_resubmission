const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true, enum: ['Low', 'Medium', 'High'] }
});

module.exports = mongoose.model('Task', taskSchema);
