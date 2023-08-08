const express = require('express');
const router = express.Router();


const {  addLoan, list, getLoanDetail } = require('../controllers/loanController');


const { protect, admin } = require('../middleware/authMiddleware.js')



 router.get('/loan-detail/:id', protect, admin, getLoanDetail);
//
//
// router.put('/store-update/:id', protect, admin, update);
//
// router.delete('/store-remove/:id', protect, admin,  remove);
//
router.get('/loan-list', protect, admin, list);


router.post("/loan-create", protect, admin, addLoan)





module.exports = router;