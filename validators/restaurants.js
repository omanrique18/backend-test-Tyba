import { check } from 'express-validator'
import { validateResults } from '../utils/handleValidator.js'

const validatorGetRestaurantsList = [
  check('town')
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
  (req, res, next) => {
      return validateResults(req, res, next)
  }
]

export { validatorGetRestaurantsList }