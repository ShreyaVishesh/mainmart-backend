const express = require('express');
const { addCoupon, deactivateCoupon, activateCoupon, deleteCoupon, fetchAllCoupons } = require('../controller/DiscountCoupon.js');

const router = express.Router();

router.post('/add', addCoupon)
      .post('/deactivate/:couponId', deactivateCoupon)
      .post('/activate/:couponId', activateCoupon)
      .get('/', fetchAllCoupons)
      .delete('/delete/:couponId', deleteCoupon)

exports.router = router;