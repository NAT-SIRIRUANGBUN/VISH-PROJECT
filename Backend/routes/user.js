const express = require('express');
const { register, login, update, getMe, logout } = require('../controllers/users');

const router = express.Router();

const { protect } = require('../middleware/user');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/logout', protect, logout);
router.put('/edit/:id', protect, update);

module.exports = router;