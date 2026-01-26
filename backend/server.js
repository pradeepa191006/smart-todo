const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 5500;

app.use(cors());
app.use(express.json());


// temporary storage
let tasks = [];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ADD a task
app.post("/tasks", (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.json({ message: "Task added successfully" });
});

// START server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});