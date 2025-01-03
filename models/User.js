const mongoose = require(`mongoose`);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: [`customer`, `admin`],
    required: true,
    default: `customer`,
  },

  address: {
    type: String,
  },

  phoneNumber: {
    type: String,
  },

  orderHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: `Order`,
    },
  ],
});

module.exports = mongoose.model(`User`, userSchema)
