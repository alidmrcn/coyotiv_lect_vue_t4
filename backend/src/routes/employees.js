const express = require('express')
const Employee = require('../models/employee')

const router = express.Router()

/* GET employees listing. */
router.get('/', async (req, res) => {
  res.send(await Employee.find({}).catch(error => console.log('Employees not found, error: ', error)))
})

/* GET initialize */
router.get('/initialize', async (req, res) => {
  // const one = await Shift.create({ shiftno: 1, day: '15/11/2022', period: 'Day' }) // ! Add new
  // const Two = await Shift.create({ shiftno: 2, day: '15/11/2022', period: 'Night' })
  // const Four = await Shift.create({ shiftno: 4, day: '17/11/2022', period: 'Night' })
  // res.send(one)
})

/* POST user */
router.post('/', async (req, res) => {
  const { name, personelNo, nationality, jobTitle } = req.body
  const employee = await Employee.create({ name, personelNo, nationality, jobTitle })
  res.send(employee)
})

module.exports = router
