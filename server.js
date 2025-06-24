const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Replace the string below with your actual MongoDB connection string
mongoose.connect('mongodb://localhost:27017/taskboard')

  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  startDate: String,
  dueDate: String,
  status: { type: String, default: 'pending' }
});

const Task = mongoose.model('Task', TaskSchema);

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

//deleting
app.delete('/tasks/:id', async (req, res) => {
  const result = await Task.findByIdAndDelete(req.params.id);
  res.json(result);
});

//updating 
app.put('/tasks/:id', async (req, res) => {
  const { title, description, status } = req.body;
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    { title, description, status },
    { new: true }
  );
  res.json(updatedTask);
});



