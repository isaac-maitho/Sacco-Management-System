const express = require('express');
const router = express.Router();


const {  addSavings, list, getSavingsDetail } = require('../controllers/savingsController');


const { protect, admin } = require('../middleware/authMiddleware.js')



 router.get('/savings-detail/:id', protect, admin, getSavingsDetail);
//
//
// router.put('/store-update/:id', protect, admin, update);
//
// router.delete('/store-remove/:id', protect, admin,  remove);
//
router.get('/savings-list', protect, admin, list);


router.post("/savings-create", protect, admin, addSavings)





module.exports = router;