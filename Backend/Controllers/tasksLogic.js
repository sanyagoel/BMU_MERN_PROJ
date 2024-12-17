const Task = require("../Models/tasks");

const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const newTask = {
      title,
      description,
      isCompleted: false,
      createdAt: Date.now(),
    };

    const result = await newTask.save();
    if (!result) {
      console.log("Something went wrong...");
    } else {
      console.log("Task saved succesfully");
    }
  } catch (err) {
    console.log(err);
  }
};

const viewTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    console.log(tasks);
  } catch (err) {
    console.log(err);
  }
};

const updateTasks = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (title && description) {
      const result = await Task.findOneAndUpdate({
        title: title,
        description: description,
      });
      if (result) {
        console.log("updated succesfully");
      } else {
        console.log("something went wrong");
      }
    } else {
      console.log("Enter the task and description properly :/ ");
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteTasks = async (req, res, next) => {
  try {
    const { taskID } = req.body;
    const task = await Task.findByIdAndDelete({ _id: taskID });
    if (task) {
      console.log("Task deleted succesfully :)");
    } else {
      console.log("Something went wrong...");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createTask };
