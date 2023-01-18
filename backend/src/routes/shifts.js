const express = require('express')
const Shift = require('../models/shift')

const router = express.Router()

/* GET shifts listing. */
router.get('/', async (req, res) => {
  console.log('asdasadgsdgsdgdsgsdg')
  res.send(await Shift.find({}).catch(error => console.log('Shifts not found, error: ', error)))
})

// /* GET initialize */
// router.get('/initialize', async (req, res) => {
//   const data = []
//   const one = await Shift.create({ shiftno: 1, day: '15/11/2022', period: 'Day' })
//   data.push(one)
//   const two = await Shift.create({ shiftno: 2, day: '15/11/2022', period: 'Night' })
//   data.push(two)
//   const four = await Shift.create({ shiftno: 4, day: '17/11/2022', period: 'Night' })
//   data.push(four)
//   res.send(two)
// })
router.delete('/deleteall', async (req, res) => {
  await Shift.deleteMany()
  res.sendStatus(200)
})

router.delete('/delete/:id', async (req, res) => {
  await Shift.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

/* POST user */
router.post('/', async (req, res) => {
  const { shiftno, day, period } = req.body
  const shift = await Shift.create({ shiftno, day, period })
  res.send(shift)
})

module.exports = router
