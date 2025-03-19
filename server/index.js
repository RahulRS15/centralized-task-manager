const express = require("express");
const { MONGO_URI, PORT, connectDB } = require('./config/config');
const mongoose = require("mongoose");
const bodyparser = require('body-parser');
const cors = require ("cors");
const dotenv = require("dotenv");
const Task = require ("./model/task.js"); // Import Task model
const taskRoute = require ("./route/taskRoute");

dotenv.config();

const app = express();
const port = PORT || 5000;
// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/task', taskRoute);

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
