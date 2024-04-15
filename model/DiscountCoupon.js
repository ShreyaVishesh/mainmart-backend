const mongoose = require('mongoose');
const { Schema } = mongoose;

const discountCouponSchema = new Schema({
      code: { type: String, required: true },
      discount: { type: Number, required: true },
      active: { type: Boolean, default: true }
}, { timestamps: true });

const DiscountCoupon = mongoose.model('DiscountCoupon', discountCouponSchema);

module.exports = { DiscountCoupon }; // Ensure it's exported correctly like this
