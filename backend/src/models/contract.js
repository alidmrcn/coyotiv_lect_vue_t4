const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const contractSchema = new mongoose.Schema({
  contractName: {
    // ? Shall I indicate systemName or name ?
    type: String,
    required: true,
  },
  company: {
    // change definition
    type: String,
    required: true,
  },
  systemsInScope: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'System',
      autopopulate: true,
    },
  ],
  signDate: {
    type: Date,
    required: true,
  },
  effectiveDate: {
    type: Date,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  relatedDepartments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'System',
      autopopulate: true,
    },
  ],
})

/* to be added now:
    - ? How can I add file
    - own Company property is to be dded
    - this.autoRenewal = '' // ? How to indicate 'yes' or 'no'
    - this.autoRenewalDate = '' // ! Create formula
    - autorenewal function
*/

class Contract {}
contractSchema.loadClass(Contract)
contractSchema.plugin(autopopulate)

module.exports = mongoose.model('Contract', contractSchema)

/* to be added later:
    - important clauses information section
    - versions, drafts, extention information
    - file copies inculding drafts
*/
