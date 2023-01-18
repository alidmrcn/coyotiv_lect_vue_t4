const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const departmentSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    unique: true,
    required: true,
  },
  shortName: {
    // change property definition
    type: String,
    unique: true,
    required: true,
  },
  systemsInScope: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'System',
      autopopulate: true,
    },
  ],
  employee: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      autopopulate: true,
    },
  ],
})

class Department {}

departmentSchema.loadClass(Department)
departmentSchema.plugin(autopopulate)

module.exports = mongoose.model('Department', departmentSchema)

/* to be added later:
    - financial data
*/
