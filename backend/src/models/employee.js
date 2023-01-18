const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  personelNo: {
    type: Number,
    unique: true,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  // departmentIn: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Department',
  //   autopopulate: true,
  // },
  jobTitle: {
    type: String,
    required: true,
  },
  // startDate: {
  //   type: Date,
  //   default: new Date().setHours(0, 0, 0, 0),
  //   required: true,
  // },
})

/* to be added now:
    - this.leaveDate = '' // ? Can I leave it as a string?
    - this.status = '' // ! currently employeed or left, also I wanted add relation with the leave date
    - this.earnedVacationDays = ''
    - this.spentVacations = [[]] // ? How can leave nested array? Such as [spend days and date]
    - this.shifts = [] // ? How shall I define dates
*/

class Employee {
  //   calculateEarnedVacation() {
  //     return new Date().now() - this.startDate // ! check the formula
  //   }
  //   recordLeave(leaveDate) {
  //     this.leaveDate = leaveDate
  //   }
  //   addShift(shift) {
  //     this.shifts.push(shift)
  //   }
  //   }
}
employeeSchema.loadClass(Employee)
employeeSchema.plugin(autopopulate)

module.exports = mongoose.model('Employee', employeeSchema)

/* to be added later:
    - salary information
    - total payments
    - estimated leave compantations
*/
