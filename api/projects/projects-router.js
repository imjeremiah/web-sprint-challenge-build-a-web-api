// Write your "projects" router here!
const express = require('express');

const Project = require('./projects-model');

const { validatePoject, validateProjectId } = require('./projects-middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.get()
        .then(projects => res.json(projects))
        .catch(next)
});

router.get('/:id', validateProjectId, (req, res) => {
    res.json(req.project);
});

router.post('/', validatePoject, (req, res, next) => {
    Project.insert(req.body)
        .then(project => res.json(project))
        .catch(next)
});

router.put('/:id', validateProjectId, validatePoject, (req, res, next) => {
    Project.update(req.params.id, req.body)
        .then(project => res.json(project))
        .catch(next)
});

router.delete('/:id', validateProjectId, (req, res, next) => {
    Project.remove(req.params.id)
        .then(() => res.json(req.project))
        .catch(next)
});

router.get('/:id/actions', validateProjectId, (req, res, next) => {
    Project.getProjectActions(req.params.id)
        .then(actions => res.json(actions))
        .catch(next)
});

module.exports = router;