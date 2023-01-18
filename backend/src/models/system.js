const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const systemSchema = new mongoose.Schema({
  name: {
    // ? Shall I indicate systemName or name ?
    type: String,
    unique: true,
    required: true,
  },
  shortName: {
    type: String,
    unique: true,
    required: true,
  },
  relatedCompanies: [
    // ? shall it be plural or singular ?
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      autopopulate: true,
    },
  ],
  relatedContracts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contract',
      autopopulate: true,
    },
  ],
})

class System {}

systemSchema.loadClass(System)
systemSchema.plugin(autopopulate)

module.exports = mongoose.model('System', systemSchema)

/* to be added later:
    - staff
    - financial data
*/
