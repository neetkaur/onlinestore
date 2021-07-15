const express = require('express');
const router = express.Router();
const viewController = require('./viewController');
const dataController = require('./dataController');

// Index
router.get('/', dataController.index, viewController.index)
//New
router.get('/new', viewController.new)
//Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome)
//Update
router.put('/:id', dataController.update, viewController.redirectShow)
//Create
router.post('/', dataController.create, viewController.redirectHome)
//Edit
router.get('/:id/edit', dataController.show, viewController.edit)
//Show
router.get('/:id', dataController.show, viewController.show)
//buy_update
router.put('/buy/:id', dataController.buy_update, viewController.show)
//showcart
router.get('/cart', dataController.showcart, viewController.showcart)

module.exports = router
