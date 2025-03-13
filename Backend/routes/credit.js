const express = require('express');
const router = express.Router();
const { deposit, withdraw, reward } = require('../controllers/Credit');
const auth = require('../middleware/auth');

router.post('/deposit', auth, deposit);
router.post('/withdraw', auth, withdraw);
router.post('/reward', auth, reward);
// router.post('/items/:item_id', auth, buyItems); // เปลี่ยน :id เป็น :item_id

module.exports = router;