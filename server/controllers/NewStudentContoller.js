const Student = require('../models/Student')

module.exports = {
  createStudent(req, res) {
    const { body } = req
    const {
      id,
      firstName,
      lastName,
      age,
      nationality,
    } = body

    const newStudent = new Student(body)
    newStudent.save((err, student) => {
      if (err) {
        return res.send({ success: false, message: 'Error:Server error' })
      }
      if (!student) {
        return res.send({ success: false, message: 'Student can not be saved ' })
      }
      const studentJson = student.toJSON()
      return res.send({
        studentJson,
        success: true,
        message: 'Student is added!',
      })
    })
  },
}
