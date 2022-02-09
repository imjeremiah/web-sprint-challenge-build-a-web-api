// Write your "actions" router here!
const express = require('express');

const Action = require('./actions-model');

const { validateActionId, validateAction } = require('./actions-middlware');

const router = express.Router();

router.get('/', (req, res, next) => {
    Action.get()
        .then(actions => res.json(actions))
        .catch(next)
});

router.get('/:id', validateActionId, (req, res) => {
    res.json(req.action);
});

router.post('/', validateAction, (req, res, next) => {
    Action.insert(req.body)
        .then(action => res.json(action))
        .catcn(next)
});

router.put('/:id', validateActionId, validateAction, (req, res, next) => {
    Action.update(req.params.id, req.body)
        .then(action => res.json(action))
        .catch(next)
});

router.delete('/:id', validateActionId, (req, res, next) => {
    Action.remove(req.params.id)
        .then(() => res.json(req.action))
        .catch(next)
});

module.exports = router;