const express = require('express')
const Company = require('../models/company')

const router = express.Router()

/* GET companies listing. */
router.get('/', async (req, res) => {
  res.send(await Company.find({}).catch(error => console.log('Companies not found, error: ', error)))
})

/* POST user */
router.post('/', async (req, res) => {
  const { name, shortName } = req.body
  const company = await Company.create({ name, shortName })
  res.send(company)
})

module.exports = router
