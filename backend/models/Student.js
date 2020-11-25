const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Student = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   course: {
      type: String
   },
   phoneNumber: {
      type: Number
   },
  
}, {
   collection: 'studentdata'
})

module.exports = mongoose.model('Student', Student)