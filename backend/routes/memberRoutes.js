const express = require('express');
const router = express.Router();


const { getMember, createMember, update, remove, list  } = require('../controllers/memberController');


const { protect, admin } = require('../middleware/authMiddleware.js')



router.get('/member-detail/:id', protect, admin, getMember);


router.put('/member-update/:id', protect, admin, update);

router.delete('/member-remove/:id', protect, admin,  remove);

router.get('/member-list', protect, admin, list);


router.post("/member-create", protect, admin, createMember)





module.exports = router;