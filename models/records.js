import mongoosee from 'mongoose'

const recordSchema = new mongoosee.Schema(
  {
    email: {
      type: String,
    },
    operation: {
      type: ['Registry', 'Login', 'Restaurants consult']
    },
    date: {
      type: String,
    }
  }
)

export const recordsModel = mongoosee.model('records_history', recordSchema)