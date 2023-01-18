const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const companySchema = new mongoose.Schema({
  name: {
    // ? Shall I indicate modelName or name ?
    type: String,
    unique: true,
    required: true,
  },
  shortName: {
    // ! find different definiton !
    type: String,
    unique: true,
    required: true,
  },
  contractsSigned: [
    // ? shall it be plural or singular ?
    {
      type: mongoose.Schema.Types.ObjectId, // ! check for it
      ref: 'Contract',
      autopopulate: true, // ! check for it
    },
  ],
  // bonds: [ // !!! Create models
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Bonds'
  //     autopopulate: true,
  //   },
  // ]
})

class Company {}

companySchema.loadClass(Company)
companySchema.plugin(autopopulate)

module.exports = mongoose.model('Company', companySchema)

/* to be added later:
    - staff
    - financial data
*/
