import Task from '../models/tasks.js';

// create a new task
export const createTask = async (req, res) => {
  try {
    const { title, status, labels } = req.body;
    const user = req.user._id;

    // create the task and save it to the database
    const task = new Task({
      title,
      status,
      labels,
      user,
    });
    await task.save();
    return res.status(200).json({ message: 'Task created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Error occurred. Please try again' });
  }
};

// get all tasks
export const getTasks = async (req, res) => {
  try {
    const user = req.user._id;
    const tasks = await Task.find({ user }).populate('labels').exec();
    return res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Error occurred. Please try again' });
  }
};

// update a task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, status, isArchived, labels } = req.body;
    const user = req.user._id;

    // find the task and update its properties
    const task = await Task.findOneAndUpdate(
      { _id: id, user },
      { title, status, isArchived, labels },
      { new: true }
    ).exec();

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    return res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Error occurred. Please try again' });
  }
};

// delete a task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user._id;

    // find the task and remove it from the database
    const task = await Task.findOneAndRemove({ _id: id, user }).exec();

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Error occurred. Please try again' });
  }
};
