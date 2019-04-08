const Student = require('../models/Student')

module.exports = {
  getData(req, res) {
    Student.find((err, data) => {
      if (err) return res.json({ success: false, error: err })
      return res.json({ data })
    })
  },
}
