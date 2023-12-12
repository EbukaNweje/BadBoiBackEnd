const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  withdrawalWallet: {
    type: String,
    required: true,
  },
  yourusername: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  bankName: {
    type: String,
    required: true,
  },
  
  amounttoWithdraw: {
    type: String,
    required: true,
  },
  appealHeader: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
}, {timestamps: true});

module.exports = Account = mongoose.model('Account', AccountSchema )

