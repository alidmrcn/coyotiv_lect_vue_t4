const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const shiftSchema = new mongoose.Schema({
  shiftno: {
    type: Number,
    // unique: true,
    required: true,
  },
  day: {
    type: String, // change to date
    // default: new Date(),
    required: true,
  },
  period: {
    type: String,
    // default: 'Day',
    required: true,
  },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      autopopulate: true,
    },
  ],
})

class Shift {
  // addEmployee(employee) {
  //   this.employees.push(employee)
  // }
}
shiftSchema.loadClass(Shift)
shiftSchema.plugin(autopopulate)

module.exports = mongoose.model('Shift', shiftSchema)
