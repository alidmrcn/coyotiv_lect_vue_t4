const express = require('express')
const System = require('../models/system')

const router = express.Router()

/* GET contracts listing. */
router.get('/', async (req, res) => {
  res.send(await System.find({}).catch(error => console.log('Systems not found, error: ', error)))
})

/* GET initialize */
router.get('/initialize', async (req, res) => {})

/* POST user */
router.post('/', async (req, res) => {})

module.exports = router
