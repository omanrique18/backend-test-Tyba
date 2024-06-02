import { recordsModel } from '../models/records.js'
import { handleHttpError } from '../utils/handleError.js'

/**
 * Get records list form database!
 * @param {*} req
 * @param {*} res
 */
export const getRecordsList = async (req, res) => {
  try {
    const data = await recordsModel.find({})
    res.send({ data })
  } catch (e) {
    console.log(e)
    handleHttpError(res, 'ERROR_GET_RECORDS')
  }
}