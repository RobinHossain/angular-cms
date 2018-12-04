const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
  int_id: {
    type: String
  },
  name: {
    type: String
  }
});


mongoose.model('Interest', interestSchema);
