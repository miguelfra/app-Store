const express = require('express');
const storeController = require('../controllers/storeController');
const route = express.Router();

route.get('/', storeController.getArticle);
route.get('/:id', storeController.getArticleID);
route.post('/', storeController.newArctile);
route.put('/:id', storeController.updateArticle);
route.delete('/:id', storeController.deletArticle);


module.exports = route;