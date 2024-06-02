import express from 'express'
import { getRestaurantsList } from '../controllers/restaurants.js'
import { validatorGetRestaurantsList } from '../validators/restaurants.js'
import { authMiddleware } from '../middleware/session.js'

const restaurantsRouter = express.Router()

/**
 * http://localhost:3001/api
 * 
 * Route request restaurants list by town
 * @openapi
 * /restaurants:
 *      get:
 *          summary: Request restaurant lists
 *          description: Returns a list with the restaurants of the chosen town (Santander)
 *          responses:
 *                  '200':
 *                      description: Successfull
 *                  '403':
 *                      description: Something wrong happened
 */
restaurantsRouter.get('/restaurants', authMiddleware, validatorGetRestaurantsList, getRestaurantsList)

export { restaurantsRouter }