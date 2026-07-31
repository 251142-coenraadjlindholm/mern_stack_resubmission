const mongoose = require('mongoose');

// Define the Task schema
const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true, enum: ['Low', 'Medium', 'High'] }
});

// Create and export the Task model
module.exports = mongoose.model('Task', taskSchema);
