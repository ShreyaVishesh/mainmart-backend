const { DiscountCoupon } = require('../model/DiscountCoupon.js');

exports.addCoupon = async (req, res) => {
      try {
            const { coupon, discountPercentage } = req.body;
            const discountCoupon = new DiscountCoupon({
                  code: coupon,
                  discount: discountPercentage,
                  active: true
            });
            console.log(discountCoupon);

            const doc = await discountCoupon.save();

            res.status(201).json(doc);
      } catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
      }
};

exports.deactivateCoupon = async (req, res) => {
      const { couponId } = req.params;
      try {
            console.log(couponId);

            const doc = await DiscountCoupon.findByIdAndUpdate(
                  couponId,
                  { active: false },
                  { new: true }
            );
            res.status(200).json(doc);
      } catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
      }
};

exports.activateCoupon = async (req, res) => {
      const { couponId } = req.params;
      try {
            const doc = await DiscountCoupon.findByIdAndUpdate(
                  couponId,
                  { active: true },
                  { new: true }
            );
            res.status(200).json(doc);
      }
      catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
      }
};

exports.fetchAllCoupons = async (req, res) => {
      try {
            const doc = await DiscountCoupon.find();
            res.status(200).json(doc);
      }
      catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
      }
};

exports.deleteCoupon = async (req, res) => {
      const { couponId } = req.params;
      try {
            const doc = await DiscountCoupon.findByIdAndDelete(couponId);
            res.status(200).json(doc);
      }
      catch (err) {
            console.error(err);
            res.status(400).json({ error: err.message });
      }
};