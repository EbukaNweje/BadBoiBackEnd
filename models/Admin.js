const mongoose = require('mongoose');

const AdmiSchema = new mongoose.Schema({
  showPass: {
    type: String,
  },
  
}, {timestamps: true});

module.exports = AdmiSchema = mongoose.model('AdmiSchema', AdmiSchema )

