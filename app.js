const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const logger = require('./utils/logger');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => logger.info(`Connected to ${config.db}`))
    .catch(err => logger.error(`Could not connect to MongoDB. ERROR: ${err}`));

// Routes
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});
