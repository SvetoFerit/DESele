const express = require('express')

const students = express.Router()
const cors = require('cors')

const NewStudentContoller = require('../controllers/NewStudentContoller')
const InitDB = require('../controllers/InitDB')
const GetStudentData = require('../controllers/GetStudentData')

students.use(cors())

students.post('/new', NewStudentContoller.createStudent)
students.post('/init', InitDB.init)
students.get('/getData', GetStudentData.getData)

module.exports = students
