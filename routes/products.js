const express = require('express');
const router = express.Router();
const { uploadProduct, getAllProducts, getUserProducts } = require('../controllers/products');

router.post('/upload', uploadProduct);
router.get('/', getAllProducts);
router.get('/user/:userId', getUserProducts);

module.exports = router;