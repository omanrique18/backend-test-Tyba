import { recordsModel } from '../models/records.js'

/**
 * Needs user object and the type of operation as parameters
 * @param {*} dataUser
 * @param {*} operation
 */
export const createRecord = async (dataUser,operation) => {
  const timestamp = Date.now()
  const date = new Date(timestamp)

  const record = await recordsModel.create({
    operation,
    email: dataUser.get('email'),
    date: date.toString()
  })
}
