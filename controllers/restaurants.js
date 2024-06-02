import axios from 'axios'
import { matchedData } from 'express-validator'
import { handleHttpError } from '../utils/handleError.js'
import { RECORDS_OPERATIONS } from '../utils/constants.js'
import { createRecord } from '../utils/createRecord.js'

/**
 * Get restaurants list from public API
 * @param {*} req
 * @param {*} res
 */
export const getRestaurantsList = async (req, res) => {
  try {
    const user = req.user
    req = matchedData(req)
    const town = req.town
    const url = process.env.RESTAURANTS_URL + town
    const httpResponse = await axios.get(url)
    const dataRestaurant = httpResponse.data

    if(!dataRestaurant) {
      handleHttpError(res, 'RESTAURANTS_NOT_FOUND', 404)
      return
    }

    const data = []
    dataRestaurant.forEach(object => {
      data.push(object['nombre_restaurante'])
    })

    await createRecord(user,RECORDS_OPERATIONS.RESTAURANT)

    res.send({ data })
  } catch (e) {
    console.log(e)
    handleHttpError(res, 'ERROR_GET_LIST')
  }
}