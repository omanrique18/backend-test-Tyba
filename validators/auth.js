import { check } from 'express-validator'
import { validateResults } from '../utils/handleValidator.js'

const validatorRegister = [
  check('name')
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
  check('password')
    .exists()
    .notEmpty()
    .isLength({min:6, max:15}),
  check('email')
    .exists()
    .notEmpty()
    .isEmail(),
  (req, res, next) => {
      return validateResults(req, res, next)
  }
]

const validatorLogin = [
  check('password')
    .exists()
    .notEmpty()
    .isLength({min:6, max:15}),
  check('email')
    .exists()
    .notEmpty()
    .isEmail(),
  (req, res, next) => {
      return validateResults(req, res, next)
  }
]

export { validatorRegister, validatorLogin}