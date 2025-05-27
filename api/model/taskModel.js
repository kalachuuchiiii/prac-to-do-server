const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String, 
    required: true, 
    trim: true,
    index: true
  }, 
  status: {
    type: String, 
    enum: ['Completed', 'Ongoing'],
    default: 'Ongoing',
    index: true 
  }, 
  pin: {
    type: Boolean, 
    default: false, 
    index: true
  }
}, {
  timestamps:true
})

module.exports = { Task: mongoose.model("Task", taskSchema) }