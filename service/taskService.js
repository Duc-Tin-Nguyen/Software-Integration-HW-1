const Task = require('../models/task');
const logger = require('../utils/logger');

const createTask = async (title) => {
    try {
        const newTask = new Task({
            title: title
        });
        const task = await newTask.save();
        logger.info('Task created successfully');
        return task;
    } catch (err) {
        logger.error(`Error creating task: ${err.message}`);
        throw err;
    }
};

const getAllTasks = async () => {
    try {
        const tasks = await Task.find();
        logger.info('Retrieved all tasks');
        return tasks;
    } catch (err) {
        logger.error(`Error retrieving tasks: ${err.message}`);
        throw err;
    }
};

const getTaskById = async (id) => {
    try {
        const task = await Task.findById(id);
        if (!task) {
            throw new Error('Task not found');
        }
        logger.info(`Retrieved task with ID: ${id}`);
        return task;
    } catch (err) {
        logger.error(`Error retrieving task with ID ${id}: ${err.message}`);
        throw err;
    }
};

const updateTask = async (id, updatedTask) => {
    try {
        const task = await Task.findByIdAndUpdate(id, updatedTask, { new: true });
        if (!task) {
            throw new Error('Task not found');
        }
        logger.info(`Updated task with ID: ${id}`);
        return task;
    } catch (err) {
        logger.error(`Error updating task with ID ${id}: ${err.message}`);
        throw err;
    }
};

const deleteTask = async (id) => {
    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            throw new Error('Task not found');
        }
        logger.info(`Deleted task with ID: ${id}`);
    } catch (err) {
        logger.error(`Error deleting task with ID ${id}: ${err.message}`);
        throw err;
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};
