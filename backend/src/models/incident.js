const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const incidentSchema = new mongoose.Schema({
  systemsInScope: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'System',
      autopopulate: true,
    },
  ],
  noticeDescription: {
    type: String,
    required: true,
  },
  noticeDate: {
    type: Date,
    default: new Date().setHours(0, 0, 0, 0),
    required: true,
  },
  noticeTime: {
    // ? type: Date,
    type: Date,
    required: true,
  },
  noticeBy: {
    type: String,
    required: true,
  },
  responseDate: {
    type: Date,
    required: true,
  },
  responseTime: {
    // ? type: Date,
    type: String,
    required: true,
  },
  incidentType: {
    // limited selection
    type: String,
    required: true,
  },
  incidentDescription: {
    type: String,
    required: true,
  },
  resolutionDate: {
    type: Date,
    required: true,
  },
  resolutionTime: {
    // ? type: Date,
    type: String,
    required: true,
  },
  resolutionDescription: {
    type: String,
    required: true,
  },
  involvedEmployee: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      autopopulate: true,
    },
  ],
  rootCause: {
    type: String,
    required: true,
  },
  preparedBy: {
    type: String,
    required: true,
  },
  reportDate: {
    type: Date,
    required: true,
  },
  reportNo: {
    // set a rule/formula
    type: String,
    unique: true,
    required: true,
  },
})

/* to be added now:
    - this.incidentPhoto = []
    - this.resolutionPhoto = []
    - this.incidentDuration = '' // ! Function is to be added for calculation
    - this.usedMaterials = []
    - this.spendtManHour = '' // ! Function is to be added for calculation
*/

class Incident {
  // addIncidentPhoto(photo) {
  //  this.incidentPhoto.push(photo)
  // }
}

incidentSchema.loadClass(Incident)
incidentSchema.plugin(autopopulate)

module.exports = mongoose.model('Incident', incidentSchema)

/* to be added later:
    - add other functions
    - status
    - improvement actions and plan
    - 3rd party involment details
*/

/* Old Codes: 
    this.system = system
    this.noticeDescription = noticeDescription
    this.location = location
    this.noticeBy = '' // ? Shall I add by constructor or function
    this.noticeDate = '' // ? How shall I arrange date
    this.noticeTime = '' // ? How shall I arrange time
    this.responseDate = ''
    this.responseTime = ''
    this.incidentType = ''
    this.incidentDescription = ''
    this.incidentPhoto = []
    this.resolutionDate = ''
    this.resolutionTime = ''
    this.resolutionPhoto = []
    this.resolutionDescription = ''
    this.incidentDuration = '' // ! Function is to be added for calculation
    this.rootCause = ''
    this.usedMaterials = []
    this.involvedEmployee = []
    this.spendtManHour = '' // ! Function is to be added for calculation
    this.reportFilledBy = ''
    this.reportDate = ''
    this.reportNo = ''
*/
