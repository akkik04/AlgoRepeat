import Task from '../models/tasks.js';

// create a new task
export const createTask = async (req, res) => {
  try {
    const { title, status } = req.body;
    const user = req.user._id;

    // create the task and save it to the database
    const task = new Task({
      title,
      status,
      user,
    });
    await task.save();
    return res.status(200).json({ message: 'Task created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Error occurred. Please try again' });
  }
};

// get all tasks.
export const getTasks = async (req, res) => {
  try {
    const user = req.user._id;
    const tasks = await Task.find({ user }).exec();

    const formattedTasks = tasks.map(task => ({
      title: task.title,
      createdAt: task.createdAt,
      scheduledPracticeDates: task.scheduledPracticeDates,
    }));

    return res.status(200).json({ tasks: formattedTasks });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Error occurred. Please try again' });
  }
};



// update a task by name
export const updateTask = async (req, res) => {
  try {
    const taskName = req.query.taskName;
    const { title, status, isArchived } = req.body;
    const user = req.user._id;

    console.log('Task Name:', taskName);
    console.log('User:', user);

    // Find the task by name and user
    const existingTask = await Task.findOne({ title: taskName, user });

    if (!existingTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update only the provided fields
    if (title) existingTask.title = title;
    if (status) existingTask.status = status;
    if (isArchived !== undefined) existingTask.isArchived = isArchived;

    // Save the updated task
    const updatedTask = await existingTask.save();

    return res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Error occurred. Please try again' });
  }
};


// delete a task
export const deleteTask = async (req, res) => {
  try {

    const taskName = req.query.taskName;
    const user = req.user._id;

    // find the task and remove it from the database
    const task = await Task.findOneAndRemove({ title: taskName, user });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Error occurred. Please try again' });
  }
};
