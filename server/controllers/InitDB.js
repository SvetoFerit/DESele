const defaultStudents = require('../controllers/DefaultStudents')
const Student = require('../models/Student')


module.exports = {
  init(req, res) {
    Student.collection.insert(defaultStudents, (err) => {
      if (err) {
        return res.send({ success: false, message: 'Server Error' })
      }
      return res.send({ success: true, message: 'SUCCESS' })
    })
  },
}
