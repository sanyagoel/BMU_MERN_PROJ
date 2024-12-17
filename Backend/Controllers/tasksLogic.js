const Task = require("../Models/tasks");

const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const newTask = new Task({
      title,
      description,
      isCompleted: false,
      createdAt: Date.now(),
      updatedAt : Date.now()
    });

    const result = await newTask.save();
    if (!result) {
      res.send("Something went wrong...");
    } else {
      res.send("Task saved succesfully");
    }
  } catch (err) {
    console.log(err);
  }
};

const viewTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (err) {
    console.log(err);
  }
};

const updateTasks = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (title && description) {
      const result = await Task.findOneAndUpdate({_id : req.params.id},{
        title: title,
        description: description,
        updatedAt : Date.now()
      });
      if (result) {
        res.send("updated succesfully");
      } else {
        res.send("something went wrong");
      }
    } else {
        res.send("Enter the task and description properly :/ ");
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteTasks = async (req, res, next) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findByIdAndDelete({ _id: taskID });
    if (task) {
        res.send("Task deleted succesfully :)");
    } else {
        res.send("Something went wrong...");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createTask , viewTasks, updateTasks, deleteTasks};
