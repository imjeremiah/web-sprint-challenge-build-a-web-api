// add middlewares here related to actions
const Action = require('../actions/actions-model');

function validateActionId(req, res, next) {
    const { id } = req.params;
    Action.get(id)
        .then(possibleAction => {
            possibleAction ? (req.action = possibleAction, next()) : res.status(404).json({ message: "action not found" });
        })
        .catch(next);
}

function validateAction(req, res, next) {
    (req.body.project_id && req.body.notes && req.body.description) ? next() : res.status(400).json({ message: "project_id, name, and description are required fields" });
}

module.exports = { validateActionId, validateAction }