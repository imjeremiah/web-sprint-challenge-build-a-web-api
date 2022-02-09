// Configure your server here
const express = require('express');

// Build your actions router in /api/actions/actions-router.js

// Build your projects router in /api/projects/projects-router.js
const projectsRouter = require('./projects/projects-router');
const actionsRouter = require('./actions/actions-router');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

// Do NOT `server.listen()` inside this file!
server.get('/', (req, res) => {
    res.send(`<h2>Let's do the Sprint Challenge!</h2>`);
  });

module.exports = server;
