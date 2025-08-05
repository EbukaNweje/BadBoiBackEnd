const mongoose = require('mongoose');

const AdmiSchema = new mongoose.Schema({
  showPass: {
    type: String,
  },
  
}, {timestamps: true});

 const AdmiSchemas = mongoose.model('AdmiSchema', AdmiSchema )

 module.exports = AdmiSchemas

