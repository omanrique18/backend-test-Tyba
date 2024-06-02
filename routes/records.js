import express from 'express'
import { getRecordsList } from '../controllers/records.js'

const recordsRouter = express.Router()

/**
 * http://localhost:3001/api
 * 
 * Route request records history
 * @openapi
 * /records:
 *      get:
 *          summary: Request records history
 *          description: Returns the history of all operations made (registry, login and restaurants consults)
 *          responses:
 *                  '200':
 *                      description: Successfull
 *                  '403':
 *                      description: Something wrong happened
 */
recordsRouter.get('/records', getRecordsList)

export { recordsRouter }