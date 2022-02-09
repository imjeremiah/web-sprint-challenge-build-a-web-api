// add middlewares here related to projects
const Project = require('../projects/projects-model');

function validateProjectId(req, res, next) {
    const { id } = req.params;
    Project.get(id)
        .then(possibleProject => {
            possibleProject ? (req.project = possibleProject, next()) : res.status(404).json({ message: "project not found" });
        })
        .catch(next);
}

function validatePoject(req, res, next) {
    (req.body.name && req.body.description) ? next() : res.status(400).json({ message: "name and description are required fields" });
}

module.exports = { validateProjectId, validatePoject }