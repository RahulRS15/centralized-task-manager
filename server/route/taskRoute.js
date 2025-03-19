const express = require("express");
const task = require("../model/task");
const router = express.Router();

const taskController = require('../controller/taskController');  


// Create a task
router.post("/",taskController.createTask)
// Get all tasks
router.get("/",taskController.getTasks)

// Update a task
router.put("/:id",taskController.updateTask)

// Delete a task
router.delete("/:id",taskController.deleteTask)
module.exports = router;
