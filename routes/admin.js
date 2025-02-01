const express = require('express');
const router = express.Router();
const { getAllUsers, deleteUser } = require('../controllers/admin');

router.get('/users', getAllUsers);
router.delete('/users/:userId', deleteUser);

module.exports = router;