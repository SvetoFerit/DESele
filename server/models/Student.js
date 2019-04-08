const mongoose = require('mongoose')


const StudentSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  nationality: {
    type: String,
  },
})

const Student = mongoose.model('students', StudentSchema)
module.exports = Student
